import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${getRandomProductId()}`);
      const data = await response.json();
      setRandomImage(data.image);
    };
    fetchRandomImage();
  }, []);

  const getRandomProductId = () => {
    // Generate a random number between 1 and 20 (assuming there are 20 products in the API)
    const randomProductId = Math.floor(Math.random() * 20) + 1;
    return randomProductId;
  };
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
            <br className="hidden lg:inline-block" />readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <Link to="/cart" className="inline-flex text-white bg-blue-600  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy now</Link>
            <Link to="/cart" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Add to Cart</Link>
          </div>
        </div>
        <div className="">
          {randomImage && <img className="object-contain h-full w-96 block" alt="Random product" src={randomImage}   width="500" height="400" />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
