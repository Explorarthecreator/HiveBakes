import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const PriceList = () => {
  const cakes = [
    {
      size: 4,
      servings: 6,
      price: 35,
    },
    {
      size: 6,
      servings: 8,
      price: 50,
    },
    {
      size: 8,
      servings: 16,
      price: 65,
    },
    {
      size: 10,
      servings: 26,
      price: 80,
    },
    {
      size: 12,
      servings: 26,
      price: 105,
    },
  ];

  const cupcakes = [
    {
      size: 6,
      unfilled: 25,
      filled: 30,
    },
    {
      size: 12,
      unfilled: 35,
      filled: 45,
    },
    {
      size: 18,
      unfilled: 40,
      filled: 50,
    },
    {
      size: 24,
      unfilled: 45,
      filled: 55,
    },
    {
      size: 30,
      unfilled: 55,
      filled: 65,
    },
  ];
  return (
    <div className=" py-10 px-6 md:px-10 xl:px-0  bg-white">
      <div className="max-w-[1305px] m-auto space-y-5">
        <div className="flex justify-center">
          <div className="bg-[#404A3D]  px-6 py-1 rounded-xl font-bold text-xs text-white">
            Price Tags
          </div>
        </div>

        <h1 className="font-medium text-[55px] text-[#404A3D] text-center">
          Price List
        </h1>

        <div>
          <Tabs defaultValue="account" className="">
            <TabsList className="w-full bg-transparent h-auto justify-between">
              <TabsTrigger value="account" className="py-4 md:py-8 ">
                Account
              </TabsTrigger>
              <TabsTrigger value="password" className="py-4 md:py-8 ">
                Password
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="account"
              className="bg-white rounded-2xl border-[3px] border-[#404A3D] p-7 md:p-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12.5"
            >
              {cakes.map((cake, index) => (
                <div key={index} className="space-y-2.5">
                  <h1 className="font-bold text-lg md:text-xl text-[#404A3D]">
                    {cake.size}&rdquo; Round
                  </h1>
                  <p className="font-semibold text-sm md:text-base text-[#5B8C51]">
                    {cake.servings} servings
                  </p>
                  <p className="underline text-sm md:text-base text-[#5B8C51] font-semibold leading-6">
                    ${cake.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="password"
              className="bg-white rounded-2xl border-[3px] border-[#404A3D] p-7 md:p-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-11.5 xl:gap-12.5"
            >
              {cupcakes.map((cupcake, index) => (
                <div key={index} className="space-y-2.5">
                  <h1 className="font-bold text-lg md:text-xl text-[#404A3D]">
                    {cupcake.size} Cupcakes
                  </h1>
                  <p className="font-semibold text-sm md:text-base text-[#5B8C51]">
                    Unfilled - ${cupcake.unfilled.toFixed(2)}
                  </p>
                  <p className="underline text-sm md:text-base text-[#5B8C51] font-semibold leading-6">
                    Filled - ${cupcake.unfilled.toFixed(2)}
                  </p>
                </div>
              ))}
            </TabsContent>
            {/* </div> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
