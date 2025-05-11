
import style from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contacts/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import History from './components/History/History'
import { Navbar } from './components/Navbar/Navbar'
import Project from './components/Projects/Project'

function App() {

  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <History />
      <Contact />
    </div>
  )
}

export default App
