import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const slides = [
    { url: "./Images/headerImages/pic1.jpg" },
    { url: "./Images/headerImages/pic2.jpg" },
    { url: "./Images/headerImages/pic3.jpg" },
    { url: "./Images/headerImages/pic4.jpg" },
    { url: "./Images/headerImages/pic5.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="headerContainer">
        <div className="leftArrow" onClick={goToPrevious}></div>
        <div className="rightArrow" onClick={goToNext}></div>
        <div
          className="headerImage"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className="contentContainer">
          <h3>The Best Look</h3>
          <h1>Anytime AnyWhere</h1>
          <h5>Start from 10,000 MMK</h5>
          <button>View</button>
        </div>
      </div>
    </>
  );
};

export default Header;
