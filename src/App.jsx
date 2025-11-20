import AboutPage from "./pages/About"
import Homepage from "./pages/Home"
import LoadingPage from "./pages/Loading"
import ProjectsPage from "./pages/Project"
import SkillsPage from "./pages/Skills"


function App() {


  return (
    <>
      <div className="bg-white">
        <LoadingPage />
        <Homepage />
        <SkillsPage />
        <AboutPage />
        <ProjectsPage />
      </div>
    </>
  )
}

export default App
