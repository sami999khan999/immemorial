import { useRef } from "react";
import { useGsapShutterUnveil } from "../hooks/gsap";

const Hero = () => {
  const refHero = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  useGsapShutterUnveil(shutter1, 0, refHero);
  useGsapShutterUnveil(shutter2, 0.2, refHero);

  return (
    <section className="hero wrapper" ref={refHero}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
    </section>
  );
};

export default Hero;
