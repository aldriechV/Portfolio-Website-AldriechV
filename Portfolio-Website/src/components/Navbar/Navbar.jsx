import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import search_icon_light from '../../assets/search-w.png'


const Navbar = () => {

  return (
    <div className="navbar">
        <img src={logo_light} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact Me</li>
        </ul>

        <div className="search-box">
            <input type="text" placeholder='Search'/>
            <img src= {search_icon_light} alt=""/>
        </div>
    </div>
  )
}

export default Navbar