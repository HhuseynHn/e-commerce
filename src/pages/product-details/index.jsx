/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/loading";
import { NotFound } from "../not-found";

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
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
    </>
  );
};

export default ProductDetails;
