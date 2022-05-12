import React from "react";

const LinkCascadia = ({text}) => {
  return (
    <a
      className="group flex items-center text-do-blue-light hover:text-do-blue-medium font-cascadia text-lg font-bold"
      href="/"
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 transition-all duration-300 group-hover:ml-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
};

export default LinkCascadia;
