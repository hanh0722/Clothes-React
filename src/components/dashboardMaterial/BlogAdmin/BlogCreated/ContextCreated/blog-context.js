import React, {createContext, useState} from 'react';

const BlogContext = createContext({
    title: '',
    content: '',
    image: {},
    publish: true,
    success: false,
    validImage: true,
    valid: false,
    changeTitleHandler: () => {},
    changePublishHandler: () => {},
    changeContentHandler: () => {},
    changeImageHandler: () => {},
    sendDataHandler: () => {},
    cancelLayoutHandler: () => {}
})

export const BlogContextProvider = (props) =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isPublished, setIsPublished] = useState(true);
    const [image, setImage] = useState({});
    const [successful, setSuccessful] = useState(true);
    const [validImage, setValidImage] = useState(true);
    const [valid, setValid] = useState(false);
    const changeTitleHandler = (event) =>{
        setTitle(event.target.value);
    };
    const changeContentHandler = (event) =>{
        setContent(event.target.value);
    }
    const changePublishHandler = () =>{
        setIsPublished(prevState =>{
            return !prevState;
        })
    };
    const changeImageHandler = (data) =>{
        setImage(data);
    };
    const sendDataHandler = (event) =>{
        event.preventDefault();
        const dataForm = new FormData();
        dataForm.append('image', image);
        fetch('http://localhost:3001/upload/image', {
            method: 'POST',
            body: dataForm
        }).then(response => response.json())
        .then(data =>{
            if(!data.filename){
                setValidImage(false);
            }
        }).catch(err => console.log(err));
        fetch('http://localhost:3001/upload/new-post', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                title: title,
                content: content,
                image: new Date().getDate() + "-" + image.name,
                active: isPublished
            })
        }).then(response => response.json())
        .then(data => {
            if(data.id){
                setSuccessful(true);
                setValid(true);
            }
            else{
                setSuccessful(false);
            }  
        }).catch(err => console.log(err));
    }
    const cancelLayoutHandler = () =>{
        setValidImage(true);
        setSuccessful(true);
        setValid(false);
    }
    return <BlogContext.Provider value={{
        title: title,
        content: content,
        publish: isPublished,
        image: image,
        success: successful,
        validImage: validImage,
        valid: valid,
        changeTitleHandler: changeTitleHandler,
        changeContentHandler: changeContentHandler,
        changePublishHandler: changePublishHandler,
        changeImageHandler: changeImageHandler,
        sendDataHandler: sendDataHandler,
        cancelLayoutHandler: cancelLayoutHandler
    }}>
        {props.children}
    </BlogContext.Provider>
}

export default BlogContext;