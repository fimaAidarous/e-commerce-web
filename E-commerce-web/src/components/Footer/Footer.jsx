import React from 'react'
import image2 from "../../assets/purple pattern.png";
import image1 from "../../assets/shopee.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${image2})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "10%",
    width: "100%",
};

const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
];


const Footer = () => {
  return (
    <div style={BannerImg}
     className='text-white'>
        <div className='container'>
           <div data-aos="zoom-in" className='grid md-grid-cols-3'>
            {/* company details */}
            <div className='py-8 px-4'>
               <h1 className='sm:text-3xl text-xl
                 font-bold sm:text-left
                  text-justify mb-3 flex items-center gap-3'>
                 <img src={image1} alt="" 
                 className='max-w-[50px]'/>
                Shopsy</h1>
               <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {/* footer links  */}
            <div className='grid grid-cols-2 sm:grid-cols-3
              cols-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl 
                         text-xl font-bold sm:text-left text-justify mb-3'>
                             Links
                         </h1>
                         <ul className='flex flex-col gap-3'>
                            { FooterLinks.map((link) => (
                                <li 
                                className='cursor-pointer
                                hover:text-primary hover:translate-x-1
                                 duration-300 text-gray-200'
                                 key={link.title}
                                >
                                 <span>{link.title}</span>
                                </li>
                            ))
                            }
                         </ul>
                    </div>
                </div>
                {/* social links */}
                <div>
                    <div className='flex items-center gap-3 
                      mt-6'>
                        <a href="#">
                       <FaInstagram  className='text-3xl'/> 
                        </a>
                        <a href="#">
                       <FaFacebook  className='text-3xl'/> 
                        </a>
                        <a href="#">
                       <FaLinkedin  className='text-3xl'/> 
                        </a>
                    </div>
                    <div className='mt-6'>
                       <div className='flex items-center gap-3'> 
                          <FaLocationArrow />
                          <p>It's good</p>
                       </div>
                       <div className='flex items-center gap-3'> 
                          <FaMobileAlt />
                          <p>252636543245</p>
                       </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer