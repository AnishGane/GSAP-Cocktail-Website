import React from "react";
import { featureLists, goodLists } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center", // beacuse of using end: "bottom center", it creates extra scroll height in the #art div.
        scrub: 1.5,
        pin: true,
      },
    });

    maskedTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.2,
        ease: "power1.inOut",
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  }, []);

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((features, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{features}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((features, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{features}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              Each cocktail at Velvet Pour is a harmonious blend of premium
              spirits, fresh ingredients, and creative flair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
