import React, {useState} from 'react';
import LayoutDashBoard from '../../Layout/LayoutDashboard';
import RightSide from '../RightSide/Rightside';
import '../scss/ChangeContent.scss';
import ShowUpImage from '../ShowImage/ShowImage';
import styles from './Images.module.scss'
const ChangeContent = ({data}) =>{
    // trigger event of file upload
    const [image, setImage] = useState('');
    const [showUpImage, setShowUpImage] = useState('');
    const [checkImage, setCheckImage] = useState(false);
    const [checkData, setCheckData] = useState(false);
    const [title, setTitle] = useState(data.title);
    const [content, setContent] = useState(data.content);
    const [urlImage, setUrlImage] = useState('');
    const onChangeHandler = (event) =>{
        setImage(event.target.files[0]);
        const [files] = event.target.files;
        if(files){
            setUrlImage(URL.createObjectURL(files));
        }
    }
    const sendServerImage = (event) =>{
        event.preventDefault();
        const dataImage = new FormData();
        // set the object to the same with object multer uses => method='post' enctype='multipart/form-data'
        // check it in multer
        dataImage.append('image', image);
        fetch('http://localhost:3001/upload/image', {
            method: 'POST',
            body: dataImage
        }).then(response => response.json())
        .then(data => {
            if(data.filename){
                setShowUpImage(data.filename);
                setCheckImage(true);
            }
        })
        .catch(err => console.log(err));
        fetch('http://localhost:3001/update/blog', {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                newTitle: title,
                newContent: content,
                url: new Date().getDate() + '-' + image.name,
                id: data.id
            })
        }).then(response => response.json())
        .then(data =>{
            if(data === 1){
                setCheckData(true);
            }
            else{
                setCheckData(false);
            }
        }).catch(err => console.log(err));
    }

    const changeTitleHandler = (event) =>{
        setTitle(event.target.value);
    }
    const changeContentHandler = (event) =>{
        setContent(event.target.value);
    } 
    const setCheck = () =>{
       setCheckImage(false); 
    }
    return(
        <LayoutDashBoard>
            <RightSide>
                <form className={styles.form} onSubmit={sendServerImage}>
                    <div className='background-content-change'></div>
                    <div className='text-form-1'>
                        <label htmlFor='title'>Post Title</label>
                        <input id='title'
                        onChange={changeTitleHandler} 
                        defaultValue={data.title} 
                        type='text' 
                        placeholder='Title'></input>
                    </div>
                    <div className='text-form-2'>
                        <label htmlFor='content'>Description</label>
                        <textarea
                        id='content' 
                        defaultValue={data.contentblog}
                        onChange={changeContentHandler}
                        ></textarea>
                    </div>
                    <div className='load-file'></div>
                    <div className='upload-file'>
                        <label htmlFor='upload'>Upload Your Image!</label><br/>
                        <input onChange={onChangeHandler}
                        id='upload' 
                        type='file' 
                        className='form-input-file'
                        name='image'
                        />
                        <div className={styles.image}>
                            <img src={urlImage} alt='' loading='lazy'/>
                        </div>
                        <div className='button-area'>
                            <button type='submit' className='button-save'>Save</button>
                        </div>
                    </div>
                    {
                        showUpImage !== '' && checkData === true ?
                        <ShowUpImage 
                        check={checkImage} 
                        url={showUpImage}
                        setCheck={setCheck}
                        />
                        :
                        ''
                    }
                </form>
            </RightSide>
        </LayoutDashBoard>
    )
}

export default ChangeContent

