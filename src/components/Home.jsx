import React from 'react'
import tshirts  from '../Tshirt'
import Product from './Product'

const Home = () => {
    return (
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-[#FAEBEFFF]">
              TShirts Product
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              laboriosam! Adipisci doloremque molestias voluptatum rerum error
              nemo ducimus, cum totam architecto quod quam et culpa corporis
              similique quo laborum asperiores.
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 space-x-1 lg:mx-auto">
            {tshirts.map((tshirt, index) => (
                <Product tshirt={tshirt} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home
