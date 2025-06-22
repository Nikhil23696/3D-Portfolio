import './App.css'
import Contacts from './component/Contacts'
import Skills from './component/Skills'
import Project from './component/Project'


function App() {
  return (
    <>
      <div className="portfolio">
        <div className="aboutme">
          <h1 className="intro-heading">
            Nikhil Yadav <span className='purple'>MERN Stack Developer <span className="dot">•</span> Frontend Developer</span>
          </h1>

          <div className="edu">
            <h1 className="edu-heading">Education:</h1>
            <h2 className="edu-detail">NIT, Rourkela <span className="year">(2023–2024)</span></h2>
          </div>

          <Project />
          <Skills />
          <Contacts />
        </div>
      </div>

    </>
  )
}

export default App
