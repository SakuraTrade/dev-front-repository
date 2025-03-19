import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";

const ItemCard = (item) => {
  const [favorite, setFavorite] = useState(false);
  const nav = useNavigate();

  return (
    <div className="max-w-50 max-h-75 flex-col">
      <div
        className="flex-col"
        onClick={() => {
          nav(`/items/${item.id}`);
        }}
      >
        <div className="">
          <img src={item.img_URI[0]} />
        </div>
        <div className="font-bold">{item.title}</div>

        <div className="">{`${item.price}원`}</div>
      </div>

      <div className="flex gap-1">
        {favorite ? (
          <button
            className="w-10 h-10 grid place-items-center rounded-sm bg-green-200 text-red-400 "
            onClick={(e) => {
              setFavorite(!favorite);
            }}
          >
            <GoHeart />
          </button>
        ) : (
          <button
            className="w-10 h-10 grid place-items-center rounded-sm bg-green-200 text-red-400 cursor-pointer"
            onClick={(e) => {
              setFavorite(!favorite);
            }}
          >
            <GoHeartFill />
          </button>
        )}
        <button className="w-50 h-10 flex justify-center items-center gap-1 bg-sky-400 text-white rounded-sm cursor-pointer">
          <FaCartShopping /> 장바구니에 담기
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
