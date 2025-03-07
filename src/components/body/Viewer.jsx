import "./Viewer.css";
import { getFilteredPrice } from "../../utils/getFilteredPrice";

const Viewer = ({ data }) => {
  const filteredPrice = getFilteredPrice(data.price);
  return (
    <div className="Viewer">
      <section className="image_wrapper">
        <img src={data.img_URI} />
      </section>
      <section className="info_wrapper">
        <section className="title">{data.title}</section>
        <section className="author">{`작가 : ${data.author}`}</section>
        <section className="price">{`가격 : ${filteredPrice}`}</section>
        <section className="quantity_wrapper">{data.quantity}</section>
        <section className="content">{data.content}</section>
      </section>
    </div>
  );
};

export default Viewer;
