import React from 'react';
import Container from '../Helpers/Container';
import styles from './ShopGender.module.scss';
import MenuGender from './MenuGender/MenuGender';
import { useParams } from 'react-router-dom';
import ProductGender from './ProductGender/ProductGender';
const filterItemsGender = (array, gender) =>{
    const products = array.filter(items =>{
        return items.gender === gender;
    })
    return products;
}
const ShopGender = ({products}) =>{
    let {gender} = useParams();
    const array = [];
    const male = filterItemsGender(products, 'male');
    const female = filterItemsGender(products, 'female');
    const accessories = filterItemsGender(products, 'accessories');
    array.push(male);
    array.push(female);
    array.push(accessories);
    const dataProduct = filterItemsGender(products, gender);
    return(
        <>
            <Container className={`${styles['container_gender']}`}>
                <MenuGender data={array}/>
                <ProductGender products={dataProduct}/>
            </Container>
        </>
    )
}

export default ShopGender;