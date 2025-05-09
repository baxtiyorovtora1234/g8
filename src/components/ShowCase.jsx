import React, { useEffect, useState } from 'react';
import bed from '../assets/bed.png';
import car from '../assets/car.png';
import bath from '../assets/bath.png';
import ruler from '../assets/ruler.png';

const ShowCase = () => {
  const [house, setHouse] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-house")
      .then(res => res.json())
      .then(data => {
        const selectedHouse = data.find(h => h.id === 1);
        setHouse(selectedHouse);
      });
  }, []);

  if (!house) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${house.img})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center pt-[134px] px-[20px]">
        <h1 className="font-[700] text-[44px]">{house.title}</h1>
        <p className="mt-[8px] font-[400] text-[16px]">
          {house.location.address}, {house.location.city}, {house.location.state}
        </p>
        <div className='flex justify-center gap-[30px] mt-[32px] flex-wrap'>
          <div className='flex flex-col items-center'>
            <img src={bed} alt="bed" className='w-[19px] h-[19px]' />
            <p className='font-[400] text-[14px] text-white mt-[5px]'>
              {house.propertyDetails.bedrooms} Beds
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={bath} alt="bath" className='w-[19px] h-[19px]' />
            <p className='font-[400] text-[14px] text-white mt-[5px]'>
              {house.propertyDetails.bathrooms} Baths
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={car} alt="garage" className='w-[19px] h-[19px]' />
            <p className='font-[400] text-[14px] text-white mt-[5px]'>
              {house.propertyDetails.garage} Garage
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={ruler} alt="size" className='w-[19px] h-[19px]' />
            <p className='font-[400] text-[14px] text-white mt-[5px]'>
              {house.propertyDetails.propertySize}
            </p>
          </div>
        </div>
        <p className='mt-[24px] font-[600] text-[28px] text-white '>
          ${house.propertyDetails.price}/mo
        </p>
        <div className="mt-[48px] flex justify-center  ">
          <button className='w-[180px] h-[44px] border-[1px] border-solid border-white 
            rounded-[2px] text-[14px] font-[400] texr-white flex justify-center items-center '>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
