import React from "react";

const Main = () => {
  return (
    <div className="pt-32 pb-48 relative z-0 bg-do-blue-lighter">
      <div className="container flex items-center mx-auto ">
        <div className="w-1/2 ">
          <h1 className="text-6xl font-bold tracking-tighter">
            The cloud is complex. We make it simple.
          </h1>
          <p className="mt-5 text-2xl font-medium tracking-tighter text-gray-500">
            The cloud computing services you need, with the predictable pricing,
            developer-friendly features, and scalability you’ll love.
          </p>
        </div>
        <div className="w-1/2 ">
          <div className="mb-4 font-medium">
            Welcome to DigitalOcean. Sign up to get started!
          </div>
          <form action="">
            <div className="flex flex-col gap-y-5 w-4/5">
              <input
                className="px-5 py-4 rounded-lg border border-gray-400 focus:border-gray-600 shadow-input hover:shadow-input-focus focus:shadow-input-focus outline-none "
                placeholder="First name"
                type="text"
              />
              <input
                className="px-5 py-4 rounded-lg border border-gray-400 focus:border-gray-600 shadow-input hover:shadow-input-focus focus:shadow-input-focus outline-none "
                placeholder="Email"
                type="text"
              />
              <input
                className="px-5 py-4 rounded-lg border border-gray-400 focus:border-gray-600 shadow-input hover:shadow-input-focus focus:shadow-input-focus outline-none "
                placeholder="Password"
                type="password"
              />
              <div className="flex justify-between gap-x-4">
                <button className="w-3/4 btn-blue">Deploy in seconds</button>
                <button className="px-3 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">
                  <img
                    data-src="https://www-static.cdn.prismic.io/www-static/7b66f955-63dd-41f5-a403-e6727b24d4ea_google-logo.svg"
                    src="https://www-static.cdn.prismic.io/www-static/7b66f955-63dd-41f5-a403-e6727b24d4ea_google-logo.svg"
                    alt="Google Icon"
                    className="LazyImage___StyledImg-sc-1pcy1c0-0 bfuFas null lazyload blur-up"
                  />
                </button>
                <button className="px-3 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">
                  <img
                    data-src="https://www-static.cdn.prismic.io/www-static/0a3e37e0-1706-41d5-98d1-854585205a5e_github-logo.svg"
                    src="https://www-static.cdn.prismic.io/www-static/0a3e37e0-1706-41d5-98d1-854585205a5e_github-logo.svg"
                    alt="GitHub Icon"
                    className="LazyImage___StyledImg-sc-1pcy1c0-0 bfuFas null lazyload blur-up"
                  />
                </button>
              </div>
              <div className="text-gray-500">
                By signing up you agree to the{" "}
                <a href="/" className="underline font-light">
                  Terms of Service
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
