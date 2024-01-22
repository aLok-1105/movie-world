import React from 'react'
import { Link } from 'react-router-dom';
import LOGO from '../images/logo.png';


const links = [
    {
        to: '/',
        name: 'Home'
    }
]


  

export default function Navbar() {

        // const [isMenuOpen, setIsMenuOpen] = useState(false);
      
        // const handleMenuToggle = () => {
        //   setIsMenuOpen(!isMenuOpen);
        // };
        const isMenuOpen  = true;

  return (

    <>
        <nav className="navbar">
      <div className="logo"><img src={LOGO} style={{width: '40px'}} alt='Logo'/></div>
      <h2 className='box-office'>Movie World</h2>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <ul>
        {links.map((link)=>
            <li className="menu-item" key={link.to}><Link className="menu-link" to={link.to} >{link.name} </Link></li>
        )}
    </ul>

      </div>
    </nav>
    
    </>

  )
}
