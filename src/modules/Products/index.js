import ProductCard from '../../componets/ProductCard'
import Categories from '../../componets/Categories'
import { useEffect, useState } from 'react';
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fatchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            //  .then(res=>res.json())
            //  .then(json=>console.log(json))
            const data = await response.json()
            console.log(data);
            setProducts(data);
        }
        fatchProducts()
    }, [])
    return (
        <div>
            <Categories></Categories>
            <div className="flex flex-col text-center w-full mt-20 ">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
            </div>

            {
                products.length >0 ?
                <ProductCard products={products}/>
                :
            <div>Loading....</div>
            }



        </div>
    )
}

export default Products
