"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Marquee } from "../ui/marquee";

function MainSliderCard({ index }: { index: number }) {
  return (
    <Card className="w-32 lg:w-64 p-0 overflow-clip">
      <CardContent className="p-0">
        <Image
          src={`/assets/image${index + 1}.jpg`}
          alt="image"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </CardContent>
    </Card>
  );
}
const MainSlider = () => {
  return (
    <div className="relative flex h-auto w-full flex-row items-center justify-center overflow-hidden gap-1.5">
      <Marquee pauseOnHover repeat={3} className="[--duration:40s]">
        {[...Array(11)].map((_, index) => (
          <MainSliderCard key={index} index={index} />
        ))}
      </Marquee>
    </div>
  );
};

export default MainSlider;
