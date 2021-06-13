import React, {useEffect} from 'react';
import ProductsLatest from './latestproduct';
import AOS from 'aos';
const ListProductAll = ({onFilter, onData}) =>{

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            delay: 200
        })
    }, [])

    const data = onData.map((items, i) =>{
        return <ProductsLatest key={i} url={`${process.env.PUBLIC_URL}/img/${items.img}`} nameProduct={items.name} oldPrice={items.sale} newPrice={items.price}/>
    })
    
    return(
        <div data-aos-offset='200' data-aos='zoom-in' className='container-all-latest'>
            <div className='container-latest-products'>
                <p className='title-text title-latest'>Latest products</p>
                <ul className='route-list'>
                    <li onClick={() => onFilter('all')} tabIndex='1'>All</li>
                    <li onClick={() => onFilter('croptop')} tabIndex='2'>Crop top</li>
                    <li onClick={() => onFilter('dress')} tabIndex='3'>Dress</li>
                    <li onClick={() => onFilter('jacket')} tabIndex='4'>Jacket</li>
                    <li onClick={() => onFilter('men')} tabIndex='5'>Men</li>
                    <li onClick={() => onFilter('women')} tabIndex='6'>Women</li>
                </ul>
                <div className='container-products'>
                    {data}
                </div>
            </div>
        </div>
    )
}

export default ListProductAll;