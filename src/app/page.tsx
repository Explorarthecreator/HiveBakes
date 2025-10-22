import Main from "@/components/sections/main";
import PriceList from "@/components/sections/price-list";
import Story from "@/components/sections/story";

export default function Home() {
  return (
    <div className="">
      <Main />
      <Story />
      <div className="h-72">Break</div>
      <PriceList />
    </div>
  );
}
