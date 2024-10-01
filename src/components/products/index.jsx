/** @format */

import axios, { Axios } from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../loading";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DarkMode from "../dark-mode";
import useDarkSide from "../dark-mode/dark-mode";
import "animate.css";
import { CardContext } from "../../context/card-context";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1); // State for current page
  const [rowsPerPage] = useState(6); // Set the number of products per page
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode
  const [animateClass, setAnimateClass] = useState(""); // State to handle animation class
  const { addToCard } = useContext(CardContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => {
        setProducts(data.data);
        setIsLoading(false);
      })
      .catch((e) => {});
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / rowsPerPage);

  // Get products for the current page
  const displayedProducts = products.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#ffffff", // White text color in dark mode
      },
      text: {
        primary: isDarkMode ? "#ffffff" : "#000000", // Adjust text color based on mode
      },
    },
  });
  return (
    <>
      <div className="flex gap-5 flex-wrap w-8/12 ml-auto mr-auto justify-between ">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className={`w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:animate-pulse `}>
            <Link to={`/product-details/${product.id}`}>
              <img
                className="p-8 rounded-t-lg  h-80 w-full "
                src={product.image}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-5 h-14">
              <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title.length < 60
                  ? product.title
                  : `${product.title.slice(1, 60)}...`}
              </h5>
            </div>

            {/* card bellow side */}
            <div className="px-5 pb-3">
              <div className="flex items-center mt-2.5 mb-5">
                {/* Rating */}
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Render stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating.rate)
                          ? "text-yellow-300"
                          : "text-gray-200 dark:text-gray-600"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {product.rating.rate}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white animate__animated animate__bounce">
                  ${product.price}
                </span>
                {/*   animate__animated */}
                <button
                  className={`text-white bg-blue-700 hover:bg-blue-800 hover:animate-pulse focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  onClick={() => addToCard(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Component */}
      <ThemeProvider theme={theme}>
        <div className=" flex justify-center mt-5">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Products;
