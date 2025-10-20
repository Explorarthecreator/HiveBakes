import { quickSand } from "@/app/fonts";
import { Lightbulb } from "lucide-react";
import Image from "next/image";

const Story = () => {
  return (
    <section className={`bg-white py-10 ${quickSand.className}`}>
      <div className="px-6 md:px-10 xl:px-0 max-w-[1305px] m-auto space-y-10">
        <h1
          className="underline text-[#F3A785] text-[64px] font-bold text-center "
          style={{ textDecorationStyle: "wavy" }}
        >
          <span className="text-black">Our Story</span>
        </h1>

        <div className="space-y-32">
          <div className="bg-[#FCEFDE] grid grid-cols-3 gap-32 ">
            <div className="col-span-2 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-4">
                <div className="bg-white w-[72px] h-[72px] rounded-2xl shadow-2xl flex items-center justify-center">
                  <Lightbulb color="#000" size={48} />
                </div>
                <h1 className="text-[34px] text-[#111827] font-bold">
                  Specialty
                </h1>
              </div>
              <p className="text-[#4B5563] leading-8">
                Hi! We&apos;re The Hive, a custom bakeshop in Indianapolis, and
                we&apos;re excited to be here for your special events and
                ordinary days worth celebrating. Specializing in custom cakes
                and cupcakes, macarons, and allergen-free baking.
              </p>
            </div>
            <div className="px-10">
              <div className="p-4 bg-white rounded-xl">
                <Image
                  src={"/assets/light2.jpg"}
                  alt="light-bult illustratio"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#F2FFFB] grid grid-cols-3 gap-32 ">
            <div className="px-10">
              <div className="p-4 bg-white rounded-xl">
                <Image
                  src={"/assets/history.jpg"}
                  alt="light-bult illustratio"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-4">
                <div className="bg-white w-[72px] h-[72px] rounded-2xl shadow-2xl flex items-center justify-center">
                  <Lightbulb color="#000" size={48} />
                </div>
                <h1 className="text-[34px] text-[#111827] font-bold">
                  History
                </h1>
              </div>
              <p className="text-[#4B5563] leading-8">
                <span className="font-medium">Established in 2019.</span> <br />
                Launched by Meg and Lauren in the summer of 2019, The
                Hive&apos;s mission has always been a simple one: help people
                come together and celebrate well. We work hard to make memorable
                your special events and ordinary days worth celebrating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
