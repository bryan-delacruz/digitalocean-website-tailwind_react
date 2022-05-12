import "./App.css";
import Main from "./Components/Main";
import NavBarOne from "./Components/NavBarOne";
import NavBarTwo from "./Components/NavBarTwo";
import Stats from "./Components/Stats";
import Slides from "./Components/Slides";
import Cloud from "./Components/Cloud";
import Scale from "./Components/Scale";
import Features from "./Components/Features";
import Community from "./Components/Community";

function App() {
  return (
    <>
      <NavBarOne />
      <NavBarTwo />
      <Main />
      <Stats />
      <Slides />
      <Cloud />
      <Scale />
      <Features />
      <Community />
      <div>
        <div className="container mx-auto">
          <div className="w-1/2">
            <h2>Start building today</h2>
            <p>
              Sign up now and you'll be up and running on DigitalOcean in just
              minutes.
            </p>
          </div>
          <div className="w-1/2">
            <button>Create your account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
