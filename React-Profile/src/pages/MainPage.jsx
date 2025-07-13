import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import ProfileImage from "../components/ProfileImage";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import "../assets/style.css";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="main-page">
        <Introduction />
        <ProfileImage />
      </div>
      <div className="my-section">
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
};

export default MainPage;
