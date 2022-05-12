import React from "react";

const NavBarOne = () => {
  return (
    <div className="bg-do-blue-dark text-gray-300 py-2 text-sm">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <div>
            Power up with new SaaS Add-Ons from the DigitalOcean Marketplace
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="/"
            className="bg-do-blue-mediumDark px-3 py-1 rounded text-sky-400 font-semibold"
          >
            We're Hiring
          </a>
          <a href="/" className="hover:text-white">Blog</a>
          <a href="/" className="hover:text-white">Docs</a>
          <a href="/" className="hover:text-white">Get Support</a>
          <a href="/" className="hover:text-white">Sales</a>
        </div>
      </div>
    </div>
  );
};

export default NavBarOne;
