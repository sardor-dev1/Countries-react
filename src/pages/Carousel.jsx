import React from 'react'
import { Carousel } from "flowbite-react";

export default function index() {
  return (
    <div>
      <div className="w-[800px] mx-auto">
        <div className="h-40 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp"
              alt="..."
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUDWj_OzYa1ONtdzVvZTjxqJF5gukyHv4wxQBnpyMle_oKRVyT6asR0G2O_B-Qb8kRfg&usqp=CAU"
              alt="..."
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnnwFaaoB3HplhHW6t2FKdCEZWHnu_SzH6tN9YV0-ZoNgXGD8XGpwwDs59uSj-wP4aC0&usqp=CAU"
              alt="..."
            />
            <img
              src="https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg"
              alt="..."
            />
            <img
              src="https://cdn.tatlerasia.com/asiatatler/i/hk/2018/11/05194217-bugatti-chiron-front-three-quarter-in-motion-e1490296099531_cover_1600x1000.jpg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
