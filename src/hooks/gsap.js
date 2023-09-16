import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGesapDownStagger = (arr, duration = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-400%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: Expo.easeIn,
        duration: duration,
      }
    );
  }, []);
};
