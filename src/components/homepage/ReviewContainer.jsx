import React from "react";

const ReviewContainer = () => {
  return (
    <div className="mt-10">
      <h1
        className="text-4xl font-semibold 
        bg-linear-to-r from-orange-600 to-yellow-300 
        bg-clip-text text-transparent"
      >
        Reviews
      </h1>

      <div
        className="
          mt-6 gap-4
          grid grid-cols-1
          lg:grid-cols-12 lg:grid-rows-7
        "
      >
        {/* Card 1 */}
        <div
          className="
            bg-amber-100 rounded-lg
            min-h-[120px]
            lg:col-span-2 lg:row-span-4
          "
        >
          1
        </div>

        {/* Card 2 */}
        <div
          className="
            bg-red-300 rounded-lg
            min-h-[120px]
            lg:col-span-3 lg:row-span-4
          "
        >
          2
        </div>

        {/* Card 3 */}
        <div
          className="
            bg-amber-500 rounded-lg
            min-h-[120px]
            lg:col-span-5 lg:row-span-3 lg:row-start-5
          "
        >
          3
        </div>

        {/* Card 4 */}
        <div
          className="
            bg-pink-300 rounded-lg
            min-h-[120px]
            lg:col-span-3 lg:row-span-7
          "
        >
          4
        </div>

        {/* Card 5 */}
        <div
          className="
            bg-green-300 rounded-lg
            min-h-[120px]
            lg:col-span-4 lg:row-span-7
          "
        >
          5
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
