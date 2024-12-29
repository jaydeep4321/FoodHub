import React from 'react';
import img1 from '../img/food1.jpg';
import img2 from '../img/food2.jpg';
import img3 from '../img/food3.jpg';
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Carousel } from '@material-tailwind/react';

function Home() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:h-[calc(100vh-90px)] items-center justify-between home flex flex-col-reverse mt-5 lg:mt-0 gap-4 lg:gap-0 overflow-scroll">
        <div className="flex flex-col gap-4 md:gap-8 items-center lg:items-start md:ms-7">
          <p className="text-black text-4xl md:text-7xl font-bold text-center lg:text-left ">
            Satisfy your cravings.
          </p>
          <p className="text-lg md:text-3xl font-medium text-center lg:text-left w-[80%]">
            Discover the best food and drinks near you - Order Online!
          </p>
          <NavLink to="restaurants">
            <button className="hover:shadow-xl transition-all p-2 px-4 bg-orange-600 rounded w-[fit-content] text-white text-sm md:text-base font-bold">
              Explore your nearby Restaurants.
            </button>
          </NavLink>
        </div>

        <div className="flex lg:justify-end items-center justify-center">
          {/* <img src={img} className="lg:w-[85%] w-[90%]" /> */}
          <Carousel className="rounded-xl">
            <div className="relative w-full pb-[56.25%]">
              <img
                src={img1}
                alt="image 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full pb-[56.25%]">
              <img
                src={img2}
                alt="image 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full pb-[56.25%]">
              <img
                src={img3}
                alt="image 3"
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
          </Carousel>
        </div>

        <div className="absolute flex gap-3 bottom-3 left-1/2 transform -translate-x-1/2 transition-all cursor-pointer z-50 text-xl ">
          <a href="https://github.com/jaydeep4321" target="_blank">
            <BsGithub className="hover:scale-125 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/jaydeepvaghela/" target="_blank">
            <BsLinkedin className="hover:scale-125 transition-all" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
