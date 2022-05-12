import React from "react";

const PanelBlog = ({ image, type, title, date, visits }) => {
  return (
    <div className="flex flex-col bg-white transition-shadow duration-300 shadow-lg hover:shadow-2xl rounded-lg">
      <div>
        <img className={image.className} src={image.src} alt={image.alt} />
      </div>

      <div className="flex flex-col justify-between border py-6 px-6">
        <div className="uppercase text-sky-500 tracking-widest">{type}</div>
        <div className="font-medium text-lg my-5">{title}</div>
        <div className="flex text-gray-500 text-sm">
          <div className="w-2/3 shrink-0">{date}</div>
          <div className="w-1/2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            {visits}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelBlog;
