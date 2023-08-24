import "./App.css";
import NavBar from "./Nav_Bar";
import HomeCarousel from "./HomeCarousel";
import ProjectCard from "./ProjectCard";

function App() {
  return (
    <div>
      <NavBar />
      <HomeCarousel />
      <div className="row">
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
