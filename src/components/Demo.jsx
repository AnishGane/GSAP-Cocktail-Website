import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  useGSAP(() => {
    const demoParaSplit = new SplitText("#demo-para p", { type: "chars" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#demo",
        start: "top 15%",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    tl.fromTo(
      demoParaSplit.chars,
      {
        color: "#808080",
        ease: "power1.inOut",
        duration: 0.2,
        stagger: 0.02,
        opacity: 0.5,
        y: 5,
      },
      {
        color: "#ffffff",
        opacity: 1,
        stagger: 0.02,
        ease: "power1.inOut",
        duration: 0.2,
        y: 0,
      }
    );

    // Cleanup function to prevent memory leaks
    return () => {
      if (demoParaSplit) {
        demoParaSplit.revert();
      }
      tl.kill();
    };
  }, []);

  return (
    <section id="demo">
      <h2>Text reveal Section</h2>
      <div id="demo-para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos at
          distinctio nam? Officiis nobis, quidem maiores soluta corrupti
          eligendi fuga illo ex itaque. Maiores temporibus libero a maxime
          voluptatum eveniet magni, adipisci repellendus at tempore rem
          molestiae laboriosam soluta culpa cupiditate illo quam corporis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt quos at
          distinctio nam? Officiis nobis, quidem maiores soluta corrupti
          eligendi fuga illo ex itaque. Maiores temporibus libero a maxime
          voluptatum eveniet magni, adipisci repellendus at tempore rem
          molestiae laboriosam soluta culpa cupiditate illo quam corporis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt quos at
          distinctio nam? Officiis nobis, quidem maiores soluta corrupti
          eligendi fuga illo ex itaque. Maiores temporibus libero a maxime
          voluptatum eveniet magni, adipisci repellendus at tempore rem
          molestiae laboriosam soluta culpa cupiditate illo quam corporis.
        </p>
      </div>
    </section>
  );
};

export default Demo;
