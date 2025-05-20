import React, { useEffect, useState } from 'react';
import bed from '../assets/bed.png';
import car from '../assets/car.png';
import bath from '../assets/bath.png';
import ruler from '../assets/ruler.png';

const ShowCase = () => {
  const [house, setHouse] = useState(null);

  useEffect(() => {
    fetch("https://houzing-nn46.onrender.com/api/allHouse")
      .then(res => res.json())
      .then(data => {
        if (data && data.length) {
          setHouse(data[0]); // Faqat birinchi uyni olamiz
        }
      })
      .catch(error => {
        console.error("Error fetching house data:", error);
      });
  }, []);

  if (!house) {
    return <div className="h-[100vh] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div
      className="relative h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(https://avatars.mds.yandex.net/get-altay/10095165/2a000001916bf32d53e7e432370181fcca9d/XXXL)` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-white text-center pt-[134px] px-[20px]">
        <h1 className="font-[700] text-[44px]">
          {house?.title || 'Loading...'}
        </h1>
        <p className="mt-[8px] font-[400] text-[16px]">
          {house?.location?.address}, {house?.location?.city}, {house?.location?.state}
        </p>
        <div className="flex justify-center gap-[30px] mt-[32px] flex-wrap">
          <div className="flex flex-col items-center">
            <img src={bed} alt="bed" className="w-[19px] h-[19px]" />
            <p className="font-[400] text-[14px] mt-[5px]">
              {house?.propertyDetails?.bedrooms || house?.aboutHouse?.furniture || 0} Beds
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={bath} alt="bath" className="w-[19px] h-[19px]" />
            <p className="font-[400] text-[14px] mt-[5px]">
              {house?.propertyDetails?.bathrooms || house?.aboutHouse?.baths || 0} Baths
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={car} alt="garage" className="w-[19px] h-[19px]" />
            <p className="font-[400] text-[14px] mt-[5px]">
              {house?.propertyDetails?.garage || house?.aboutHouse?.garage || 0} Garage
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={ruler} alt="size" className="w-[19px] h-[19px]" />
            <p className="font-[400] text-[14px] mt-[5px]">
              {house?.propertyDetails?.propertySize || (house?.aboutHouse?.sotix ? `${house.aboutHouse.sotix} sqft` : '0 sqft')}
            </p>
          </div>
        </div>
        <p className="mt-[24px] font-[600] text-[28px]">
          ${house?.propertyDetails?.price || 0}
          {house?.propertyDetails?.propertyStatus === "for sale" ? "" : "/mo"}
        </p>
        <div className="mt-[48px] flex justify-center">
          <button className="w-[180px] h-[44px] border border-white rounded-[2px] text-[14px] font-[400] flex justify-center items-center">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;