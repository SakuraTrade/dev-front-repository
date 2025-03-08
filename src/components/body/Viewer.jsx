import "./Viewer.css";
import { getFilteredPrice } from "../../utils/getFilteredPrice";
import { useState } from "react";
import ImageViwer from "./ImageViewer";
import EmblaCarousel from "./EmblaCarousel";
import Button from "../common/Button";

const Viewer = ({ data, addToFavorites, addToCarts }) => {
  const filteredPrice = getFilteredPrice(data.price);
  const [userQuantity, setQuantity] = useState(0);
  const total_price = getFilteredPrice(data.price * userQuantity);
  const OPTIONS = {};
  const quantityChangeHandler = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  return (
    <div className="Viewer">
      {/* <ImageViwer img_URIs={data.img_URI} /> */}
      <EmblaCarousel slides={data.img_URI} options={OPTIONS} />
      <section className="info_wrapper">
        <section className="title">{data.title}</section>
        <section className="author">{`작가 : ${data.author}`}</section>
        <section className="price">{`가격 : ${filteredPrice}`}</section>
        <section className="content">{data.content}</section>
        <section className="quantity_wrapper">
          {data.quantity < 1 ? (
            <div className="sold_out">매진되었습니다.</div>
          ) : (
            <div className="quantity_input_wrapper">
              수량 :
              <input
                type="number"
                min="1"
                max={data.quantity}
                value={userQuantity}
                onChange={quantityChangeHandler}
              />
            </div>
          )}
        </section>
        <section className="total_price_wrapper">
          {`${total_price} 입니다.`}
        </section>
        {data.quantity >= 1 ? (
          <section className="user_input_wrapper">
            <Button text={"즐겨찾기"} onClick={addToFavorites} />
            <Button text={"장바구니"} onClick={addToCarts} />
          </section>
        ) : null}
      </section>
    </div>
  );
};

export default Viewer;
