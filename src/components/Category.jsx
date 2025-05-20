import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import homeIcon from '../assets/home.png';
import bgHome from '../assets/bghome.png';
import apartmentIcon from '../assets/apartmentLogo.png';
import bgApartment from '../assets/aparment.png';
import officeBg from '../assets/officeBg.jpg';
import office from '../assets/office.png';
import bgVilla from '../assets/bgVilla.jpg';
import villa from '../assets/villa.png';

const Category = () => {
  const categories = [
    { title: 'House', icon: homeIcon, bg: bgHome },
    { title: 'Apartment', icon: apartmentIcon, bg: bgApartment },
    { title: 'Office', icon: office, bg: officeBg },
    { title: 'Villa', icon: villa, bg: bgVilla },
  ];

  return (
    <section className="py-[96px] w-full max-w-[1440px] mx-auto px-4">
      <div className="text-center">
        <p className="font-semibold text-[28px] text-[#0D263B]">Category</p>
        <p className="font-normal text-[16px] text-[#696969] mt-2">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>

        <div className="mt-10">
          <Splide
            aria-label="Property Categories"
            options={{
              type: 'loop',
              perPage: 4,
              perMove: 1,
              gap: '1.5rem',
              arrows: true,
              pagination: true,
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
          >
            {categories.map((item, idx) => (
              <SplideSlide
                key={idx}
                tabIndex={0} // keyboard focusable
                aria-label={`Category: ${item.title}`}
              >
                <div className="relative w-full max-w-[280px] h-[350px] rounded-[8px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto cursor-pointer">
                  <img
                    src={item.bg}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-center items-center text-white px-6">
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-12 h-12 mb-4"
                      loading="lazy"
                    />
                    <span className="text-lg font-semibold tracking-wide">{item.title}</span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Category;
