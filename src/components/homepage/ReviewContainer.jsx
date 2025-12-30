import React from "react";

const ReviewContainer = () => {
  return (
    <div className="mt-10">
      <h1
        className="text-4xl font-semibold 
            bg-linear-to-r from-orange-600 to-yellow-300 bg-clip-text text-transparent
            "
      >
        Reviews
      </h1>

      <div className="grid grid-cols-12 grid-rows-7 gap-4 h-[270px] mt-6">
        <div className="bg-amber-100 col-span-2 row-span-4">1</div>

        <div className="bg-red-300 col-span-3 row-span-4">2</div>

        <div className="bg-amber-500 col-span-5 row-span-3 row-start-5">3</div>

        <div className="bg-pink-300 col-span-3 row-span-7">4</div>
        <div className="bg-green-300 col-span-4 row-span-7">5</div>
      </div>
    </div>
  );
};

export default ReviewContainer;
