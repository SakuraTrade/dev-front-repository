import ItemCard from "./ItemCard";
import "./ItemList.css";
const ItemList = ({ title, data }) => {
  return (
    <div className="flex-col justify-center min-h-30">
      <h1 className="text-xl font-bold grid place-content-center pb-4">
        {title}
      </h1>
      <div className="flex gap-2 pb-4">
        {data.length < 1 ? (
          <div className="m-auto ">아직 상품이 없어요!</div>
        ) : (
          data.map((item) => <ItemCard key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default ItemList;
