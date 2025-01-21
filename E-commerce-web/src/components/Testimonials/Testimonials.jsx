import React from "react";
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        title: "Stylish and Trendy Shoes",
        text: "I recently purchased the Korean trendy breathable chunky sneakers, and I must say they exceeded my expectations! The design is modern and stylish, perfect for both casual outings and light workouts. The breathability of these shoes keeps my feet comfortable even after hours of use, and I’ve received numerous compliments. Highly recommended for anyone looking for a blend of comfort and fashion.",
        img: "https://tse1.mm.bing.net/th?id=OIP.1OYxH8VmxFIMRdnbkpEmWQHaEo&pid=Api&P=0&h=220"
      },
      {
        id: 2,
        name: "Satya Nadella",
        title: "Innovative and Durable Sneakers",
        text: "The thick sole sports sneakers are incredible! I appreciate how durable they feel without compromising on comfort. The cushioning is excellent, making them ideal for long walks or even standing for extended periods. Plus, the black color gives them a premium look that matches any outfit. It’s been a fantastic addition to my shoe collection.",
        img: "https://tse3.mm.bing.net/th?id=OIP.kQxnQm1y_Wc8ubiVHZWAOAHaEK&pid=Api&P=0&h=220"
      },
      {
        id: 3,
        name: "Virat Kohli",
        title: "Perfect for Sports and Activities",
        text: "These thick sole sports sneakers in white are a game changer! As someone who’s always on the move, I need shoes that can keep up, and these do the job perfectly. They provide excellent grip, are super lightweight, and look fantastic. Whether I’m hitting the gym or running errands, these sneakers have become my go-to choice. Absolutely love them!",
        img: "https://tse3.mm.bing.net/th?id=OIP.Gamt1WUeWFRXVkrNjnA2EQHaGl&pid=Api&P=0&h=220"
      },
      {
        id: 4,
        name: "Sachin Tendulkar",
        title: "Comfortable Long Jackets",
        text: "The long coat windproof jacket is just what I needed for the colder seasons. It’s warm, windproof, and incredibly comfortable to wear. I’ve worn it during chilly morning walks, and it keeps me perfectly insulated without feeling bulky. The sleek black design is timeless and works well for both casual and semi-formal occasions. Highly impressed with the quality!",
        img: "https://tse3.mm.bing.net/th?id=OIP.dl9wR1KN4i9AP1DnkBeh6AHaE7&pid=Api&P=0&h=220"
      },
      {
        id: 5,
        name: "Harun",
        title: "Practical and Stylish Coats",
        text: "I bought the jacket with a removable hood, and it’s quickly become my favorite piece of clothing. The versatility of having a removable hood is fantastic—it’s like having two jackets in one. It’s lightweight yet warm enough for mild winter days. The black color makes it easy to pair with any outfit, and the overall fit is just perfect. A great investment!",
        img: "https://tse2.mm.bing.net/th?id=OIP._ZSxx3FTloQ3elc-NW-hmQHaE8&pid=Api&P=0&h=220"
      }
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div
          className="text-center mb-10 max-w-[600px]
              mx-auto"
        >
          <p data-oas="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-oas="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-oas="fade-up" className="text-xs text-gray-400">
            Lorem ipsum!
          </p>
        </div>
        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 
                      shadow-lg py-8 px-6 mx-4 rounded-xl
                       dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div
                    className="flex flex-col items-center
                         gap-4"
                  >
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1
                        className="text-xl font-bold
                          text-black/80 dark:text-light"
                      >
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
