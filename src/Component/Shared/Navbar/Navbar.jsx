import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoIosArrowDown } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isMediumOrLargeDevice = useMediaQuery({ query: '(min-width: 601px)' });
  
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  
  const navItems = [
    {title: "All products", submenu:['product 1', 'product 2', 'product 3']},
    {title: "Pages", submenu:['pages 1', 'pages 2', 'pages 3']},
    {title: "Blog", submenu:['Blog 1', 'Blog 2', 'Blog 3']},
    {title: "All collection" }
  ]

  return (
    <div className='bg-blue-950 text-white'>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>

      {isMediumOrLargeDevice && (
        <div className='flex flex-row justify-between items-center max-w-screen-xl mx-auto pb-4'>
          <div className='flex justify-start gap-28 items-center'>
            <p className='font-poppins font-bold text-slate-300 tracking-wider text-3xl'>Clinics-<br />Carnival</p>
            <ul className='flex gap-7 font-bold'>
             {
                navItems.map((item, index) => (
                    <li key={index}
                    className='relative flex justify-center items-center gap-2'
                    onMouseEnter={()=>handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    >  {item.submenu?<>
                     <span>{item.title}</span>
                        <span><IoIosArrowDown></IoIosArrowDown></span>
                        {activeDropdown === index && (
                            <ul className='absolute top-full mt-2 bg-white text-black shadow-lg p-2 z-10'>
                            {item.submenu.map((submenuItem, subIndex)=>(
                                <li key={subIndex} className='px-8 py-2 hover:bg-gray-200'>
                                   <Link>{submenuItem}</Link> 
                                </li>
                            ))}
                            </ul>
                        )}
                    </>:
                    <>
                    <Link>{item.title}</Link>
                    </>}
                        
                        
                    </li>
                ))
             }
            </ul>
          </div>
          <div>
            <span className='text-4xl'><RiUserAddLine /></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
