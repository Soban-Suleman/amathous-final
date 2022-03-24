import React from 'react'
import dots from '../assets/dots.png'
const NewsLetters = () => {
  return (
    <>
        <div className='my-7 md:mb-4 md:mt-16'>
            <div>
 

            <div className=' flex justify-center invisible md:visible  my-5 '>
            <h1 className='text-black ml-16 md:ml-1 text-center   md:text-[34px] font-bold font-Outfit'>Join Our Newsletter</h1>
            <img src={dots} alt='dots'className='h-[30px] w-[32px]  mx-2 md:mt-4'/>
            </div>

            
            <div className='md:w-[80%] w-full mx-auto border-t-8 border-black bg-gray-200'>
            <div className='flex md:hidden     pt-7 mx-auto'>
            <h1 className='text-black ml-[5rem] md:ml-1 text-center text-[27px]   font-bold font-Outfit'>Join Our Newsletter</h1>
            <img src={dots} alt='dots' className='h-[30px] w-[32px] mt-1 mx-2' />
            </div>
        <div className='md:flex justify-between w-[90%] mx-auto'>
        <form className='my-6 mx-auto'>

         <input type='text' className='border my-4 w-full focus:bg-gray-50 md:w-[18rem] border-gray-300 bg-gray-200 rounded  h-[44px] py-4 px-5 md:mx-6' placeholder='Full name'/> 
         <input  type='text' className='border  w-full md:w-[18rem] focus:bg-gray-50 border-gray-300 bg-gray-200 rounded  py-4 h-[44px] px-5 md:mx-6' placeholder='Email address'/>   
         <button className='bg-black h-[44px] px-5 text-gray-50 rounded md:w-[10rem] w-full my-7 md:my-3 md:mx-6'>Join newsletter</button>      
        
  
</form>
        </div>
        </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetters