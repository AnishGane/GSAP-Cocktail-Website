import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.075,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.075,
      ease: "expo.out",
      delay: 1,
    });

    // for left-leaf and right-leaf, triggering in hero section
    const leaftl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    leaftl.to(
      ".right-leaf",
      {
        y: 250,
      },
      0
    );
    leaftl.to(
      ".left-leaf",
      {
        y: -250,
      },
      0
    );
    //start animation: top of video when reaches to 50% of viewport screen in Mobile and same as to desktop
    const startValue = isMobile ? "top 50%" : "center 60%";
    //end animation: 120% of video when reaches to top of viewport screen in Mobile and same as to desktop
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MARTINI</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Csrip. Classy.</p>
              <p className="subtitle">
                Sip the spirit <br /> of Summer.
              </p>
            </div>

            <div className="view-cocktails ">
              <p className="subtitle">
                Discover our signature cocktails, each crafted with premium
                cocktails spirits, fresh and delicious ingredients, and a touch
                of artistry - designed to delight your sense.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
