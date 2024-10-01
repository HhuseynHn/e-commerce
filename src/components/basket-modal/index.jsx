/** @format */

import React, { useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/card-context";

const BasketCard = ({ hundleHidenModal }) => {
  const { basket } = useContext(CardContext);

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          hundleHidenModal();
        }}>
        <div className="bg-gray-100 p-5 relative right-44 flex gap-y-3 flex-col mt-2 w-60 rounded-md">
          <ul className=" flex flex-col  gap-y-2 max-h-80 overflow-auto ">
            {basket.products.map((rowBasket, index) => {
              return (
                <>
                  <li key={rowBasket.id} className="flex p-1 gap-x-4 border">
                    <div>
                      <img
                        className="w-7 h-7 bg-contain"
                        src={rowBasket.image}
                        alt=""
                      />
                    </div>

                    <div className="flex-col">
                      <div>
                        <p className="text-xs">
                          {rowBasket.title.slice(0, 20)}
                        </p>
                      </div>
                      <div className="flex">
                        <div>
                          <h3 className="text-xs">{`${rowBasket.count} x`}</h3>
                        </div>
                        <div>
                          <h3 className="text-xs">{`${rowBasket.price} AZN`}</h3>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>

          <div className="flex justify-center flex-col aligin-center text-xs">
            <div className="flex justify-center text-slate-500">
              <h3>{`Total ${basket.count} product`}</h3>
            </div>
            <div className="text-lg flex justify-center">{`${basket.total.toFixed(
              2
            )} AZN`}</div>
          </div>
          <Button
            LinkComponent={Link}
            to="/basket"
            variant="outlined"
            onClick={() => hundleHidenModal()}
            color="error"
            className="w-full"
            sx={{
              borderRadius: "16px",
              padding: "0px",
            }}>
            Go basket
          </Button>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default BasketCard;
