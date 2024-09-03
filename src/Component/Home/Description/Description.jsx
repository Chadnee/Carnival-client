import React from 'react';
import { FaUserDoctor } from 'react-icons/fa6';

const Description = () => {
    return (
        <div className='pb-20 px-5'>
            <div className='md:flex lg:flex md:w-10/12 lg:w-10/12 w-full mx-auto gap-10 justify-between items-center'>
                <figure className=' w-full'>
                    <img className='h-[350px] lg:h-[450px] md:h-[500px]' src="https://img.freepik.com/free-photo/team-cheerful-professional-doctors_329181-19653.jpg?ga=GA1.2.1233291300.1700676742&semt=ais_user" alt="" />
                </figure>
                <div className='6/12'>
                    <p className='font-bold pb-5 lg:pb-10 md:pb-10 md:pt-0 lg:pt-0 pt-10 text-slate-500'>Hospital</p>
                    <p className='lg:text-5xl text-3xl md:text-5xl text-blue-950 leading-snug tracking-wider'>
                        <span className='font-poppins font-bold block'>We have the most </span> 
                        powerfull medicine
                    </p>
                    <p className='pt-5 lg:pt-7 md:pt-7 text-slate-500 font-semibold'>They typically cover the primary needs of population in local communities, in contrast to larger hospitas which offer more specialized treatments and admit inpatients for overnight stays.</p>
                    <button className='bg-sky-200 flex gap-1 justify-center items-center  mt-5 lg:mt-10 md:mt-10 font-semibold text-blue-950 px-3 py-1'>Read More
                        <FaUserDoctor></FaUserDoctor>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Description;