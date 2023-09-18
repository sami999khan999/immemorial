import React from "react";

const Featured = () => {
  return (
    <section className="feature wrapper">
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="feature-l">
          <span>90'S TELIPHONE</span>
          <img
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90'S TELEPHONE"
          />
          <span className="feature-shutter-l"></span>
        </div>

        <div className="feature-r">
          <span>90'S CASSETT PLAYER</span>
          <img
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90'S CASSETTE PLAYER"
          />
          <span className="feature-shutter-r"></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
