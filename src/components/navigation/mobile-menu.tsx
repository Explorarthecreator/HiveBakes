"use client";

// import { ArrowRight2, HamburgerMenu } from "iconsax-reactjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import Link from "next/link";
import { ArrowRight, Hamburger } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Hamburger color="#000" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="mt-20 pb-14 pt-20 lg:pt-28 h-auto w-full lg:hidden rounded-b-2xl !overflow-y-auto"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>
            Links to navigate that shows only on Mobile screens
          </SheetDescription>
        </SheetHeader>
        <div className=" grid grid-cols-1 gap-[84px] md:gap-2.5 md:grid-cols-3 lg:gap-[30px] w-full px-6 md:px-10">
          <Link
            href={"/"}
            className=" rounded-xl w-full group bg-[#F1F1F1] uppercase "
          >
            <div className="flex gap-2 p-4">
              <h1 className="text-[15px] font-bold">Gallery</h1>
              <ArrowRight color="#D87D4A" className=" -rotate-6" />
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
