/** @format */

import React, { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../../dark-mode";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";
import Language from "../../language";
import { withTranslation } from "react-i18next";
import { AiOutlineShoppingCart } from "react-icons/ai";
import BasketCard from "../../basket-modal";
import { CardContext } from "../../../context/card-context";

const Header = (props) => {
  const { basket } = useContext(CardContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [text, setText] = useState();
  const [isHidenModal, setIsHidenModal] = useState(false);
  const hundleHidenModal = () => {
    setIsHidenModal(!isHidenModal);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // toggle the hamburger menu
  };

  const { t } = props;

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 mb-[50px] sticky top-0 z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://c8.alamy.com/comp/2HWCRBR/trolley-shopping-cart-on-letter-e-initial-online-and-shopping-logo-concept-template-2HWCRBR.jpg"
              className="h-8"
              alt="trolley"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {t("eCommerce")}
            </span>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl dark:text-white"
            aria-label="Toggle Menu">
            <GiHamburgerMenu />
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-multi-level">
            <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page">
                <Link to="/home">{t("Products")}</Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  {t("About")}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        More info
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id="doubleDropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton">
                          <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Overview
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            My downloads
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Billing
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Rewards
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Earnings
                    </li>
                  </ul>
                  <div className="py-1">
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                    </div>
                  </div>
                </div>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to="/service">{t("Services")}</Link>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                {t("Pricing")}
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to="/contact">{t("Contact")}</Link>
              </li>

              <li className="flex items-center justify-center">
                <DarkMode />
              </li>

              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link className="flex gap-x-1" to="/login">
                  <VscAccount />
                  <span className="text-xs cursor-pointer">Log in</span>
                </Link>
              </li>
              <li>
                <Language />
              </li>
              <li className="relative">
                <div
                  onClick={() => hundleHidenModal()}
                  className="flex dark:text-white hover:text-blue-600 gap-x-1 items-center cursor-pointer">
                  <AiOutlineShoppingCart />
                  <h3 className="text-xs">Basket</h3>
                  <sup className="text-rose-900 text-xs">{basket.count}</sup>
                </div>

                {isHidenModal && (
                  <div className="fixed t-5 r-5">
                    <BasketCard hundleHidenModal={hundleHidenModal} />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default withTranslation()(Header);
