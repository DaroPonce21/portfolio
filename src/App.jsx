import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import ProyectsandWorks from './components/ProyectsandWorks.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Footer from './components/footer.jsx'



function App() {
  return (
<BrowserRouter>
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/aboutme' element={<About/>}/>
      <Route path='/works' element={<ProyectsandWorks/>}/>
      <Route path='/detail/:projectId' element={<Detail/>}/>
      <Route path='/skills' element={<Skills/>}/>
       </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
