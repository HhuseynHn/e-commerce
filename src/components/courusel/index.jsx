/** @format */
"use client";

import { Carousel } from "flowbite-react";
import "flowbite/dist/flowbite.css";

const Courusel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-[50px] -z-1">
      <Carousel slideInterval={5000}>
        <img
          src="https://www.intelligenthq.com/wp-content/uploads/2020/03/smart-cities-technology-trends.jpg"
          alt="..."
        />
        <img
          src="https://watermark.lovepik.com/photo/40146/3966.jpg_wh1200.jpg"
          alt="..."
        />
        <img
          src="https://www.itsecurityguru.org/wp-content/uploads/2015/12/smarttech.jpg"
          alt="..."
        />
        <img
          src="https://www.eubusinessnews.com/wp-content/uploads/2023/08/smart-city.jpg"
          alt="..."
        />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLMHzVULZWWz7zp88mgI1-N-EKHPZBWGnna8gBjzPR0MGtv-tGyelf53WXKGvES-VJtVXowY9hDQDJu3pSgj-TmEGWq_3ynmx-LDGaF4GAK-iTuX3HcTGP7T4OkscvPEycjR9ZUHPJ9EJ6lVtPC12sfPWtzjVm9ezkaTic7818OCxBDo-vv-tj8df5ObJQ/s1274/smart-tech-solutions-smart-home-technology-connecting-your-home-smartly-and-affordably.webp"
          alt="..."
        />
      </Carousel>
    </div>
  );
};
export default Courusel;
