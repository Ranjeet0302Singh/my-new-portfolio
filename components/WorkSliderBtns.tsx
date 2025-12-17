"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
  currentIndex,
  totalSlides,
}: {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
  currentIndex: number;
  totalSlides: number;
}) => {
  const swiper = useSwiper();
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalSlides - 1;

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${
          isFirstSlide ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => !isFirstSlide && swiper.slidePrev()}
        disabled={isFirstSlide}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={`${btnStyles} ${
          isLastSlide ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => !isLastSlide && swiper.slideNext()}
        disabled={isLastSlide}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
