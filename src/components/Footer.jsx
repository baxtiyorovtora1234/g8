import React from 'react'
import location from '../assets/location.png'
import tel from '../assets/tel.png'
import mail from '../assets/mail.png'
import img from '../assets/img.png'
import a from '../assets/a.png'
import houzing from '../assets/hauzing.png'


const Footer = () => {
    return (
        <div>
            <footer className='bg-[#0D263B]  '>
                <div className="w-[1440px] mx-auto pt-[48px] pb-[15px] ">
                    <div className='flex justify-between '>
                        <div>
                            <p className='font-[600] text-[16px] text-[#FFFFFF] '>
                                Contact Us
                            </p>
                            <div className='mt-[32px]  flex gap-[21px] text-center '>
                                <img src={location} alt="" className='w-[18px] h-[18px] ' />
                                <p className='font-[400] text-[14px] text-[#FFFFFF] '>
                                    329 Queensberry Street, North <br />
                                    Melbourne VIC 3051, Australia.
                                </p>
                            </div>
                            <div className='mt-[21px]  flex gap-[21px] text-center '>
                                <img src={tel} alt="" className='w-[18px] h-[18px] ' />
                                <p className='font-[400] text-[14px] text-[#FFFFFF] '>
                                   +998 88 033 45 75
                                </p>

                            </div>
                            <div className='mt-[21px] flex gap-[21px] text-center '>
                                <img src={mail} alt="" className='w-[18px] h-[18px] ' />
                                <p className='font-[400] text-[14px] text-[#FFFFFF] '>
                                    torabaxtiyorov29@gmail.com
                                </p>
                            </div>
                            <img src={img} alt="" className='mt-[33px] ' />
                        </div>
                        <div>
                            <p className='font-[600] text-[16px] text-[#FFFFFF] '>
                                Discover
                            </p>
                            <div className='mt-[32px] '>
                                <p className='font-[400] text-[14px] text-white '>
                                    Chicago
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Los Angeles
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Miami
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    New York
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='font-[600] text-[16px] text-[#FFFFFF] '>
                                Lists by Category
                            </p>
                            <div className='mt-[32px] '>
                                <p className='font-[400] text-[14px] text-white '>
                                    Apartments
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Condos
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Houses
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Offices
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Retail
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Villas
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='font-[600] text-[16px] text-[#FFFFFF] '>
                                Lists by Category
                            </p>
                            <div className='mt-[32px] '>
                                <p className='font-[400] text-[14px] text-white '>
                                    About Us
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Terms & Conditions
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Support Center
                                </p>
                                <p className='font-[400] text-[14px] text-white mt-[20px] '>
                                    Contact Us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t-[1px] border-solid border-[#FFFFFF26] py-[16px]  '>
                    <div className='  flex justify-between items-center w-[1440px] mx-auto '>
                        <img src={houzing} alt="" className='w-[117px] h-[36px] ' />
                        <div className='flex items-center gap-[73px] '>
                            <p className='font-[400] text-[14px] text-white '>
                                Copyright © 2021 CreativeLayers. All Right Reserved.
                            </p>
                            <button className='w-[45px] h-[45px] rounded-[3px] bg-[#0061DF] flex justify-center items-center '>
                                <img src={a} alt="" className='w-[10px] ' />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
