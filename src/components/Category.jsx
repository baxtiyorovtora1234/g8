import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import homeIcon from '../assets/home.png';
import apartmentIcon from '../assets/apartmentLogo.png';
import office from '../assets/office.png';
import villa from '../assets/villa.png';

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      });
  }, []);

  const logos = [
    { logo: homeIcon },
    { logo: apartmentIcon },
    { logo: office },
    { logo: villa },
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
            {category.map((item, idx) => (
              <SplideSlide key={item.id}>
                <div className="relative w-[280px] h-[350px] rounded-[8px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto">
                  <img
                    src={item.imag}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                    <img src={logos[idx % logos.length].logo} className="w-12 h-12 mb-2" alt="icon" />
                    <span className="text-lg font-medium">{item.title}</span>
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
