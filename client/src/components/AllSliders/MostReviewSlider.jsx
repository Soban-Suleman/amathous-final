import React from 'react'
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import aboutt from '../assets/about2.png'
import abouto from '../assets/about1.png'
import aboutth from '../assets/about3.png'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  
const MostReviewSlider = () => {
  return (
    <>
    <div className='md:w-[80%] mx-auto '>
 
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        <div className='rounded'>
                            <div>
                                <img src={aboutt} alt='img' className='w-full h-[300px]' />
                            </div>
                            <div className='bg-gray-200  h-[200px] rounded-b'> 
                            <div className='mx-5 flex justify-between  '>
                                <h1 className='text-black text-[18px] font-Outfit my-3 font-bold'>Alexis M. Kyprianou</h1>
                                <span className='rounded-full cursor-pointer my-3 bg-black h-6 w-6'><i class="fa-brands fa-twitter text-yellow-400 text-sm ml-1 "></i></span>
                            </div>
                            <div className='mx-2'>
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
                                <img src={abouto} alt='img'  className='w-full h-[300px]'/>
                            </div>
                            <div className='bg-gray-200 h-[200px] rounded-b'> 
                            <div className='mx-3 flex justify-between  '>
                                <h1 className='text-black text-[18px] font-Outfit my-3 font-bold'>Kamran Uddin</h1>
                                <span className='rounded-full cursor-pointer my-3 bg-black h-6 w-6'><i class="fa-brands fa-twitter text-yellow-400 text-sm ml-1 "></i></span>
                            </div>
                            <div className='mx-2'>
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
                                <img src={aboutth} alt='img' className='w-full h-[300px]' />
                            </div>
                            <div className='bg-gray-200 h-[200px] rounded-b'> 
                            <div className='mx-3 flex justify-between  '>
                                <h1 className='text-black text-[18px] font-Outfit my-3 font-bold'>Zeeshan Wajid</h1>
                                <span className='rounded-full cursor-pointer my-3 bg-black h-6 w-6'><i class="fa-brands fa-twitter text-yellow-400 text-sm ml-1 "></i></span>
                            </div>
                            <div className='mx-2'>
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
 
        </Carousel>
      </div>
      </div>
    </>
  )
}

export default MostReviewSlider