import React from 'react'
import image1 from "../../assets/TopProducts/DM60 4G Smart Watch with Sim Card.png";
import image2 from "../../assets/TopProducts/Handbags Last Design Womens Bags For Business.png";
import image3 from "../../assets/TopProducts/Purses And Handbags 2024 Messenger Bags For Women.png";
import image4 from "../../assets/TopProducts/Wristwatches for Both Men and Women.png";
import { FaStar } from "react-icons/fa"; 

const ProductData = [
    {
        id: 1,
        img: image1,
        title: "DM60 4G Smart Watch with Sim Card",
        description:
          " DM60 4G Smart Watch with Sim Card 2.02inch HD Screen Quad-Cord CPU Support Android 8.1 Reloj Inteligente Montre pk cds9 ultra",
      },
      {
        id: 2,
        img: image2,
        title: "Handbags Last Design Womens Bags For Business",
        description:
          "2024 Fashion Pu Niche Waterproof Portable Versatile Shoulder Hot Sale Crossbody Handbags Last Design Womens Bags For Business",
      },
      {
        id: 3,
        img: image3,
        title: "Luxury Shoulder Bag Pu Leather Purses And Handbags",
        description:
          "2024 Factory Direct Wholesale Bolsos De Mujer Luxury Shoulder Bag Pu Leather Purses And Handbags 2024 Messenger Bags For Women",
      },
      {
        id: 4,
        img: image4,
        title: "Wristwatches for Both Men and Women",
        description:
          "Hot New BT Call Smart Watches 1.69 Inch Full Touch Screen Fashionable Square Design Wristwatches for Both Men and Women",
      },
];


const TopProducts = () => {
  return (
    <div>
        <div className='container'>
           {/* header section */}
           <div
          className="text-left mb-24"
        >
          <p data-oas="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-oas="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-oas="fade-up" className="text-xs text-gray-400">
            Lorem ipsum!
          </p>
        </div>

        {/* Body section */}
         <div className='grid grid-cols-1 sm:grid-cols-2
           md:grid-cols-4 gap-20 md:gap-5 place-items-center'>
            {ProductData.map((data) => (
                <div 
                data-aos="zoom-in"
                className='rounded-2xl bg-white dark:bg-gray-800
                 hover:bg-black/80 dark:hover:bg-primary
                 hover:text-white relative shadow-xl 
                 duration-300 group max-w-[300px]'> 
                {/* Image section */}
                  <div className='h-[100px]'>
                     <img src={data.img} 
                     alt="" 
                      className='max-w-[180px] block mx-auto
                       transform -translate-y-20 group-hover:scale-105
                        duration-300 drop-shadow-md'/>
                  </div>
                     {/* Detais section */}
                     <div className='p-5 text-center'>
                         {/* Stars section */}
                       <div className='w-full flex items-center 
                        justify-center gap-1'>
                         <FaStar className='text-yellow-500' />
                         <FaStar className='text-yellow-500' />
                         <FaStar className='text-yellow-500' />
                         <FaStar className='text-yellow-500' />
                       </div>
                       <h1 className='text-xl font-bold'>{data.title}</h1>
                       <p className='text-gray-500 
                        group-hover:text-white duration-300 
                         text-sm line-clamp-2'></p>
                         <button
                          className='bg-primary hover:scale-105
                           duration-300 text-white py-1 px-4 
                            rounded-full mt-4 group-hover:bg-white
                             group-hover:text-primary'>
                              Order Now
                         </button>
                     </div>
                </div>
            ))}
         </div>
        </div>
    </div>
  )
}

export default TopProducts