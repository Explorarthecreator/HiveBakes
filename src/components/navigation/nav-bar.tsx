import Link from "next/link";
import { Button } from "../ui/button";
import { quickSand } from "@/app/fonts";
import Image from "next/image";
import { Hamburger } from "lucide-react";
import ContactDialog from "../dialogs/contact-dialog";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <div
      className={`bg-white py-5 lg:py-10 px-6 md:px-10 xl:px-0 ${quickSand.className}`}
    >
      <div className="max-w-[1305px] m-auto flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={"/logo.svg"}
            alt="hive bake logo"
            width={500}
            height={500}
            className="w-8 md:w-16 h-8 md:h-16"
          />
          <h3 className="text-lg lg:text-2xl font-bold">Hive Bakes</h3>
        </Link>
        {/* <Hamburger color="#000" className="lg:hidden" /> */}
        <MobileMenu />
        <div className="hidden lg:flex items-center gap-20">
          <div className="font-bold space-x-4">
            <Link href={"#"}>Our Story</Link>
            <Link href={"#"}>Flavour List</Link>
            <Link href={"#"}>Price List</Link>
          </div>
          <div className="space-x-3">
            <ContactDialog />
            <Button className="bg-[#898F67] px-8 py-4 h-14 border-[#898F67] border cursor-pointer hover:border-[#898F67] hover:bg-transparent hover:text-[#898F67] hover:border ">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
