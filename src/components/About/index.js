import React from "react";
import profilePic from "../../assets/images/profile-pic2.jpg";

function About() {
  return (
    <section>
      <p class="text-8xl text-indigo-500 text-center py-10">Joshua Almodovar</p>
      <div class="grid grid-rows-1 grid-flow-col gap-4">
        <img
          className="min-h-1/6 row-span-1 mx-auto md:object-scale-down pl-8 py-8"
          src={profilePic}
          alt="Joshua Almodovar headshot while wearing a mask"
        />
        <p class="text-6xl text-center text-indigo-500 mx-6 pr-8 py-10">
          I am an aspiring full stack web developer, currently residing in
          Florida. If I'm not practicing my coding skills or working on
          projects, you can usually catch me in a garage working on cars or
          walking around town taking pictures with my camera.
        </p>
      </div>
    </section>
  );
}

export default About;
