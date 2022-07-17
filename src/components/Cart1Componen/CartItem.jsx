import React,{useState, useContext } from 'react'
import CartContext from '../../Context1/Cart/CartContext';
import { BiTrashAlt } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import OrderDetail from '../OrderDetail';
const CartItem = ({ product }) => {
const [open, setOpen] = useState(false);
  const { removeFromCart, increase, decrease, cartItems, checkout, clearCart } = useContext(CartContext);
  


  // console.log(product.quantity);

  return (
     
          <div>
            <section className="text-white body-font ">
              <div className="container px-5 py-24 mx-auto  flex flex-wrap space-y-24 lg:space-y-0 ">
                <div className="lg:w-2/3 w-full mx-auto overflow-auto ">
                  <table className="table-auto relative z-2 w-full text-left whitespace-no-wrap   bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 border">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-100 rounded-tl rounded-bl">
                          Product
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-100">
                          Name
                        </th>
                   
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-100">
                          Price
                        </th>

                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-100">
                          Quantity
                        </th>

                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-100">
                          Total
                        </th>
                        <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-100 rounded-tr rounded-br"></th>
                      </tr>
                    </thead>
                    <tbody>
                        
                        <tr key={product.id}>
                          <td className="px-4 py-3">
                            <img src={product.image} className="w-12" alt="" />
                          </td>
                          <td className="border-t-2 border-gray-200 px-4 py-3">
                            {product.name}
                          </td>
                          <td className="px-4 py-3 text-lg text-white">
                            {product.prices}
                          </td>
                          <td className="px-4 py-3 text-lg mt-3 text-white flex items-center justify-center gap-2">
                            {product.quantity > 1 && (
                              <AiFillMinusCircle onClick={() => decrease(product)} />
                            )}

                            {product.quantity === 1 && (
                     
                              <BiTrashAlt onClick={() => removeFromCart(product)} />
                       
                            )}

                            {product.quantity}
                            <BsFillPlusCircleFill onClick={() => increase(product)} />
                          </td>
                          <td className="px-4 py-3 text-lg text-white">
                            ${product.prices * product.quantity}
                          </td>

                        </tr>
                    
         
                
                    </tbody>
                  </table>
                </div>

                <div className="p-4 lg:w-1/4 md:w-1/2 h-2/6 bg-white text-yelow-600 h-full w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 border">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="w-full relative">
                      <h2 className="title-font font-medium text-3xl text-white">
                        Cart Total
                      </h2>
                      <div className="flex flex-col justify-center items-center space-y-2  my-3 text-lg">
                        <div className="flex gap-3 ">
                          <span>Subtotal: </span>
                          <span> ${product.prices * product.quantity}</span>
                        </div>
                        <div className="flex gap-3">
                          <span>Total: </span>
                          <span> ${product.prices * product.quantity}</span>
                        </div>
                 
                      </div>
                    </div>
                    {open ? (
                      <div className="mt-15">
                        <button
                          className=" text-white bg-yellow-700 border-2 border-gray-50 bg-[#333D79FF] text-white border-0 py-2 px-6 focus:outline-none hover:bg-[#333D79FF] rounded"
                      
                        >
                          Close Now
                          <OrderDetail />
                        </button>
                      </div>
                    ) : (
                      <div className="mt-15">
                        <button
                          className=" text-white bg-yellow-700 border-2 border-gray-50 bg-[#333D79FF] text-white border-0 py-2 px-6 focus:outline-none hover:bg-[#333D79FF] rounded"
                          onClick={() => setOpen(!open)}
                        >
                          Checkout Now
                        </button>
                      </div>
                    )}
               
                  </div>
                </div>
              </div>
            </section>
          </div>
      
      
    );
}

export default CartItem