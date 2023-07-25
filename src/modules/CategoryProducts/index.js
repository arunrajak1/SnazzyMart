import React, { useEffect, useState } from 'react'
import ProductCard from '../../componets/ProductCard';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
    const { name } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fatchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
        
            const data = await response.json()
            console.log(data);
            setProducts(data);
        }
        fatchProducts()
    }, [])
    if (products.length === 0) return <div>Loading.....</div>
    return (
        <ProductCard products={products}></ProductCard>
    )
}

export default CategoryProducts
