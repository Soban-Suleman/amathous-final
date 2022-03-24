import React from 'react'
import dots from '../assets/dots.png'
import ffo from '../assets/ff1.svg'
import fft from '../assets/ff2.svg'
import ffth from '../assets/ff3.svg'
import fffo from '../assets/ff4.svg'
const ForFounderComp = () => {
  return (
    <>
        <div>
        <div>
        <div className=' flex  md:flex-row flex-col     '>
        <div className='paragraph md:ml-[10%] w-full md:w-[65%] pl-2 mt-7  md:order-1  order-2    '>
        <div className=' '>
        <div className=' flex justify-center  my-8 '>
            <h1 className='text-black ml-16 md:ml-1 text-center text-[24px]  md:text-[36px] font-bold font-Outfit'>For Founder</h1>
            <img src={dots} alt='dots' className='h-[32px] w-[32px] mx-2 mt-3 ' />
            </div>
                    <h1 className='text-black md:text-left text-center text-[13px] md:text-[36px] font-normal md:font-semibold font-Outfit md:px-0 px-6 md:pr-10  md:pt-12 md:leading-[57px] leading-[15px] md:tracking-normal'>
                    Amathous helps level the playing field with 
                    startup funding by separating your identity 
                    from your business. Being anonymous breaks down
                     funding bias and let's your business & numbers do the talking.</h1>
                </div>
                <div className=' flex justify-center md:justify-start my-4 '>
                     <button className='  h-[40px] px-24 text-gray-50 text-[12px]  bg-gray-900 rounded '>Find investor</button>
                 </div>

        </div>
        <div className=' flex justify-end w-full md:w-[30%] md:mt-6 mt-2 md:my-12 md:order-2 order-1'>
            <img src={ffo} alt='img' className='w-[320px] h-[280px]  md:w-[584px] md:h-[501px] ' />
        </div>
        </div>


        <div className=' flex justify-center  my-8 '>
            <h1 className='text-black ml-16 md:ml-1 text-center text-2xl  md:text-2xl font-bold font-Outfit'>How It Works</h1>
            <img src={dots} alt='dots' className='h-11 w-11 mx-2 ' />
            </div>

    {/* <img src={ffvec} alt='img' className='   w-[80%] mx-auto ' /> */}



            <div className='  ff-bg-vec  mx-auto    '>
                


            <div className='w-[80%] max-h-[23rem] h-[23rem]   mx-auto'>
            
            <div className=' grid grid-cols-1   sm:grid-cols-2 md:grid-cols-2   '>

                <div className='  w-[70%]  mx-auto '>
                <center>
                    <img src={fft} alt='img' className='' />
                    <div className='md:w-[100%]'>
                    <p className='text-black font-bold text-center'>Step 1</p>
                    <p className='text-gray-500 text-center text-xs'>
                    Once both your startup has been approved by 
                    our team (we make sure everything is anonymous)
                      & your profile is completed make sure to provide
                       monthly updates for any investors who are 
                       following you to be alerted about your startup
                        progress.</p>
                
                        </div>
                        </center>
                </div>

                <div className='   w-[70%]   mx-auto  '>
                <center>
                    <img src={ffth} alt='img' />
                    <div className='md:w-[100%]'>
                    <p className='text-black font-bold text-center'>Step 2</p>
                    <p className='text-gray-500 text-center text-xs'>
                    Once both your startup has been approved by 
                    our team (we make sure everything is anonymous)
                      & your profile is completed make sure to provide
                       monthly updates for any investors who are 
                       following you to be alerted about your startup
                        progress.</p>
                
                        </div>
                        </center>
                </div>


                </div>
               </div>




               <div  className='flex md:mt-1 mt-[9rem] justify-center'>
               <div className=' w-[30%] '>
                <center>
                    <img src={fffo } alt='img' />
                    <div className='md:w-[100%]'>
                    <p className='text-black font-bold text-center'>Step 3</p>
                    <p className='text-gray-500 text-center text-xs'>
                    Once both your startup has been approved by 
                    our team (we make sure everything is anonymous)
                      & your profile is completed make sure to provide
                       monthly updates for any investors who are 
                       following you to be alerted about your startup
                        progress.</p>
                
                        </div>
                        </center>
  
                </div>
                </div>

                </div>
        



        </div>
        </div>
    </>
  )
}

export default ForFounderComp