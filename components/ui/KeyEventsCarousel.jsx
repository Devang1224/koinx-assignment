import React, { useRef } from "react";
import KeyEventCard from "./KeyEventCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";

const KeyEventsCarousel = () => {
  const sliderContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (sliderContainerRef.current) {
      sliderContainerRef.current.scrollLeft -=
        sliderContainerRef.current.offsetWidth;
    }
  };

  const handleScrollRight = () => {
    if (sliderContainerRef.current) {
      sliderContainerRef.current.scrollLeft +=
        sliderContainerRef.current.offsetWidth;
    }
  };

  return (
    <div
      className="slider-container overflow-x-auto flex relative"
      ref={sliderContainerRef}
    >
      {[1, 2, 3, 4].map((item, index) => (
        <KeyEventCard key={index} />
      ))}
      <button
        className="absolute top-0 bottom-0 right-0 flex items-center"
        onClick={handleScrollRight}
      >
        <MdKeyboardArrowRight size={32} />
      </button>
    </div>
  );
};

export default KeyEventsCarousel;

// const slider1 = React.useRef(null);

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "none",
//         background: "red",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// const settings = {
//   className: "center",
//   infinite: true,
//   centerPadding: "60px",
//   slidesToShow: 1,
//   swipeToSlide: true,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1424,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         infinite: true,
//       },
//     },
//     {
//       breakpoint: 1100,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     },
//     {
//       breakpoint: 670,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     },
//     {
//       breakpoint: 470,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     },
//   ],
//   nextArrow: <SampleNextArrow />,
// };

/* <Slider ref={slider1} {...settings}>
        {[1, 2, 3, 4].map((item, index) => (
          <KeyEventCard key={index} />
        ))}
      </Slider>
      <button
        onClick={() => slider1?.current?.slickNext()}
        className=" absolute bg-[white] w-[30px] h-[30px] border rounded-full flex items-center justify-center top-[35%] right-0"
      >
        <MdKeyboardArrowRight className="scale-150" />
      </button> */
