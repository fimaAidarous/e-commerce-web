import React from "react";
import image1 from "../../assets/Fall Winter Clothing Women Long Coat.png";
import image3 from "../../assets/Hero/Platform Sneakers.png";
import image4 from "../../assets/Products/Long Coat Windproof Jacket for Men.png";
import image5 from "../../assets/TopProducts/Handbags Last Design Womens Bags For Business.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Long Coat For Custom Color Women Breathable",
    description:
      " Windproof Fall Winter Clothing Women Long Coat For Custom Color Women Breathable Long Coat With Zip-Up",
  },
  {
    id: 3,
    img: image3,
    title: "Teen-Agers Girl Casual Thick Sole ",
    description:
      "Fashion Trend All Match Sports Court Shoes For Teen-Agers Girl Casual Thick Sole Women White Running Shoes",
  },
  {
    id: 4,
    img: image4,
    title: " Black Wool Coat Mens Wool Long Trench",
    description:
      "Mens Long Wool Winter Coat Black Wool Coat Mens Wool Long Trench Coat",
  },
  {
    id: 5,
    img: image5,
    title: " Bag woman china High Quality Fashion ",
    description:
      "Wholesale long Bag woman china High Quality Fashion Long Solid Color Womens",
  },
];

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

const Hero = ({ handleOrderPopup }) => {
  return (
    <div
      className="relative overflow-hidden min-h-[550px]
       sm:min-h-[650px] bg-gray-100 flex 
       justify-center dark:bg-gray-900
       items-center dark:text-white
       duration-200"
    >
      {/* Background Pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40
       dark:bg-primary/20 absolute -top-1/2
       right-0 rounded-3xl rotate-45 -z-9"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
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
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl 
                  lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
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
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10 mt-8"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] 
                         sm:h-[450px] sm:w-[450px] sm:scale-125
                         lg:scale-120 object-contain mx-auto"
                         style={{ backgroundColor: "transparent" }}
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
