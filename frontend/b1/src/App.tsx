import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from "./pages/signup"
import Course from './pages/coursetemplate'
import Roadmaps from './pages/roadmap'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/roadmaps" element={<Roadmaps/>}/>
      </Routes>
    </Router>
  )
}

export default App
