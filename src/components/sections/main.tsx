import { quickSand } from "@/app/fonts";
import { Button, buttonVariants } from "../ui/button";
import MainSlider from "./main-slider";
import Link from "next/link";

const Main = () => {
  return (
    <section className={`py-10 lg:py-20 ${quickSand.className} space-y-12`}>
      <div
        className="px-6 md:px-10 xl:px-0 max-w-[1305px] m-auto flex flex-col items-center gap-5 text-center"
        data-aos="zoom-in-down"
      >
        <div className="bg-[#F3A785] border border-[#3D4451]/20 px-6 py-1 rounded-xl font-bold text-xs text-[#0D0C21]/80">
          Fresh. Warm. Unforgettable.
        </div>
        <h1 className="text-[48px] lg:text-[64px] font-bold lg:w-1/2  tracking-tighter leading-16">
          Where every Bite Blooms
        </h1>
        <p className="lg:w-4/5 m-auto text-[#616161] text-lg lg:text-2xl">
          Each creation is made from scratch using simple, wholesome
          ingredients, designed to celebrate flavor and bring a touch of home to
          every bite. Step into our cozy space, where the smell of freshly baked
          goods greets you like an old friend, and every visit feels like a
          little retreat from the rush of the day.
        </p>
      </div>
      <div></div>
      <div
        className=" text-center space-x-2 lg:space-x-4"
        data-aos="zoom-out-down"
      >
        <Link
          href={"/gallery"}
          className={`py-4 px-7 lg:px-14 h-14 cursor-pointer ${buttonVariants()}`}
        >
          Our Gallery
        </Link>
        <Button
          className="py-4 px-7 lg:px-14 h-14 border-black cursor-pointer"
          variant={"outline"}
        >
          Learn more
        </Button>
      </div>
      <div data-aos="fade-left">
        <MainSlider />
      </div>
    </section>
  );
};

export default Main;
