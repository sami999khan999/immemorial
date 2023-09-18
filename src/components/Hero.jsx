import { useRef } from "react";
import {
  useGsapPhotoDrop,
  useGsapShutterUnveil,
  usePhotoLevitate,
} from "../hooks/gsap";

const Hero = () => {
  const refHero = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  const photo1ref = useRef(null);
  const photo2ref = useRef(null);
  const photo3ref = useRef(null);
  const photo4ref = useRef(null);
  const photo5ref = useRef(null);

  const photosArr = [photo1ref, photo2ref, photo3ref, photo4ref, photo5ref];

  useGsapShutterUnveil(shutter1, 0, refHero);
  useGsapShutterUnveil(shutter2, 0.2, refHero);
  useGsapPhotoDrop(photosArr);
  usePhotoLevitate(photosArr, refHero);

  return (
    <section className="hero wrapper" ref={refHero}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1ref}
          className="photo one"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/10046283/pexels-photo-10046283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photo2ref}
          className="photo two"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photo3ref}
          className="photo three"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photo4ref}
          className="photo four"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        >
          {" "}
        </div>
        <div
          ref={photo5ref}
          className="photo five"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4836368/pexels-photo-4836368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        >
          {" "}
        </div>
      </div>
    </section>
  );
};

export default Hero;
