import React from "react";
import { openingHours, socials, storeInfo } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.02 })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#l-right-leaf", { y: "-50", duration: 1, ease: "power1.inOut" })
      .to("#l-left-leaf", { y: "-50", duration: 1, ease: "power1.inOut" }, "<"); // "<" i.e before that means left and right f leaf will move together
  }, []);

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        {storeInfo.map(({ heading, address, contact }) => (
          <div>
            <h2>{heading}</h2>
            <div>
              <h3>visit our store</h3>
              <p>{address}</p>
            </div>

            <div>
              <h3>CONTACT US</h3>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
            </div>
          </div>
        ))}

        <div>
          <h3>OPEN EVERY DAY</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div className="flex-center gap-5">
          {socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.name}
              key={social.name}
            >
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
