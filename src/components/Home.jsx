import React from 'react'
import { Tshirts } from '../Tshirts'
import Product from './Product'

const Home = () => {
    return (
        <div>
            {Tshirts.map((tshirt) => (
                <Product tshirt={tshirt} />
            ))}
        </div>
    )
}

export default Home
