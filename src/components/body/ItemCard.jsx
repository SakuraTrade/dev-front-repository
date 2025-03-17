import "./ItemCard.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataDispatchContext } from "../../App";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { addToFavorite, deleteFavorite } from "../../context/FavoriteSlice";

const ItemCard = (item) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  // const { addToFavorites, addToCarts } = useContext(DataDispatchContext);

  return (
    <div className="ItemCard">
      <div
        className="info_wrapper"
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
      </div>

      <div className="button_wrapper">
        {/* <Button text={"장바구니 담기"} onClick={() => addToCarts(item)} /> */}
        <Button
          text={"즐겨찾기"}
          onClick={() => dispatch(addToFavorite(item))}
        />
      </div>
    </div>
  );
};

export default ItemCard;
