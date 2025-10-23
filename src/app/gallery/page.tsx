import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="py-10 lg:py-20 px-6 md:px-10 xl:px-0 max-w-[1305px] m-auto space-y-10 lg:space-y-20 ">
      <div className="text-center space-y-6">
        <h1 className="font-bold text-4xl md:text-5xl">Our Gallery</h1>
        <p className="text-base lg:w-3/5 lg:text-lg m-auto">
          We&apos;re here to make every bite memorable. Whether you&apos;re
          grabbing a morning coffee, picking up a treat for someone special, or
          simply indulging yourself, The Hive Bakeshop is buzzing with warmth,
          flavor, and a friendly smile.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 lg:grid-cols-5 lg:gap-8">
        {[...Array(11)].map((_, index) => (
          <div key={index} className=" rounded-lg overflow-clip">
            <Image
              src={`/assets/image${index + 1}.jpg`}
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
