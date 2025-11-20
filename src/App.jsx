import AboutPage from "./pages/About"
import Homepage from "./pages/Home"
import ProjectsPage from "./pages/Project"
import SkillsPage from "./pages/Skills"


function App() {


  return (
    <>
      <div className="bg-white">
        <Homepage />
        <SkillsPage />
        <AboutPage />
        <ProjectsPage />
      </div>
    </>
  )
}

export default App
