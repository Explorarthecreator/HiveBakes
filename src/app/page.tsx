import Image from "next/image";
import { quickSand } from "./fonts";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={1000}
        height={1000}
        className="h-20 w-20"
      />
      <h1
        className={`${quickSand.className} text-3xl font-bold  animate-bounce`}
      >
        Work in progress
      </h1>
    </div>
  );
}
