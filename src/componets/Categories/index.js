import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fatchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            console.log(data,'data');
            setCategories(data);
        }
        fatchCategories()
    }, [])

    if (categories.length===0) return <div>Loading...</div>
    return (
            <FeatureCard card={categories}></FeatureCard>
    )

}

export default Categories
