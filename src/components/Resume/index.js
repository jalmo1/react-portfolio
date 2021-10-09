import resumeImg from "./resume-cv.png";
import "../style.css";

function Resume() {
  return (
    <section id="resumeMain">
      <div id="resumeHeading">
        <h1 className="text-6xl text-indigo-500 p-4">
          Click below to view resume:
        </h1>
      </div>
      <div className="container text-center">
        <img
          id="resumeImg"
          src={resumeImg}
          alt="clipboard with resume svg"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1vExJ58dXwM2xj1wIXF1C59p3hKBQO8L_D3VH5n3iENs/edit?usp=sharing",
              "_blank"
            )
          }
        ></img>
      </div>
    </section>
  );
}

export default Resume;
