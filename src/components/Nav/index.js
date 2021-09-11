import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const tabs = ["About", "Projects", "Contact", "Photography"];
  return (
    <nav class="py-8">
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

// function Nav(props) {

//   return (
//     <header className="flex-auto">
//       <nav className="flex-auto mx-6">
//         <ul class="flex">
//           <li class="flex-1 mr-2">
//             <a
//               class="text-center block rounded hover:border-gray-200 text-violet-800 hover:bg-indigo-400 py-2 px-4"
//               href="#About"
//             >
//               About
//             </a>
//           </li>
//           <li class="flex-1 mr-2">
//             <a
//               class="text-center block rounded hover:border-gray-200 text-violet-800 hover:bg-indigo-400 py-2 px-4"
//               href="#Projects"
//             >
//               Projects
//             </a>
//           </li>
//           <li class="text-center flex-1">
//             <a
//               class="text-center block rounded hover:border-gray-200 text-violet-800 hover:bg-indigo-400 py-2 px-4"
//               href="#Contact"
//             >
//               Contact
//             </a>
//           </li>
//           <li class="flex-1 mr-2">
//             <a
//               class="text-center block rounded hover:border-gray-200 text-violet-800 hover:bg-indigo-400 py-2 px-4"
//               href="#Photography"
//             >
//               Photography
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <h1 class="text-6xl text-center py-8 text-indigo-500">
//         Joshua Almodovar
//       </h1>
//     </header>
//   );
// }

// export default Nav;
