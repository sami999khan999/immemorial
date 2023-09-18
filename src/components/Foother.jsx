import React, { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Foother = (needFullHight) => {
  const footerHeadlineRef = useRef(null);
  const footerRef = useRef(null);

  useGsapFooterHeadline(footerHeadlineRef, footerRef);

  return (
    <section
      className={`footer wrapper ${needFullHight && "min-h-100vh"}`}
      ref={footerRef}
    >
      <h1 ref={footerHeadlineRef}>Bonjour</h1>
      <p>© {new Date().getFullYear()} Immemorial. Crafted by yours truly</p>
    </section>
  );
};

export default Foother;
