/** @format */
"use client";

import React from "react";

import { Spinner } from "flowbite-react";

function Loading() {
  return (
    <>
      <div className="fixed top-1/2 bottom-1/2 right-1/2 left-1/2 z-50 ">
        <Spinner
          color="pink"
          aria-label="Medium sized spinner example"
          size="lg"
        />
      </div>
    </>
  );
}
export default Loading;
