import './Navbar.css'
import logo_light from '../../assets/logo-black.png'


const Navbar = () => {

  return (
    <div className="navbar">
        <img src={logo_light} alt="" className='logo'/>
        <div className="nav-links">
          <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Contact Me</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar