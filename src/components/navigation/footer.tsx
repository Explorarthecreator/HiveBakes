import { quickSand, roboto } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={`bg-[#161B14] text-white px-6 md:px-10 xl:px-0 py-20 ${roboto.className}`}
    >
      <div className="max-w-[1305px] m-auto space-y-8">
        <div className="border-white border p-6 lg:p-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <Image
                src={"/logo.svg"}
                alt="Hive bakes logo"
                width={500}
                height={500}
                className="h-28 w-28"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold">Address:</h2>
                <p className="text-sm">Indianapolis, IN 46205</p>
                <p className="text-sm">Meridian Kessler</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold">Contact:</h2>
                <p className="text-sm">(660) 676-1574</p>
                <p className="text-sm">Sunday - Saturday (7AM -10PM)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={"#"}>
                <Image
                  src={"/assets/Facebook.svg"}
                  alt="facebook icon"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/Instagram.svg"}
                  alt="facebook icon"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/X.svg"}
                  alt="facebook icon"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/Linkedln.svg"}
                  alt="facebook icon"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/Youtube.svg"}
                  alt="facebook icon"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className={`${quickSand.className} text-xl font-bold`}>
              Amenities and More
            </h1>
            <div className="flex justify-between flex-wrap gap-5 text-sm">
              <div className={`space-y-4 ${roboto.className}`}>
                <p>Offers delivery</p>
                <p>Offers take-out</p>
                <p>Wheelchair accessible</p>
                <p>Accesible parking near entrance</p>
                <div>
                  <p>Accepts Android Pay </p>
                  <p>Accepts Apple Pay</p>
                  <p>Accepts cash </p>
                  <p>Accepts credit cards</p>
                  <p>Accepts cryptocurrency</p>
                </div>
              </div>
              <div className="space-y-4">
                <p>Offers Catering</p>
                <p>Street Parking</p>
                <p>Women owned</p>
                <p>Open to All</p>
                <p>Bike Parking</p>
                <p>Compostable containers available</p>
                <p>Plastic-free packaging</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs md:text-sm flex flex-wrap gap-4 items-center justify-between">
          <p>© 2025 The Hive BakeShop. All rights reserved.</p>
          <div className="space-x-2 lg:space-x-4 underline">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Cookies setting</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
