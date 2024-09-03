import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoIosArrowDown } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { IoCalendarOutline } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';

const Navbar = () => {
    const isSmallDevice = useMediaQuery({ query: '(max-width: 600px)' });
    const isMediumOrLargeDevice = useMediaQuery({ query: '(min-width: 601px)' }); 

    const [toggle, setToogle] = useState(false)
    const [activeLink, setActiveLink] = useState('')

    const toggleButton = () => {
        setToogle(!toggle)
    }

    const handleColor = (id) =>{
        setActiveLink(id)
        console.log(id)
    }

    const handleClose = () => {
        setToogle(false);
    };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }


  const navItems = [
    { title: "All products", submenu: ['product 1', 'product 2', 'product 3'] },
    { title: "Pages", submenu: ['pages 1', 'pages 2', 'pages 3'] },
    { title: "Blog", submenu: ['Blog 1', 'Blog 2', 'Blog 3'] },
    { title: "All collection" }
  ]

  return (
    <div className='bg-blue-950 text-white'>
       <style>
            {
                `
                 /* Navbar.css */
.menu-closed {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1s ease;
}

.menu-open {
    opacity: 1;
    transform: translateX(0);
    transition: all 1.5s ease;
}

                `
            }
           </style>
               
                {
                    isSmallDevice && (
                       <div className='flex justify-between items-center'>
                            <div className='flex font-bold font-serif flex-col justify-start items-start fixed  py-2 top-0 w-full z-10 bg-blue-950'>

<div onClick={toggleButton} className="flex fitems-start  mr-0">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 font-bold text-white w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </div>
    <div> <p className='font-poppins font-bold text-slate-300 tracking-wider text-3xl'>Clinics-<br />Carnival</p></div>
    <div className='pt-3 '>
    {
        toggle && (
            <div>
        {/* Cross button to close the dropdown */}
    <button onClick={handleClose} className=" text-white pl-32">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
    </div>
        )
    }
        </div>



</div>
<div className={`w-full border-teal-400 h-full ${toggle ?  'menu-open' : 'menu-closed'}`}>
    {
        toggle && (
    
            
            <ul
                tabIndex={0}
                className="menu menu-sm bg-opacity-90  text-white left-0 top-full w-full bg-blue-950 z-50   pb-5 font-bold shadow-lg  p-0   rounded-none ">
                        {/* Sidebar content here */}
                        {
                                    navItems.map((item, index) => (
                                        <li key={index} className='relative'>
                                            {item.submenu ? (
                                                <div
                                                    className='flex justify-between items-center gap-2 cursor-pointer'
                                                    onClick={() => handleMouseEnter(index === activeDropdown ? null : index)}
                                                >
                                                    <span>{item.title}</span>
                                                    <IoIosArrowDown />
                                                </div>
                                            ) : (
                                                <Link>{item.title}</Link>
                                            )}
                                            {/* Dropdown logic changed to open directly below the parent option */}
                                            {activeDropdown === index && item.submenu && (
                                                <ul className=' text-white shadow-lg p-2 mt-2'>
                                                    {item.submenu.map((submenuItem, subIndex) => (
                                                        <li key={subIndex} className='px-8 py-2 hover:bg-gray-200'>
                                                            <Link>{submenuItem}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))
                                }
            </ul>
        )
    }
</div>

</div>
                       </div>
                    )
                }
     

      {isMediumOrLargeDevice && (
        <div className='flex flex-row justify-between items-center max-w-screen-xl mx-auto pb-4'>
          <div className='flex justify-start gap-28 items-center'>
            <p className='font-poppins font-bold text-slate-300 tracking-wider text-3xl'>Clinics-<br />Carnival</p>
            <ul className='flex gap-7 font-bold'>
              {
                navItems.map((item, index) => (
                  <li key={index}
                    className='relative flex justify-center items-center gap-2'
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >  {item.submenu ? <>
                    <span>{item.title}</span>
                    <span><IoIosArrowDown></IoIosArrowDown></span>
                    {activeDropdown === index && (
                      <ul className='absolute top-full mt-2 bg-white text-black shadow-lg p-2 z-10'>
                        {item.submenu.map((submenuItem, subIndex) => (
                          <li key={subIndex} className='px-8 py-2 hover:bg-gray-200'>
                            <Link>{submenuItem}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </> :
                    <>
                      <Link>{item.title}</Link>
                    </>}


                  </li>
                ))
              }
            </ul>
          </div>
          <div className='flex flex-end items-center gap-8'>
            <span className='text-4xl'><RiUserAddLine /></span>
            <span className='text-3xl '><TfiWorld></TfiWorld></span>
            <p className='bg-slate-300 font-titilliumWeb text-black px-3 flex justify-center items-center gap-4 font-semibold py-2'>
              <span><IoCalendarOutline></IoCalendarOutline></span>0 - My Cart</p>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Navbar;
