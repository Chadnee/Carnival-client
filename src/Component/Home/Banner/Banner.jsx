import React from 'react';
import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import banner from '../../../assets/banner.jpg';
import banner2 from '../../../assets/banner2.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='bg-blue-950 pb-20 mb-20'>
            <div className='flex lg:flex-row md:flex-row flex-col-reverse justify-between gap-5 pt-8 items-center w-full'>
                <div className='lg:w-6/12 md:w-6/12 w-full  relative'>
                  <div className='h-[600px] -mt-10 px-4 md:px-0 lg:px-0 lg:pl-40 md:pl-40 flex flex-col justify-center'>
                  <p className='text-slate-300 text-4xl pb-5 '>Hospital</p>
                    <p className='lg:text-5xl text-3xl md:text-5xl text-slate-300 leading-snug tracking-wider'>
                        <span className='font-poppins font-bold'>Hospital and clinical Care </span> 
                        in the world
                    </p>
                    <p className='text-slate-400 font-inter font-bold text-sm tracking-tight pt-7'>
                        A clinic is a health care facility that provides outpatient services. Outpatient services are those that do not require an overnight stay.
                    </p>
                  </div>
                  <div className='lg:w-[420px] md:w-[420px] w-full md:ml-6 lg:ml-6 pl-3 animate-slideUpAndDown shadow-2xl  bg-blue-950 absolute bottom-0 z-10  flex justify-center items-center gap-5'>
                    <img className='h-[50px] w-[50px] ml-8' src="https://img.freepik.com/premium-photo/low-section-man-standing-bus_1048944-7617384.jpg?ga=GA1.1.1233291300.1700676742&semt=ais_user" alt="" />
                    <div className='pr-5 py-4'>
                    <p className='text-white tracking-tighter'>Someone purchased</p>
                    <p className='text-white font-bold text-xl'>Deluxe Alumination foldable Disabled Walker</p>
                  <span className='text-slate-300 pt-3 text-sm block'>Sajidur Rahman</span>
                  <span className='text-white text-sm'>50 mins ago</span>
                    </div>
                  </div>
                </div>
                <div className='relative lg:w-6/12 md:w-6/12 w-full'> {/* Ensure Swiper container is wide enough */}
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper h-[500px] w-full"
                    >
                        <SwiperSlide>
                            <img className='w-full h-full object-cover' src={banner} alt="Banner 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-full h-full object-cover' src={banner2} alt="Banner 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-full h-full object-cover' src={banner} alt="Banner 1" />
                        </SwiperSlide>
                    </Swiper>
                    <div className='flex mx-auto absolute py-3 z-10 leading-5 font-roboto text-sm px-3 bottom-0 justify-between lg:w-[450px] md:w-[450px] gap-7 text-slate-100 bg-slate-400 bg-opacity-30 items-center'>
                        <p className='w-6/12'>
                            <span className='text-[16px] font-bold'>Clinics Carnival | hospital</span>
                            <br /><span>Primary care, such as check up and treatment for illness</span>
                        </p>
                        <p className='w-6/12'>
                            <span className='flex justify-start gap-2 items-center'><SlLocationPin /> Location</span>
                            <span>Dhaka, Bangladesh</span>
                            <span className='flex justify-start items-center'><MdOutlineStarBorderPurple500 /> Rating:</span>
                            <span className='flex items-center text-[13px] '>
                                <IoStarSharp className='text-white' />
                                <IoStarSharp className='text-white' />
                                <IoStarSharp className='text-white' />
                                <IoStarSharp className='text-white' />
                                <MdOutlineStarBorderPurple500 />
                                <span className='pl-3'>4.9 | 5</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
