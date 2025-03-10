import "./Item.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataStateContext, DataDispatchContext } from "../../App";
import Button from "../common/Button";

const Item = (item) => {
  const nav = useNavigate();
  const { favorites } = useContext(DataStateContext);
  const { setFavorites } = useContext(DataDispatchContext);

  const addToFavorites = (newItem) => {
    setFavorites([...favorites, newItem]);
    if (window.confirm("즐겨찾기로 이동하시겠습니까?")) {
      nav("/favorites");
    }
  };

  return (
    <div
      className="Item"
      onClick={() => {
        nav(`/items/${item.id}`);
      }}
    >
      <div className="img_wrapper">
        <img src={item.img_URI[0]} />
      </div>
      <div className="title">{item.title}</div>
      <div className="content">{item.content}</div>
      <div className="price">{`${item.price}원`}</div>
      <div className="button_wrapper">
        <Button text={"즐겨찾기"} onClick={() => addToFavorites(item)} />
        <Button text={"즐겨찾기"} onClick={() => addToFavorites(item)} />
      </div>
    </div>
  );
};

export default Item;
