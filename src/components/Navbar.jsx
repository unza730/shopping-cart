import React, { useContext } from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MdFoodBank } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { Link } from 'react-router-dom';
import CartContext from "../Context1/Cart/CartContext";
const Navbar = () => {
  const { cartItems } = useContext(CartContext);
 
    return (
      <div>
        <header className=" body-font mb-3 bg-white  h-full w-full  shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white text-decoration-none mb-2 md:mb-0">
              <MdFoodBank className="text-4xl" />
              <span className="ml-3 text-2xl text-white">Ecommerce App</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
                    <Link to="/cart">
                    
              <button className="inline-flex items-center  text-white border-0 py-1 px-3 focus:outline-none hover:bg-[#FAEBEFFF] hover:text-yellow-900 rounded text-base mt-1 md:mt-0">
                            <Badge
                                badgeContent={cartItems.length}
                                color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </button>
            </Link>
          </div>
        </header>
      </div>
    );
}

export default Navbar
