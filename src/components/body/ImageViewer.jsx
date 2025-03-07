import "./ImageViewer.css";
import { useState } from "react";

const ImageViwer = ({ img_URIs }) => {
  const [index, setIndex] = useState(0);
  const indexChangeHandler = (idx) => {
    const value = parseInt(idx);
    setIndex(value);
  };
  return (
    <section className="image_wrapper">
      <div className="main_image">
        <img src={img_URIs[index]} />
      </div>
      <div className="thumbnails">
        {img_URIs.map((item, idx) => (
          <img
            key={item}
            src={item}
            onClick={() => indexChangeHandler(idx)}
            className={index === idx ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageViwer;
