import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <button>
          <img
            src="https://th.bing.com/th/id/OIP.9NqDcjAvzabFYikHOAVa5gHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </button>
        <div>
          <h1 className="text-5xl font-bold">
            Revolutionize your business with our{" "}
            <span className="text-secondary">dynamic Saas</span> solutions.
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Stet sit est est takimata dolor dolores no. Duo et ea sea
            vero est, stet eirmod lorem ipsum dolores dolore sit sadipscing
            clita dolor, sadipscing labore sed gubergren elitr. Ipsum.
          </p>
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-ghost">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
