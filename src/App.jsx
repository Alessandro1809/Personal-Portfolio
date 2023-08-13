import { Routes, Route, HashRouter } from "react-router-dom"
import { WelcomeLayout } from "./layouts/WelcomeLayout"
import Presentation from "./Paginas/Presentation"
import Expperience from "./Paginas/Expperience"
import Projects from "./Paginas/Projects"
import WorkContact from "./Paginas/WorkContact"

function App() {


  return (
   <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomeLayout/>}>
            <Route index element={<Presentation/>}/>
            <Route path="Contact" element={<WorkContact/>}/>
            <Route path="Experience" element={<Expperience/>}/>
            <Route path="Projects" element={<Projects/>}/>
        </Route>
      </Routes>
   </HashRouter>
  )
}

export default App
