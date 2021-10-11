import react, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import { OrderLocationData, Product } from './types';
import './style.css';
import { fetchLocalMapBox, fetchProducts } from './api';
import OrderLocation from './OrderLocation';
import Footer from '../Footer';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, [])
    

    return(
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductList 
                    products={products}/>
                <OrderLocation 
                    onChangeLocation={location => setOrderLocation(location)}/>
            </div>
            <Footer />
        </>
    )
}

export default Orders;