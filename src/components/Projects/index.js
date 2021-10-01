import React from "react";
import runBuddy from "../../assets/images/Run-Buddy-screenshot.PNG";
import DealSella from "../../assets/images/dealsella-capture.PNG";
import yrTracks from "../../assets/images/yr-tracks-screenshot.PNG";
import ohSnap from "../../assets/images/ohSnapReact.PNG";
import snakeGame from "../../assets/images/snakegame.png";

function Projects() {
  const runBuddyLink = "https://jalmo1.github.io/run-buddy/";
  const dealLink = "https://browntuckerr.github.io/SteamAPIproject/";
  const tracksLink = "https://cryptic-temple-23894.herokuapp.com/";
  const ohSnapLink = "https://jalmo1.github.io/photo-port/";
  const snakeGameLink = "https://p3-snake.herokuapp.com/";

  return (
    <section>
      <h2 class="text-6xl text-center py-8 text-indigo-500">Projects</h2>
      <div class="border-b pt-16 grid grid-cols-2 gap-8">
        <div class="flex flex-col justify-start">
          <div class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden min-height:{320px}">
            <img
              class="w-full h-full object-cover"
              src={runBuddy}
              alt="Screenshot of Run Buddy project"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold text-indigo-700">
              Run Buddy
            </h1>
            <h2 class="text-3xl text-purple-200">HTML and CSS</h2>
            <p class="text-lg text-purple-200">
              A website that offers fitness training services.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer ">
              <div class="bg-indigo-500 px-5 py-3 text-white rounded-lg w-2/4 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={runBuddyLink}
                >
                  Click for live site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b pt-16 grid grid-cols-2 gap-8">
        <div class="flex flex-col justify-start">
          <div class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden min-height:{320px}">
            <img
              class="w-full h-full object-cover"
              src={DealSella}
              alt="Screenshot of Run Buddy project"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold text-indigo-700">
              DealSella
            </h1>
            <h2 class="text-3xl text-purple-200">
              HTML, Bulma CSS, Javascript
            </h2>
            <p class="text-lg text-purple-200">
              DealSella is the app for finding the best prices for games. There
              are two dropdown lists for genre and platform selection. Once the
              options are selected and "Search Games" button is clicked, a list
              of games on sale will be displayed. More details and prices from
              different stores will be shown by clicking on a game from the
              list. This application also showcases the ability to work with
              API's and fetch requests.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer ">
              <div class="bg-indigo-500 px-5 py-3 text-white rounded-lg w-2/4 text-center">
                <a target="_blank" rel="noopener noreferrer" href={dealLink}>
                  Click for live site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b pt-16 grid grid-cols-2 gap-8">
        <div class="flex flex-col justify-start">
          <div class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden min-height:{320px}">
            <img
              class="w-full h-full object-cover"
              src={yrTracks}
              alt="Screenshot of Run Buddy project"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold text-indigo-700">
              YR Tracks
            </h1>
            <h2 class="text-3xl text-purple-200">
              Handlebars, Materialize CSS, Javascript
            </h2>
            <p class="text-lg text-purple-200">
              YR Tracks is a Full stack web application that is used to create
              playlists and manage the songs within them. It utilizes the
              ablility to create users with a user signup form and login with
              fully functional back end made with node and sequelize.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer ">
              <div class="bg-indigo-500 px-5 py-3 text-white rounded-lg w-2/4 text-center">
                <a target="_blank" rel="noopener noreferrer" href={tracksLink}>
                  Click for live site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b pt-16 grid grid-cols-2 gap-8">
        <div class="flex flex-col justify-start">
          <div class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden min-height:{320px}">
            <img
              class="w-full h-full object-cover"
              src={ohSnap}
              alt="Screenshot of Run Buddy project"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold text-indigo-700">
              OhSnap!
            </h1>
            <h2 class="text-3xl text-purple-200">React and CSS </h2>
            <p class="text-lg text-purple-200">
              An application called Oh Snap! that uses React state, props,
              Hooks, and reusable UI components to provide a simple yet sleek
              platform for showing off some photography skills from the client.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer ">
              <div class="bg-indigo-500 px-5 py-3 text-white rounded-lg w-2/4 text-center">
                <a target="_blank" rel="noopener noreferrer" href={ohSnapLink}>
                  Click for live site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b pt-16 grid grid-cols-2 gap-8">
        <div class="flex flex-col justify-start">
          <div class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden min-height:{320px}">
            <img
              class="w-full h-full object-cover"
              src={snakeGame}
              alt="Screenshot of Run Buddy project"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold text-indigo-700">
              Capture the Dot
            </h1>
            <h2 class="text-3xl text-purple-200">
              React, CSS, GraphQL, NodeJS, and Express
            </h2>
            <p class="text-lg text-purple-200">
              This is a fun little game that was made to kill some time! It's a
              spin on the well known game Snake. Instead of growing a body
              however, you just eat and eat and eat to see how many dots you can
              get within a minute.
            </p>
            <div class="flex items-center gap-4 my-6 cursor-pointer ">
              <div class="bg-indigo-500 px-5 py-3 text-white rounded-lg w-2/4 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={snakeGameLink}
                >
                  Click for live site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
