import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/initial-logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fde0e0] text-[#103463]'>
    <div>
        <a href = '/'></a><img src={Logo} alt ='Lisa Pearson Logo' style = {{width: '50px'}} />
    </div>

{/*Menu */}
    <ul className ='hidden md:flex'>
   <li><Link activeClass="active" to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li><Link activeClass="active" to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li><Link activeClass="active" to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li><Link activeClass="active" to="works" smooth={true} duration={500}>
          Works
        </Link></li>
        <li><Link activeClass="contact" to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
    </ul>

{/* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10 '>
    {!nav ? <FaBars /> : <FaTimes />}
</div>

{/*Mobile Menu*/}
    <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#fde0e0] flex flex-col justify-center items-center'} >
        <li className = 'py-6 text-4xl'><Link activeClass="active" to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className = 'py-6 text-4xl'><Link activeClass="active" to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li className = 'py-6 text-4xl'><Link activeClass="active" to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li className = 'py-6 text-4xl'><Link activeClass="active" to="works" smooth={true} duration={500}>
          Works
        </Link></li>
        <li className = 'py-6 text-4xl'><Link activeClass="active" to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
    </ul>

{/* Social icons*/}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-[-10px] bg-[#103463]'>
        <a href = 'https://www.linkedin.com/in/lisapearsonnz/' target ="_blank" className ='flex justify-between items-center w-full text-white'>LinkedIn<FaLinkedin size ={30}/></a>
    </li>
    <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-[-10px] bg-[#103463]'>
        <a href = 'https://github.com/lisapearsonnz' target='_blank'  className ='flex justify-between items-center w-full text-white'>Github<FaGithub size ={30}/></a>
    </li>
    <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-[-10px] bg-[#103463]'>
        <a className ='flex justify-between items-center w-full text-white'>Email Me<HiOutlineMail size ={30}/></a>
    </li>
</ul>
</div>
    </div>
  );
};

export default Navbar