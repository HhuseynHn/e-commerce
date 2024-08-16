/** @format */
import React, { useState, useMemo } from "react";

const ExpensiveCalculation = ({ a, b }) => {
  const memoizedValue = useMemo(() => {
    console.log("Calculating...");
    return 1 + 3;
  }, [2, 1]);

  // Without useMemo, this function would be recalculated on every render.

  return (
    <>
      <div>The result is:{memoizedValue} </div>
    </>
  );
};
export default ExpensiveCalculation;
