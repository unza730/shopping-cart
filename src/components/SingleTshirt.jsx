import React,{useState, useContext} from 'react'
import { useParams } from "react-router-dom";
import CartContext from '../Context1/Cart/CartContext';
import  tshirts   from '../Tshirt';

const SingleTshirt = () => {
  const { id } = useParams();
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
 
const { addToCart } =
  useContext(CartContext);
    console.log(id);
  const tshirt = tshirts.find((p) => p.id === id);
  console.log(tshirt.color);
    return (
      <div>
        <section className="text-white   body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 h-[350px] mx-auto flex flex-wrap ">
           <img
                alt="ecommerce"
                class="lg:w-1/2 w-full h-52 object-cover lg:h-[350px] object-center rounded mt-1"
                src={tshirt.image}
              />

              <div className="lg:w-1/2 w-full  w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 border   lg:pl-10 lg:py-6  mt-1  px-7 py-7 lg:px-0  lg:mt-0">
              <h1 className="text-white text-2xl title-font font-medium mb-1">
                  {tshirt.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                   </span>
                </div>

                <p className="leading-relaxed text-white">
                  {tshirt.description}
                </p>

                <div className="flex justify-between mr-10">
                  <div className="">
                    <h2 className="text-2xl">Choose Size</h2>
                    <select
                      className="py-1 rounded-md cursor-pointer text-black"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {tshirt.sizes.map((size) => (
                        <option value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="">
                    <h2 className="text-2xl">Choose Color</h2>
                    <select
                      className="py-1 rounded-md cursor-pointer text-black"
                      value={size}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {tshirt.color.map((color) => (
                        <option value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  <button
                    className=" text-white px-2 bg-yellow-600 border-0 p-1 focus:outline-none  rounded"
                    onClick={() => addToCart(tshirt)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default SingleTshirt
