import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // default Splide style

import bed from '../assets/bed.png';
import car from '../assets/car.png';
import bath from '../assets/bath.png';
import ruler from '../assets/ruler.png';
import a from '../assets/1.png';
import heart from '../assets/heart.png';

const Recent = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/all-house')
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="w-full max-w-[1440px] mx-auto pt-[96px] pb-[48px] px-4 overflow-hidden">
        <h1 className="font-[600] text-[28px] text-[#0D263B] text-center">
          Recent Properties for Rent
        </h1>
        <p className="font-[400] text-[16px] text-[#696969] mt-[8px] text-center">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-[100px]">
            <div className="loader"></div>
          </div>
        ) : (
          <Splide
            options={{
              type: 'loop',
              perPage: 3,
              perMove: 1,
              gap: '20px',
              autoplay: true,
              pauseOnHover: true,
              arrows: true,
              pagination: true,
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
            aria-label="Recent Properties Carousel"
            className="mt-[32px]"
          >
            {houses.map((v) => (
              <SplideSlide key={v.id}>
                <div className="w-[100%] border border-[#E6E9EC] rounded-[3px] hover:shadow-2xl">
                  <img
                    src={v.img}
                    alt={v.title}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="px-[20px] pt-[24px] pb-[16px]">
                    <p className="font-[600] text-[16px] text-[#0D263B]">
                      {v.title}
                    </p>
                    <p className="font-[400] text-[14px] text-[#696969] mt-[4px]">
                      {v.street}
                    </p>
                    <div className="flex justify-between items-center mt-[16px]">
                      <div className="flex flex-col gap-[5px] items-center">
                        <img src={bed} alt="" className="w-[19px] h-[19px]" />
                        <p className="font-[400] text-[14px] text-[#696969]">
                          {v.propertyDetails.bedrooms} Beds
                        </p>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <img src={bath} alt="" className="w-[19px] h-[19px]" />
                        <p className="font-[400] text-[14px] text-[#696969]">
                          {v.propertyDetails.bathrooms} Baths
                        </p>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <img src={car} alt="" className="w-[19px] h-[19px]" />
                        <p className="font-[400] text-[14px] text-[#696969]">
                          {v.propertyDetails.garage} Garage
                        </p>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <img src={ruler} alt="" className="w-[19px] h-[19px]" />
                        <p className="font-[400] text-[14px] text-[#696969]">
                          {v.propertyDetails.propertySize}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[#E6E9EC] py-[13px] px-[20px] flex items-center justify-between">
                    <p className="font-[600] text-[16px] text-[#0D263B]">
                      ${v.propertyDetails.price}/mo
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-[#F6F8F9]">
                        <img src={a} alt="" />
                      </div>
                      <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-[#F6F8F9]">
                        <img src={heart} alt="" className="w-[15px] h-[15px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </section>
  );
};

export default Recent;
