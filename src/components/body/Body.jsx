import { getNewItems } from "../../utils/getNewItems";
import { getSaleItems } from "../../utils/getSaleItems";
import ItemList from "./ItemList";

const Body = ({ data }) => {
  const newItems = getNewItems(data);
  const saleItems = getSaleItems(data);

  return (
    <div className="w-[840px] py-16 mx-auto my-2">
      <ItemList title={"전체 아이템"} data={data} />
    </div>
  );
};

export default Body;
