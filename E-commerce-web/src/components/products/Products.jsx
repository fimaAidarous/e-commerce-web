import React from "react";
import image1 from "../../assets/Products/shoes for women new styles ladies shoe.png";
import image2 from "../../assets/Products/thick sole sports sneakers for women.png";
import image3 from "../../assets/Products/thick sole sports sneakers.png";
import image4 from "../../assets/Products/Long Coat Windproof Jacket for Men.png";
import image5 from "../../assets/Products/Jacket with Removable Hooded.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "korean trendy breathable chunky",
    rating: 8.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: image2,
    title: "thick sole sports sneakers for women",
    rating: 10.0,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 3,
    img: image3,
    title: "thick sole sports sneakers for women",
    rating: 9.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 4,
    img: image4,
    title: "Long Coat Windproof Jacket for Men",
    rating: 5.0,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 5,
    img: image5,
    title: "Jacket with Removable Hooded",
    rating: 7.0,
    color: "Black",
    aosDelay: "0",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div
          className="text-center mb-10 max-w-[600px]
              mx-auto"
        >
          <p data-oas="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-oas="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-oas="fade-up" className="text-xs text-gray-400">
            Lorem ipsum!
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3
                  md:grid-cols-4 lg:grid-cols-5 place-items-center
                   gap-5"
          >
            {/* card section  */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[210px] w-[150px] 
                  object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-purple-950" />
                    <span>{data.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
