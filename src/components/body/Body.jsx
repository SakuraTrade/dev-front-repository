import { getNewItems } from "../../utils/getNewItems";
import { getSaleItems } from "../../utils/getSaleItems";
import ItemList from "./ItemList";
import "./Body.css";

const Body = ({ data }) => {
  const newItems = getNewItems(data);
  const saleItems = getSaleItems(data);

  return (
    <div className="Body">
      <ItemList title={"신상 아이템"} data={newItems} />
      <ItemList title={"세일 아이템"} data={saleItems} />
      <ItemList title={"전체 아이템"} data={data} />
    </div>
  );
};

export default Body;
