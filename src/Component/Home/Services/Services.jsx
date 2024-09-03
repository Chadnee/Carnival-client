import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaAmbulance, FaHeart, FaBone, FaChild, FaBaby, FaRibbon, FaXRay, FaBrain, FaSyringe, FaRunning } from 'react-icons/fa';


const Services = () => {
    const { data: service = [], isLoading, error } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axios.get('https://carnival-server.vercel.app/services');
            return res.data;
        }
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

    const iconMapping = {
        FaAmbulance: FaAmbulance,
        FaHeart: FaHeart,
        FaBone: FaBone,
        FaChild: FaChild,
        FaBaby:FaBaby,
        FaRibbon:FaRibbon,
        FaXRay: FaXRay,
        FaBrain:FaBrain,
        FaSyringe:FaSyringe,
        FaRunning:FaRunning
    }
      
    //hide extra words in description by Truncation function

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        // console.log(words.length)
        if(words.length > wordLimit){
            return words.slice(0, wordLimit).join('')+'...'
        }
        return text;
    };
    return (
        <div className='bg-emerald-100 bg-opacity-90 flex flex-col items-center justify-center'>
            <div className='lg:flex-row md:flex-row flex-col flex justify-center items-start py-20 md:w-7/12 w-full mx-auto gap-16 lg:w-7/12'>
                <div className='flex flex-col justify-start items-start w-full lg:w-6/12 md:w-6/12 px-5'>
                    <p className='font-bold pb-5 lg:pb-10 md:pb-10 md:pt-0 lg:pt-0 pt-10 text-blue-950'>Hospital</p>
                    <p className='lg:text-5xl text-3xl md:text-5xl text-blue-950 pb-2 leading-snug tracking-wider'>
                        Find <span className='font-poppins font-bold '>Services</span>
                    </p>
                    <p className='pb-4'>The treatment are provided by various doctor, nurces and expert specialist</p>
                    <button className='bg-blue-950 mb-8 text-white flex gap-2 pt-1 pb-2 px-5 font-bold items-center justify-center'>
                        Read more <FaUserDoctor></FaUserDoctor></button>
                    <figure>
                        <img className='md:h-[400px] lg:h-[400px] h-[400px] w-[500px]' src="https://img.freepik.com/premium-photo/portrait-happy-young-caucasian-medical-student-nurse-blue-uniform-with-stethoscope-medical-concept-healthcare_359031-41827.jpg?w=360" alt="" />
                    </figure>
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 w-full md:w-6/12 lg:w-6/12 px-5'>
                    {
                        service.map(item =>{
                            const IconMapping = iconMapping[item.icon];
                            // console.log(IconMapping);
                            return (
                                <div key={item._id} className='relative flex flex-col mb-12 justify-center items-center mx-auto'>
                                
                                <div className="card bg-emerald-50 rounded-none md:h-[150px] lg:h-[150px] lg:w-[180px] md:w-[180px] pt-2 border border-blue-950 shadow-xl">

                                    <div className="flex flex-col justify-center mx-auto my-2 items-center lg:pt-1 md:pt-1 pt-3 pb-2 text-center px-2">
                                        <h2 className="card-title md:text-[14px] lg:text-[14px] font-bold pb-2">{item.serviceName}</h2>
                                        <p className='md:text-[10px] lg:text-[10px] break-all'>{truncateText(item.description, 9)}</p>
                                        <div className="">
                                            <button className="bg-blue-950 text-slate-200 px-6 py-2 lg:px-3 md:px-3 lg:py-1 md:py-1 rounded-2xl  lg:text-[10px] md:text-[10px] mt-3">Show more</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='absolute -top-7'>
                                     {IconMapping &&    <div className='border-2 p-3 rounded-full bg-blue-950 border-blue-950  text-slate-200 '>
                                                <span className=''><IconMapping className='text-xl' /></span>
                                            </div>} 
                                </div>


                            </div>
                            ) 
                        }
                            )
                    }
                </div>


            </div>
        </div>
    );
};

export default Services;