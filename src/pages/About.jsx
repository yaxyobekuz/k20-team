import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-20 pb-40">
      <div className="container">
        {/* page content */}
        <div className="max-w-3xl space-y-8">
          {/* page title */}
          <h1 className="animate__animated animate__fadeInDown text-4xl font-medium">
            About
          </h1>

          {/* description */}
          <p className="animate__animated animate__fadeInLeft text-lg text-gray-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam
            accusantium hic? Harum delectus ducimus eum a suscipit, placeat
            distinctio! Exercitationem non recusandae rem quam commodi, adipisci
            aperiam quidem dicta harum, necessitatibus ipsa eligendi ab
            voluptate incidunt provident ullam natus obcaecati dolorem omnis
            voluptatem maiores enim amet? Doloribus praesentium inventore
            aliquid cumque numquam id.
          </p>

          {/* links wrapper */}
          <div className="animate__animated animate__fadeInUp flex gap-5">
            {/* join us */}
            <Link
              to="/join"
              className="flex items-center justify-center w-40 bg-primary py-3 rounded-xl text-secondary font-medium transition-colors duration-300 hover:bg-primary/70"
            >
              Join us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
