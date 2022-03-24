import React from 'react'
import CountUp from 'react-countup'
import dots from '../assets/dots.png'
const TheNumber = () => {
 
    return (
    <> 
        <div>
            <div>
            <div className=' flex justify-center w-[80%] mx-auto '>
            <h1 className='text-black text-[27px] text-center md:text-[34px] font-bold font-Outfit'>The numbers speak for themselves</h1>
            <img src={dots} alt='dots' className='h-[30px] w-[32px] mx-2 ml-[6rem] md:ml-[19rem] mt-[45px] md:mt-3 absolute   ' />
            </div>
                <div className='card-main grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 my-3 w-[80%] mx-auto'>

                <div className='py-6 md:py-20 bg-gray-200 rounded'>
                    <h1 className='text-center text-black md:text-[36px] text-[24px] font-Outfit font-bold font-Outfit ' id='mynumber' >< CountUp end={100} />+</h1>
                    <h1 className='text-center text-gray-400 text-[12px] py-2 font-Outfit  '> MVP's Built</h1>
                </div>

                
                <div className='py-6 md:py-20 bg-gray-200 md:py-16 rounded'>
                    <h1 className='text-center text-black md:text-[36px] text-[24px] font-Outfit font-bold'>< CountUp end={4} /></h1>
                    <h1 className='text-center text-gray-400 text-[12px] py-2 font-Outfit  '> Term Sheets Submited</h1>
                </div>

                
                <div className='py-6 md:py-20 bg-gray-200 md:py-16 rounded'>
                    <h1 className='text-center text-black md:text-[36px] text-[24px] font-Outfit font-bold'>< CountUp end={216} />+</h1>
                    <h1 className='text-center text-gray-400 text-[12px] py-2 font-Outfit  '> Consultations Completed</h1>
                </div>

                
                <div className='py-6 md:py-20 bg-gray-200 md:py-16 rounded'>
                    <h1 className='text-center text-black md:text-[36px] text-[24px] font-Outfit font-bold'>< CountUp end={10} />K+</h1>
                    <h1 className='text-center text-gray-400 text-[12px] py-2 font-Outfit  '> Coffee's Consumed</h1>
                </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default TheNumber