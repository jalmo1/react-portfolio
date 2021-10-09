import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const tabs = ["About", "Projects", "Contact", "Resume"];

  return (
    <nav id="navbar" class="py-8 bg-gray-800">
      <ul class="flex justify-around">
        {tabs.map((tab) => (
          <li
            className="text-2xl text-center block rounded-full hover:border-gray-200 text-purple-200 hover:bg-indigo-400 py-2 px-4"
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
