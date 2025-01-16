import React from "react";
import image1 from "../../assets/Hero/shop.png";
import image2 from "../../assets/Hero/Thick Sole Women.png";
import image3 from "../../assets/Hero/Platform Sneakers.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Thick Heel Women's Snow Boots",
    description:
      " K1111 Women Boots Winter Keep Warm Fur Boots Large size Waterproof Thick Heel Women's Snow Boots",
  },
  {
    id: 2,
    img: image2,
    title: "Platform Sneakers",
    description:
      "Luxury Designer Sneakers Shoes High Quality Women Red Shoes Women Casual Platform Sneakers",
  },
  {
    id: 3,
    img: image3,
    title: "Teen-Agers Girl Casual Thick Sole ",
    description:
      "Fashion Trend All Match Sports Court Shoes For Teen-Agers Girl Casual Thick Sole Women White Running Shoes",
  },
];

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[550px]
       sm:min-h-[650px] bg-gray-100 flex 
       justify-center dark:bg-gray-900
       items-center dark:text-white
       duration-200 "
    >
      {/* Background Pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40
         dark:bg-primary/20 absolute -top-1/2
         right-0 rounded-3xl rotate-45 -z-9"
      ></div>
      {/* Hero Sections */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
           {ImageList.map((data) => (
              <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div
                  className="flex flex-col justify-center
                  gap-4 pt-12 sm:pt-0 text-center 
                  sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <h1
                    className="text-5xl sm:text-6xl 
                  lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p className="text-sm">
                    {data.description}
                  </p>
                  <div>
                    <button
                      className="bg-gradient-to-r 
                     from-primary to-secondary hover:scale-105 
                     duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] 
                         sm:h-[450px] sm:w-[450px] sm:scale-125
                         lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
           ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
