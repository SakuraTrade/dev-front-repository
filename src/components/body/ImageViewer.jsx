import useEmblaCarousel from "embla-carousel-react";
import "./ImageViewer.css";
import { useState, useCallback } from "react";

const ImageViwer = ({ img_URIs }) => {
  const [index, setIndex] = useState(0);
  const [mainEmblaRef] = useEmblaCarousel();
  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps", // 썸네일이 적절히 정렬되도록 설정
    axis: "x", // 가로 방향
    dragFree: true, // 부드러운 스크롤
  });
  const indexChangeHandler = (idx) => {
    setIndex(idx);
  };

  const onThumbClick = useCallback(
    (index) => {
      setIndex(index);
    },
    [setIndex]
  );

  return (
    <section className="image_wrapper">
      <div className="main_image">
        <div className="embla_container">
          <img src={img_URIs[index]} className="embla_slide" />
        </div>
      </div>
      <div className="thumbnails_container">
        <button
          className="scroll_button left"
          onClick={() => thumbEmblaApi && thumbEmblaApi.scrollPrev()}
        >
          {"<"}
        </button>

        <div className="thumbnails embla" ref={thumbEmblaRef}>
          <div className="embla_container">
            {img_URIs.map((item, idx) => (
              <div
                key={item}
                className={`embla__slide thumbnail ${
                  index === idx ? "active" : ""
                }`}
                onClick={() => onThumbClick(idx)}
              >
                <img src={item} alt={`Thumbnail ${idx}`} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="scroll_button right"
          onClick={() => thumbEmblaApi && thumbEmblaApi.scrollNext()}
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default ImageViwer;
