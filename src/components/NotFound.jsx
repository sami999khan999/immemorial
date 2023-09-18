import React from "react";

const NotFound = ({ needFullHight }) => {
  return (
    <section className={`wrapper ${needFullHight && "min-h-100vh"}`}>
      <h2 className="section-title">Not Found</h2>
    </section>
  );
};

export default NotFound;
