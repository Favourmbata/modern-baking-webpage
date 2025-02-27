import {useState} from 'react'
import logo from "../assets/logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

import {navlinks} from "../constants"

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle , setToggle] = useState(false);
  return (
    <nav className=' w-full flex py-6 justify-between items-center navbar'>
     <img src={logo} alt='hoobank'
       className='w-[124px] h-[32px]'/>
       <ul className=' list-none sm:flex hidden justify-end flex-1'>
          {navlinks.map((nav,index)=>(
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"} ${index === navlinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
       </ul>
       <div className='sm:hidden flex flex-1 justify-end items-center'>
         <img src={toggle ? close: menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={()=> setToggle((prev) => !prev)}
         />
         <div  className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
         <ul className=' list-none flex flex-col justify-end flex-1'>
          {navlinks.map((nav,index)=>(
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"} ${index === navlinks.length - 1 ? "mr-0" : "mb-4"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
       </ul>
         </div>
       </div>
    </nav>
  )
}

export default Navbar