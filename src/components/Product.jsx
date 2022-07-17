import React from "react";
import { Link } from "react-router-dom";
const Product = ({ tshirt }) => {
  return (
    <div>
      <section className="text-white body-font">
        <div className="container md:px-5 md:py-9 mx-auto ">
          <div className="flex flex-col flex-wrap -m-4 ">
            <div className="p-3 w-full cursor-pointer lg:w-80 md:w-full bg-white    opacity-1 rounded-md border border-1 border-r-yellow-800 h-full w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
              <div className="h-full flex flex-col items-center text-center ">
                <Link to={`/product/${tshirt.id}`}>
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={tshirt.image}
                  />
                </Link>

                <div className="w-full">
                  <h2 className="title-font font-bold text-lg  text-white ">
                    {tshirt.name}
                  </h2>
                  <h3 className="text-white font-bold mb-3"></h3>
                  <p className="mb-4 text-white w-full h-50 truncate">
                    {tshirt.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
