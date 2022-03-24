import React from 'react';
import MostReviewSlider from '../AllSliders/MostReviewSlider';
import abouto from '../assets/about1.png';
import aboutt from '../assets/about2.png';
import aboutth from '../assets/about3.png';
import dots from '../assets/dots.png';
const AboutComp = () => {
  return (
    <>
        <div>
            <div>

            <div className=' flex justify-center  mt-6'>
            <h1 className='text-black ml-16 md:ml-1 text-center text-[24px]  md:text-[36px] font-bold font-Outfit'>About Us</h1>
            <img src={dots} alt='dots' className='h-[32px] w-[32px] mx-2 mt-2 ' />
            </div>


                <div className='paragraph md:w-[70%] mt-4 md:py-10 mx-auto '>
                    <h1 className='text-black text-[13px] leading-[16px] md:text-[36px] font-normal md:font-semibold font-Outfit mx-3 text-center md:leading-[57px]   '>
                    Amathous mission is to break down funding bias &
                     discrimination by keeping your identity anonymous
                     all the way up to a VC intro. By doing so, we're able
                      to increase your likelihood of raising funding.</h1>
                </div>

                <div className=' flex justify-center  md:my-7 py-4 mt-6'>
            <h1 className='text-black ml-16 md:ml-7 text-center text-[24px]  md:text-[36px] font-bold font-Outfit'>Meet Our Founders</h1>
            <img src={dots} alt='dots' className='h-[32px] w-[32px] mx-2 mt-2 ' />
            </div>

                 <div className='md:w-[80%] mx-auto mb-9 ' >


                <div className=' w-[85%] mx-auto md:hidden '>
                    <MostReviewSlider/> 
                </div>



                     <div className='grid grid-cols-1 hidden md:inline-flex sm:grid-cols-1 md:grid-cols-3 gap-8'>
                        
                        <div className='rounded'>
                            <div>
                                <img src={aboutt} alt='img' className=' w-[354px]  h-[314px]' />
                            </div>
                            <div className='bg-gray-200 w-[354px] h-[200px] rounded-b'> 
                            <div className='mx-7 flex justify-between  '>
                                <h1 className='text-black text-[18px] font-Outfit my-3 font-bold'>Alexis M. Kyprianou</h1>
                                <span className='rounded-full cursor-pointer my-3 bg-black h-6 w-6'><i class="fa-brands fa-twitter text-yellow-400 text-sm ml-1 "></i></span>
                            </div>
                            <div className='mx-4'>
                                <h1 className='font-semibold px-3 text-gray-500 text-[12px]'>Co-Founder & CEO</h1>
                                <p className='text-[#828282] leading-[15px] font-light text-justify p-3 text-[12px]'>
                                A city dweller who loves a good iced 
                                coffee & a bagel on the weekends.
                                 He has experience working in SaaS & with
                                  Startups. He's found that nothing satisfies
                                   him more than meeting new people, building
                                    new relationships, solving big problems &
                                     contributing to the growth of businesses.</p>
                            </div>
                            </div> 
                        </div>


                        <div className='rounded'>
                            <div>
                                <img src={abouto} alt='img'  className=' w-[354px] h-[314px]'/>
                            </div>
                            <div className='bg-gray-200 w-[354px] h-[200px] rounded-b'> 
                            <div className='mx-7  flex justify-between  '>
                                <h1 className='text-black text-[18px] font-Outfit my-3 font-bold'>Kamran Uddin</h1>
                                <span className='rounded-full cursor-pointer my-3 bg-black h-6 w-6'><i class="fa-brands fa-twitter text-yellow-400 text-sm ml-1 "></i></span>
                            </div>
                            <div className='mx-4'>
                                <h1 className='font-semibold px-3 text-gray-500 text-[12px] '>Co-Founder & CTO</h1>
                                <p className='text-[#828282] leading-[15px] font-light text-justify p-3 text-[12px]'>
                                A technology enthusiast, who dreams about 
                                changing how we interact with the world.
                                 He has experience in product management,
                                  cloud solutions and engineering. Besides 
                                  technology, he is passionate about martial 
                                  arts and practices Muay Thai during his spare time.</p>
                            </div>
                            </div>
                        </div>


                        <div className='rounded'>
                            <div>
                                <img src={aboutth} alt='img' className='w-[354px] h-[314px]' />
                            </div>
                            <div className='bg-gray-200 w-[354px] h-[200px] rounded-b'> 
                            <div className='mx-7 flex justify-between  '>
                                <h1 className='text-black text-[18px] font-Outfit my-3 font-bold'>Zeeshan Wajid</h1>
                                <span className='rounded-full cursor-pointer my-3 bg-black h-6 w-6'><i class="fa-brands fa-twitter text-yellow-400 text-sm ml-1 "></i></span>
                            </div>
                            <div className='mx-4'>
                                <h1 className='font-semibold px-3 text-[#828282] text-[12px] '>Head of Engineering</h1>
                                <p className='text-[#828282] leading-[15px] font-light text-justify p-3 text-[12px]'>
                                Short bio goes here - Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit. Volutpat nunc, 
                                 duis non ut dignissim rhoncus tristique fringilla
                                  donec. Orci, integer ipsum neque mus. Lorem ipsum 
                                  dolor sit amet, consectetur adipiscing elit. Volutpat 
                                  nunc, duis non ut dignissim rhoncus.</p>
                            </div>
                            </div>
                        </div>

                     </div>
                 </div>


                 <div className='flex justify-center mt-12 md:my-24'>
                     <button className='mx-auto h-[50px] px-24 md:px-[10rem] font-bold bg-gray-50 rounded border border-b-4 border-gray-900'>Join our team</button>
                 </div>


            </div>
        </div>
    </>
  )
}

export default AboutComp