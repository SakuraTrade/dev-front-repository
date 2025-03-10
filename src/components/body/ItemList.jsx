import Item from "./Item";
import "./ItemList.css";
const ItemList = ({ title, data }) => {
  return (
    <div className={`ItemList`}>
      <h4 className="title">{title}</h4>
      <div className="list_wrapper">
        {data.length < 1 ? (
          <div className="empty_wrapper">아직 상품이 없어요!</div>
        ) : (
          data.map((item) => <Item key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default ItemList;
