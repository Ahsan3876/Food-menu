import React from "react";
import { BASE_URL } from "../App";

export const Article = ({ data }) => {
  return (
    <div className="bg-custom-image bg-cover box-border min-h-[100vh]  mt-[-5px] ">
      <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-8 pt-20 px-5 pb-5">
        {data?.map(({ name, image, text, price }) => {
          return (
            <div
              key={name}
              className="max-w-[380px] bg-radial-gradient border-[0.66px] rounded-3xl  gap-2 text-white px-2 py-2"
            >
              <div className="flex flex-row gap-1 pt-2">
                <img src={BASE_URL + image} />
                <div className="flex flex-col justify-between items-end">
                  <div>
                    <h1 className="text-lg font-bold">{name}</h1>
                    <p className="text-xs">{text}</p>
                  </div>
                  <div>
                    <button className="  py-1 px-2  bg-red-600 text-white outline-none rounded-md">
                      ${price.toFixed(2)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
          console.log(BASE_URL + image);
        })}
      </div>
    </div>
  );
};
