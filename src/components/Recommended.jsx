import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import bed from '../assets/bed.png';
import car from '../assets/car.png';
import bath from '../assets/bath.png';
import ruler from '../assets/ruler.png';
import a from '../assets/1.png';
import heart from '../assets/heart.png';

const Recommended = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://houzing-nn46.onrender.com/api/allHouse')
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  const formatPrice = (price) => {
    const num = Number(price);
    return isNaN(num) ? price : num.toLocaleString();
  };

  return (
    <section>
      <div className="w-full max-w-[1440px] mx-auto pt-[96px] pb-[48px] px-4 overflow-hidden">
        <h1 className="font-[600] text-[28px] text-[#0D263B] text-center">
          Recommended
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
            aria-label="Recommended Properties Carousel"
            className="mt-[32px]"
          >
            {houses.map((v) => (
              <SplideSlide key={v._id || v.id}>
                <div className="w-full border border-[#E6E9EC] rounded-[3px] hover:shadow-2xl">
                  <img
                    src={v.images?.[0] || 'https://via.placeholder.com/400x220'}
                    alt={v.title || 'Property'}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="px-[20px] pt-[24px] pb-[16px]">
                    <p className="font-[600] text-[16px] text-[#0D263B]">
                      {v.title || 'No title'}
                    </p>
                    <p className="font-[400] text-[14px] text-[#696969] mt-[4px]">
                      {v.location?.address || 'No address'}
                    </p>
                    <div className="flex justify-between items-center mt-[16px]">
                      <div className="flex flex-col gap-[5px] items-center">
                        <img src={bed} alt="bed" className="w-[19px] h-[19px]" />
                        <p className="font-[400] text-[14px] text-[#696969]">
                          {v.propertyDetails?.bedrooms || 0} Beds
                        </p>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <img src={bath} alt="bath" className="w-[19px] h-[19px]" />
                        <p className="font-[400] text-[14px] text-[#696969]">
                          {v.propertyDetails?.bathrooms || 0} Baths
                        </p>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <img src={car} alt="garage" className="w-[19px] h-[19px]" />
                        <p className="font-[400] text-[14px] text-[#696969]">
                          {v.propertyDetails?.garage || 0} Garage
                        </p>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <img src={ruler} alt="size" className="w-[19px] h-[19px]" />
                        <p className="font-[400] text-[14px] text-[#696969]">
                          {v.propertyDetails?.propertySize || '0 sqft'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[#E6E9EC] py-[13px] px-[20px] flex items-center justify-between">
                    <p className="font-[600] text-[16px] text-[#0D263B]">
                      ${formatPrice(v.propertyDetails?.price || 0)}/mo
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-[#F6F8F9]">
                        <img src={a} alt="icon" />
                      </div>
                      <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-[#F6F8F9]">
                        <img src={heart} alt="favorite" className="w-[15px] h-[15px]" />
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

export default Recommended;
