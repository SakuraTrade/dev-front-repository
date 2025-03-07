import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({ id, price, title, content, img_URI }) => {
  const nav = useNavigate();
  return (
    <div
      className="Item"
      onClick={() => {
        nav(`/items/${id}`);
      }}
    >
      <div className="img_wrapper">
        <img src={img_URI} />
      </div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="price">{`${price}원`}</div>
    </div>
  );
};

export default Item;
