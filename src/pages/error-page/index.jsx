/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { TERipple } from "tw-elements-react";
export function ErrorPage() {
  return (
    <>
      <div className="mx-auto grid place-items-center text-center px-8">
        <div>
          <div
            variant="h1"
            color="blue-gray"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl">
            Error 404 <br /> It looks like something went wrong.
          </div>

          <div className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
            Don&apos;t worry, our team is already on it.Please try refreshing
            the page or come back later.
          </div>

          <Link to="/home">
            <TERipple>
              <button
                type="button"
                className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                back home
              </button>
            </TERipple>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;








