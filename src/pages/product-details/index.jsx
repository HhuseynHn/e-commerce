/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/loading";
import { NotFound } from "../not-found";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((data) => {
      setProduct(data.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (Object.keys(product).length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <div className="relative flex mb-[70px] mx-auto w-8/12 bg-slate-100 dark:bg-gray-800 p-4 gap-x-9 rounded-lg">
        <div className="absolute dark:text-gray-300 text-xl right-[-17px] top-[-17px] cursor-pointer">
          <Link to={"/home"}>
            <AiOutlineClose />
          </Link>
        </div>
        <div className="w-2/3 min-w-40 bg-white dark:bg-gray-700 rounded-lg p-2">
          <img src={product.image} alt="" className="rounded-lg" />
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg flex flex-col gap-y-2 p-4 w-full text-slate-500 dark:text-gray-300 text-sm">
          <h2 className="mb-10 text-2xl text-slate-900 dark:text-white font-bold">{`${product.title}`}</h2>
          <h2>{`Name: ........ ${product.title}`}</h2>
          <h2>{`Seria: ........ 000${product.id}`}</h2>
          <h2>{`Category: ........ ${product.category}`}</h2>
          <h2>{`Description: ........ ${product.description}`}</h2>
          <h2>{`Rateting: ........ ${product.rating.rate}`}</h2>
          <h2>{`Price: ........ ${product.price}`}</h2>
          <a
            href="#"
            className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32 mt-16">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
