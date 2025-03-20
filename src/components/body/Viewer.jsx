import { getFilteredPrice } from "../../utils/getFilteredPrice";
import { useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
import Button from "../common/Button";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Viewer = ({ data, addToFavorites, addToCarts }) => {
  const filteredPrice = getFilteredPrice(data.price);
  const [userQuantity, setQuantity] = useState(1);
  const total_price = getFilteredPrice(data.price * userQuantity);
  const OPTIONS = {};
  const quantityChangeHandler = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  const onMinusClickHandler = () => {
    const newValue = userQuantity - 1;
    setQuantity(newValue);
  };

  const onPlusClickHandler = () => {
    const newValue = userQuantity + 1;
    setQuantity(newValue);
  };

  return (
    <div className="flex mx-24">
      <EmblaCarousel slides={data.img_URI} options={OPTIONS} />
      <section className="m-14 w-full">
        <h2 className="text-2xl mb-2 font-medium ">{data.title}</h2>
        <table className="border-gray-300 mb-2 w-full">
          <tr className="border-b border-gray-300">
            <th className="px-4 py-2 text-left">작가</th>
            <td className="px-4 py-2 text-left">{data.author}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <th className="px-4 py-2 text-left">가격</th>
            <td className="px-4 py-2 text-left">{filteredPrice}</td>
          </tr>
        </table>
        <textarea
          readOnly
          className="w-full my-2 border-1 border-gray-300 bg-gray-100 cursor-default focus:outline-none overflow-hidden resize-none disabled:true p-2"
        >
          {data.content}
        </textarea>
        <section className="w-full">
          {data.quantity < 1 ? (
            <div className="mb-10">매진되었습니다.</div>
          ) : (
            <div className="flex gap-1 mb-2 border-y-2 border-gray-300 py-2">
              <button
                className="p-4 border-1 border-gray-300 rounded-sm"
                onClick={onMinusClickHandler}
              >
                <FaMinus />
              </button>
              <input
                className="p-4"
                type="number"
                min={1}
                value={userQuantity}
                max={data.quantity}
              />
              <button
                className="p-4 border-1 border-gray-300 rounded-sm"
                onClick={onPlusClickHandler}
              >
                <FaPlus />
              </button>
            </div>
          )}
        </section>
        <section className="w-full my-4 flex place-content-between items-baseline">
          <span className="font-semibold">총 상품 금액</span>
          <div className="flex gap-2 items-baseline">
            <span className=" px-2 border-r-1">
              총 수량<strong className="text-green-500">{userQuantity}</strong>
              개
            </span>
            <span className="text-xl text-green-500">{total_price}</span>
          </div>
        </section>
        {data.quantity >= 1 ? (
          <section className="my-4 w-full flex gap-2">
            <button className="flex-2/3 border border-gray-300 p-4 bg-green-500 text-white rounded-sm cursor-pointer">
              바로 구매
            </button>
            <button className="flex-1/3 border border-gray-300 p-4 bg-gray-500 text-white rounded-sm cursor-pointer">
              장바구니
            </button>
          </section>
        ) : null}
      </section>
    </div>
  );
};

export default Viewer;
