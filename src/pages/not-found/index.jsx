/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { TERipple } from "tw-elements-react";

export const NotFound = () => {
  return (
    <>
      <div className="text-center">
        <p className="font-semibold text-indigo-600 text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/home">
            <TERipple>
              <button
                type="button"
                className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-indigo-600">
                back home
              </button>
            </TERipple>
          </Link>
          <a href="#" className="text-sm font-semibold text-indigo-600">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </>
  );
};
