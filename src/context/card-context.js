/** @format */

import { createContext, useState } from "react";
export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [basket, setBasket] = useState({
    count: 0,
    products: [],
    quantity: 0,
    total: 0,
  });

  function addToCard(product) {
    setBasket((prevBasket) => {
      const newProducts = [...prevBasket.products];
      const foundProductIndex = newProducts.findIndex(
        (prod) => prod.id == product.id
      );

      if (foundProductIndex !== -1) {
        newProducts[foundProductIndex].count =
          newProducts[foundProductIndex].count + 1;
        newProducts[foundProductIndex].totalRow =
          newProducts[foundProductIndex].count *
          newProducts[foundProductIndex].price;
      } else {
        newProducts.push({
          ...product,
          count: 1,
          totalRow: product.price,
        });
      }

      const newTotal = newProducts.reduce(
        (acc, prod) => acc + prod.count * prod.price,
        0
      );
      const newBasket = {
        ...prevBasket,
        count: prevBasket.count + 1,
        products: newProducts,
        total: newTotal,
      };

      return newBasket;
    });
  }

  function removeFromCard(product) {
    setBasket((prevBaskeProductList) => {
      const productList = [...prevBaskeProductList.products];
      const foundProductIndex = productList.findIndex(
        (prod) => prod.id == product.id
      );

      let newBasket = {};

      if (productList[foundProductIndex].count > 1) {
        newBasket = {
          ...prevBaskeProductList,
          count: prevBaskeProductList.count - 1,
          products: productList,
        };
      } else if (productList[foundProductIndex].count == 1) {
        newBasket = {
          ...prevBaskeProductList,
          count: prevBaskeProductList.count,
          products: productList,
        };
      }

      if (
        foundProductIndex !== -1 &&
        productList[foundProductIndex].count > 1
      ) {
        productList[foundProductIndex].count =
          productList[foundProductIndex].count - 1;
        productList[foundProductIndex].totalRow =
          productList[foundProductIndex].count *
          productList[foundProductIndex].price;
      }
      const newTotal = productList.reduce(
        (acc, prod) => acc + prod.count * prod.price,
        0
      );

      newBasket = {
        ...newBasket,
        total: newTotal,
      };

      return newBasket;
    });
  }
  function deleteItem(product) {
    setBasket((prevBasket) => {
      let productList = [...prevBasket.products];
      const foundProductIndex = productList.findIndex(
        (prod) => prod.id == product.id
      );

      if (foundProductIndex !== -1) {
        basket.count = basket.count - productList[foundProductIndex].count;
        productList = productList.filter((prod) => prod.id !== product.id);
        const newTotal = productList.reduce(
          (acc, prod) => acc + prod.count * prod.price,
          0
        );

        return {
          ...prevBasket,
          count: basket.count,
          products: productList,
          total: newTotal,
        };
      }
      return prevBasket;
    });
  }

  const globalState = { basket, addToCard, removeFromCard, deleteItem };

  return (
    <CardContext.Provider value={globalState}>{children}</CardContext.Provider>
  );
};
