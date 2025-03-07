import React, { useCallback, useEffect, useState } from "react";
import "./EmblaCarousel.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [index, setIndex] = useState(1);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // 슬라이드 변경 시 인덱스를 추적하는 함수
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Embla API가 초기화된 후 이벤트 리스너 등록
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // 초기 값 설정
  }, [emblaApi, onSelect]);

  // 썸네일 클릭 시 해당 인덱스로 이동
  const scrollTo = useCallback(
    (idx) => {
      if (emblaApi) emblaApi.scrollTo(idx);
    },
    [emblaApi]
  );

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((uri, idx) => (
            <div className="embla__slide" key={idx}>
              <div className="embla__slide__number">
                <img src={uri}></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla_thumbnails_container">
          {slides.map((uri, idx) => (
            <img
              key={idx}
              src={uri}
              onClick={() => scrollTo(idx)}
              className={index === idx ? "active" : ""}
            />
          ))}
        </div>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
