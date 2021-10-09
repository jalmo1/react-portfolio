import React from "react";
import "../style.css";
import profilePic from "../../assets/images/profile-pic2.jpg";

function Hero() {
  return (
    <main id="heroBackground" class="bg-hero-image ">
      <div class="text-center">
        <div id="hero-title">
          <h1 class=" font-extrabold  text-indigo-600 sm:text-5xl md:text-6xl xl:inline">
            Joshua Almodovar
          </h1>
        </div>
        <div>
          <p
            id="hero-subtext"
            class="mt-3 text-indigo-800 font-semibold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-4xl"
          >
            Dream BIG!
          </p>
        </div>
        <div class="">
          <p
            id="hero-subtext"
            class="mt-3 text-base text-indigo-800 font-semibold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-4xl"
          >
            Achieve BIG!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
