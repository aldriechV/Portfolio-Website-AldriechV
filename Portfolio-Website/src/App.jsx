import React, { use, useState } from 'react'
import './index.css'
// Component Imports
import Navbar from './components/Navbar/Navbar'
import Card from './components/ProjectCards/Card'
import { projects } from './components/ProjectCards/Projects'
import Contact from './components/ContactMe/Contact'

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    // Components for NavBar and Project Keys are over here 
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className='projects-grid'>
        {projects.map((projects, index) => {
            return <Card key={index} experience={projects}/>;
        })}
      </div>
      <Contact />
    </div>

  )
}

export default App