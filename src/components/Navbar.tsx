import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

const[ isMenuOpen,setIsMenuOpen] =useState(false);
const toggleMenu=() => {
    setIsMenuOpen (!isMenuOpen)
}



  return (
    <div className='navbar-container'>
    <div className="navbar">
        <div className='navbar-brand'>Hina</div> 
    {/* larg screen navbarlink */}


    {/* <img src="/HT.png" alt="logo" className="h-15  w-20 rounded-lg mt-3 hover:text-blue-600 ml-20 " />     */}
    {/* navigation bar */}
    <ul className={`navbar-links ${isMenuOpen ? `open` : ``}`}>
      <li  className="navbar-link">
        <a href="#hero">Home</a></li>

     <li className="navbar-link">
        <a href="#about">About</a></li> 

      <li  className="navbar-link">
        <a href="#Project">Project </a></li>

      <li className="navbar-links">
        <a href="#Skills">Skills</a></li>

          <li className="#navbar-link">
            <a href="#Contect">Contect</a></li>
       </ul>

       {/* hamburger menu icons */}
       <div className='navbar-menu-icon'onClick={toggleMenu}>
        {isMenuOpen ?<AiOutlineClose size={30}/> :<AiOutlineMenu size={30}/>}

       </div>
       </div>
       {/* mobile  menu drop down */}
       {isMenuOpen &&(
        <ul className={"navbar-Menu $ {isMenuOpen ? `open` :``}"}>
            <li className='navbar-link'>
              <a href="#hero"onClick={toggleMenu}>Home</a>
               </li>

               <li className='navbar-link'>
              <a href="#about"onClick={toggleMenu}>Home</a>
               </li>

               <li className='navbar-link'>
              <a href="#project"onClick={toggleMenu}>About</a>
               </li>

               <li className='navbar-link'>
              <a href="#skills"onClick={toggleMenu}>Project</a>
               </li>

               <li className='navbar-link'>
              <a href="#"onClick={toggleMenu}>Skills</a>
               </li>

               <li className='navbar-link'>
              <a href="#contect"onClick={toggleMenu}>Contect</a>
               </li>



        </ul>
       )

       }




  </div>
  )
}

export default Navbar
