import React from 'react'
import profil from '../assets/profil.png'

const Testimonials = () => {
    return (
        <div>
            <section className='bg-[#F5F7FC] '>
                <div className='w-[1440px] mx-auto pb-[137px] pt-[48px] '>
                    <h3 className='font-[600] text-[28px] text-[#0D263B] text-center  '>
                        Testimonials
                    </h3>
                    <p className='font-[400] text-[16px] text-[#696969] mt-[8px] text-center '>
                        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                    </p>
                    <div className='mt-[32px] flex justify-between items-center '>
                        <div className='shadow-xl  w-[380px] h-[197px] px-[48px] pt-[40px] pb-[61px] bg-[#FFFFFF] rounded-[3px] '>
                            <p className='text-center font-[400] text-[16px] text-[#696969] '>
                                “ I believe in lifelong learning and <br />
                                Skola is a great place to learn from <br />
                                experts. I've learned a lot and <br />
                                recommend it to all my friends “
                            </p>
                            <div className='translate-y-[30px] '>
                                <img src={profil} alt="" className='mx-auto  ' />
                                <p className='font-[600] text-[16px] text-[#0D263B] mt-[16px] text-center '>
                                    Marvin McKinney
                                </p>
                                <p className='font-[400] text-[16px] text-[#696969] mt-[4px] text-center '>
                                    Designer
                                </p>
                            </div>
                        </div>
                        <div className='shadow-xl w-[380px] h-[197px] px-[48px] pt-[40px] pb-[61px] bg-[#FFFFFF] rounded-[3px] '>
                            <p className='text-center font-[400] text-[16px] text-[#696969] '>
                                “ I believe in lifelong learning and <br />
                                Skola is a great place to learn from <br />
                                experts. I've learned a lot and <br />
                                recommend it to all my friends “
                            </p>
                            <div className='translate-y-[30px] '>
                                <img src={profil} alt="" className='mx-auto  ' />
                                <p className='font-[600] text-[16px] text-[#0D263B] mt-[16px] text-center '>
                                    Marvin McKinney
                                </p>
                                <p className='font-[400] text-[16px] text-[#696969] mt-[4px] text-center '>
                                    Designer
                                </p>
                            </div>
                        </div>
                        <div className='shadow-xl w-[380px] h-[197px] px-[48px] pt-[40px] pb-[61px] bg-[#FFFFFF] rounded-[3px] '>
                            <p className='text-center font-[400] text-[16px] text-[#696969] '>
                                “ I believe in lifelong learning and <br />
                                Skola is a great place to learn from <br />
                                experts. I've learned a lot and <br />
                                recommend it to all my friends “
                            </p>
                            <div className='translate-y-[30px] '>
                                <img src={profil} alt="" className='mx-auto  ' />
                                <p className='font-[600] text-[16px] text-[#0D263B] mt-[16px] text-center '>
                                    Marvin McKinney
                                </p>
                                <p className='font-[400] text-[16px] text-[#696969] mt-[4px] text-center '>
                                    Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
