import React from 'react'
import image1 from "../../assets/Hero/DM60 4G Smart Watch with Sim Card  2.02inch HD Screen.png";
import image2 from "../../assets/Hero/DM60 4G Smart Watch with Sim Card Quad-Cord.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const Banner = () => {
  return (
    <div className='min-h[550px] flex
      justify-center items-center py-12
        sm:py-5'>
        <div className='container'>
           <div className='grid
             grid-cols-1 sm:grid-cols-2
              gap-6 items-center'>
              {/* image section */}
                <div data-aos="zoom-in">
                    <img src={image1} 
                    alt="" 
                     className='max-w-[400px] h-[350] w-full
                       mx-auto drop-shadow=[-10px_10px_12px_rgba
                       (0,0,0,1) object-cover]'/>
                </div>
               {/* Text details section */}
               <div className='flex flex-col justify-center
                gap-4 sm:p-0'>
                <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>
                Winter Sale upto 50% Off</h1>
                <p data-aos="fade-up" className='text-sm text-gray-500
                  tracking-wide leading-5'>
                    DM60 4G Smart Watch with Sim Card 2.02inch HD Screen Quad-Cord CPU Support Android 8.1 Reloj Inteligente Montre pk cds9 ultra</p>
                    <div className='flex flex-col gap-4'>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                          <GrSecure className='text-4xl h-12 w-12
                           shadow-sm p-4 rounded-full 
                            bg-violet-200 dark:bg-violet-500' />
                            <p>Quality Products</p>
                        </div>
                        <div data-aos="fade-up" className='flex
                         items-center gap-4'>
                           <IoFastFood className='text-4xl h-12
                            w-12 shadow-sm p-4 rounded-full dark:bg-orange-400' />
                            <p>Fast Delivery</p>
                        </div>
                        <div data-aos="fade-up" className='flex
                         items-center gap-4'>
                           <GiFoodTruck className='text-4xl h-12
                            w-12 shadow-sm p-4 rounded-full bg-green-100
                            dark:bg-green-400' />
                            <p>Easy Payment Method</p>
                        </div>
                        <div data-aos="fade-up" className='flex
                         items-center gap-4'>
                           <GiFoodTruck className='text-4xl h-12
                            w-12 shadow-sm p-4 rounded-full bg-yellow-100
                            dark:bg-yellow-400' />
                            <p>Get Offers</p>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Banner