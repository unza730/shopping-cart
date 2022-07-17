import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const OrderDetail = () => {
    const [createOrder, setCreateOrder] = useState({
        name: '',
        address: '',
        phoneno: '',
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault()
        setCreateOrder({ ...createOrder, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Created");
         toast("Order Created");
        navigate('/');
    }
        return (
          <div className="w-3/4 md:w-full  absolute z-[999] flex justify-center items-center right-0  mt-4">
            <section className="text-blue-900 bg-gray-300  body-font relative ">
              <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-col text-center w-full">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900-900">
                    You will pay after delivery
                  </h1>
                </div>
                <div>
                  <div className=" -m-2">
                     <div className="p-1 ">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="leading-7 text-sm text-blue-900"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="p-2 ">
                        <div className="relative">
                          <label
                            htmlFor="email"
                            className="leading-7 text-sm text-blue-900"
                          >
                            Phone no
                          </label>
                          <input
                            type="number"
                            id="number"
                            name="phoneno"
                            onChange={handleChange}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="message"
                            className="leading-7 text-sm text-blue-900"
                          >
                            Address
                          </label>
                          <textarea
                            id="message"
                            name="address"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button
                          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                         onClick={handleSubmit}
                        >
                          Order
                        </button>
                      </div>
                   </div>
                </div>
              </div>
            </section>
          </div>
        );
    
}

    export default OrderDetail;
