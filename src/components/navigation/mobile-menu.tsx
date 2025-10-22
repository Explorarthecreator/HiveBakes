"use client";

// import { ArrowRight2, HamburgerMenu } from "iconsax-reactjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import Link from "next/link";
import { ArrowRight, Hamburger } from "lucide-react";
import OrderDialog from "../dialogs/order-dialog";
import ContactDialog from "../dialogs/contact-dialog";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Hamburger color="#000" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="mt-20 pb-14 pt-20 lg:pt-28 h-auto w-full lg:hidden rounded-b-2xl space-y-5 !overflow-y-auto"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>
            Links to navigate that shows only on Mobile screens
          </SheetDescription>
        </SheetHeader>
        <div className=" grid grid-cols-1 gap-2 md:gap-2.5 md:grid-cols-3 lg:gap-[30px] w-full px-6 md:px-10">
          <SheetClose asChild>
            <Link
              href={"/"}
              className=" rounded-xl w-full group bg-[#F1F1F1] uppercase "
            >
              <div className="flex gap-2 p-4">
                <h1 className="text-[15px] font-bold">Home</h1>
                <ArrowRight color="#D87D4A" className=" -rotate-6" />
              </div>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={"/gallery"}
              className=" rounded-xl w-full group bg-[#F1F1F1] uppercase "
            >
              <div className="flex gap-2 p-4">
                <h1 className="text-[15px] font-bold">Gallery</h1>
                <ArrowRight color="#D87D4A" className=" -rotate-6" />
              </div>
            </Link>
          </SheetClose>
        </div>
        <div className="space-x-3 px-6 md:px-10">
          <OrderDialog />
          <ContactDialog />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
