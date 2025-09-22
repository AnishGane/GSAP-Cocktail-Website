"use client";
import React, { useRef } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalCocktails = sliderLists.length;
  const contentRef = useRef();
  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, duration: 1, xPercent: 0, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  const goToSLide = (index) => () => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailsAt = (indexOffset) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailsAt(0);
  const prevCocktail = getCocktailsAt(-1);
  const nextCocktail = getCocktailsAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Tabs">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }
              onClick={goToSLide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={goToSLide(currentIndex - 1)}>
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right arrow"
              aria-hidden="true"
            />
          </button>
          <button className="text-left" onClick={goToSLide(currentIndex + 1)}>
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" alt="" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
