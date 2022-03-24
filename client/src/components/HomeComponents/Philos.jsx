import React from 'react'
import ang from '../assets/ang.png'
import dots from '../assets/dots.png'
const Philos = () => {
  return (
    <>
        <div className='my-12 md:mt-8'>
        <div>
        <div className=' flex justify-center  mx-auto'>
            <h1 className='text-black ml-[2rem] md:ml-1 text-center text-[27px]  md:text-[34px] font-bold font-Outfit'>Our Philosophy</h1>
            <img src={dots} alt='dots' className='h-[30px] w-[32px] md:mt-3 mt-2 mx-2' />
            </div>
        
        <div className=' mt-10 md:flex w-full'>
        <div className='hidden md:block'>
   <img src={ang} alt='img' />
        </div>


         <div className='mt-10 w-full'>
         <div className=' '>
        <div className='  flex justify-start md:justify-end w-full'>


        <div className='    ml-7  card-main'>
        <div className='w-[3rem] h-[3rem] border  border-gray-400 absolute rounded-full'>
        <i class="fa-solid fa-microscope absolute -mt-3 -ml-2 text-2xl "></i>
        </div>
        <h1 className='text-[18px] text-gray-700 font-bold ml-6 mt-4 font-Outfit w-32 '>We are Equal</h1>
       
        <div className='    my-3'> 
            <h2 className='text-[14px] text-left md:text-justify text-gray-400 md:w-[15rem] w-[90%] leading-[17px]  py-2'>
            Our belief is that all entrepreneurs
             need an equal opportunity at raising funding
              no matter their background, ethnicity or gender.</h2>
        </div>
        </div>

        <div className=' hidden md:block  rounded mx-3 b  md:-ml-[0.25rem] -ml-[4.75rem] bg-gradient-to-r from-gray-300 h-[49px]  md:w-[30%] w-[50%]   ' >
        <div id="bar" data-aos="fade-in"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"
      className="rounded-xl  h-full bg-gradient-to-r from-gray-300 is-loading bar is-loading" style={{animationDuration: '3s'}} max="1" value="-1"></div>
        </div>

        </div>

      
        </div>

        <div className='grid my-7 md:my-0 justify-items-center'>
        <div className='ml-7 mr-7    flex justify-start md:justify-end w-full'>


        <div className=' ml-7  card-main'>
        
        <div className='w-[3rem] h-[3rem] border   border-gray-400 absolute rounded-full'>
        <i class="fa-solid fa-brain absolute -mt-3 -ml-2 text-2xl "></i>
        </div>
        <h1 className='text-[18px] text-gray-700   absolute  font-bold ml-6 mt-4  font-Outfit'>We believe in doers</h1>
      
        <div className=' py-2 mt-9 md:w-[15rem] w-[90%] py-2  '> 
            <h2 className='text-[14px] md:text-justify my-3 text-left text-gray-400 leading-[17px]    '>
            We are a mission driven team and also doers.
             It's in our DNA to help other like minded founders
              who care about execution & deliver results.</h2>
        </div>
        </div>

        <div className='hidden md:block rounded mx-3 bg-gradient-to-l  from-gray-300 md:bg-gradient-to-r from-gray-300 h-11  w-[45%]  md:w-[50%] '>
        <div id="bar" data-aos="fade-in"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" className="rounded-xl  h-full md:bg-gradient-to-r from-gray-300 bg-gradient-to-l from-gray-300 is-loading bar is-loading" style={{animationDuration: '3s'}} max="1" value="-1"></div>
        </div>

        </div>

       
        </div>

        <div className='grid justify-items-center'>
        <div className=' flex justify-start w-full'>


        <div className='  ml-7 card-main'>
        <div className='w-[3rem] h-[3rem] border  border-gray-400 absolute rounded-full'>
        <i class="fa-solid fa-person-running absolute -mt-3 -ml-2 text-2xl "></i>
        </div>
        <h1 className='text-[18px] text-gray-700 font-bold ml-6 mt-4 font-Outfit '>We are dreamers</h1>
       
        <div className='md:w-[15rem]  w-[90%] py-2  '> 
            <h2 className='text-[14px] md:text-justify text-left leading-[17px]  text-gray-400 py-3  '>
            Whether you're an investor or a founder, 
            we bring together the biggest dreamers to
             tackle the biggest problems around the world.</h2>
        </div>
        </div>

        <div className='hidden md:block rounded mx-3 md:-ml-[0.25rem] -ml-[4.75rem] bg-gradient-to-r from-gray-300 h-[49px]   w-[50%] md:w-full '>
        <div id="bar"data-aos="fade-in"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" className="rounded-xl  h-full bg-gradient-to-r from-gray-300 is-loading bar is-loading" style={{animationDuration: '3s'}} max="1" value="-1"></div>
        </div>
          
        </div>

       
        </div>
        </div>






        </div>
        </div>
        </div>
    </>
  )
}

export default Philos