import React, { useState, useRef } from "react";
import Card from "./card";

const CardSlider = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const dragStartX = useRef(0);
  const dragStartScrollX = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartScrollX.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dragX = e.clientX - dragStartX.current;
    sliderRef.current.scrollLeft = dragStartScrollX.current - dragX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      id="slider"
      className="flex overflow-x-scroll  no-scrollbar transition-all  mx-2  md:mx-5"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          image={card.image}
          alt={card.alt}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardSlider;
