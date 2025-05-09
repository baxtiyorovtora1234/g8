import React from 'react'
import smile from '../assets/smile.png'
import house from '../assets/house.png'
import phone from '../assets/phone.png'
import locatsiya from '../assets/locatsiya.png'

const WhyChooseUs = () => {
    return (
        <div>
            <section className=' bg-[#F5F7FC] '>
                <div className='w-[1440px] mx-auto py-[48px]'>
                    <p className='font-[600] text-[28px] text-[#0D263B] text-center '>
                        Why Choose Us?
                    </p>
                    <p className='font-[400] text-[16px] text-[#696969] text-center mt-[8px] '   >
                        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                    </p>
                    <div className='flex justify-between py-[40px] '>
                        <div>
                            <img src={smile} alt="" className='mx-auto ' />
                            <p className='font-[600] text-[18px] text-[#0D263B] mt-[24px] text-center '>
                                Trusted By Thousands
                            </p>
                            <p className='font-[400] text-[16px] text-[#696969] text-center '>
                                With over 1 million+ homes <br />
                                for sale available on the <br />
                                website, Trulia can match <br />
                                you with a house you will <br />
                                want to call home.
                            </p>
                        </div>
                        <div>
                            <img src={house} alt="" className='mx-auto '/>
                            <p className='font-[600] text-[18px] text-[#0D263B] mt-[24px] text-center '>
                                Wide Renge Of Properties
                            </p>
                            <p className='font-[400] text-[16px] text-[#696969] text-center '>
                                With over 1 million+ homes <br />
                                for sale available on the <br />
                                website, Trulia can match <br />
                                you with a house you will <br />
                                want to call home.
                            </p>
                        </div>
                        <div>
                            <img src={phone} alt="" className='mx-auto '/>
                            <p className='font-[600] text-[18px] text-[#0D263B] mt-[24px] text-center '>
                                Financing Made Easy
                            </p>
                            <p className='font-[400] text-[16px] text-[#696969] text-center '>
                                With over 1 million+ homes <br />
                                for sale available on the <br />
                                website, Trulia can match <br />
                                you with a house you will <br />
                                want to call home.
                            </p>
                        </div>
                        <div>
                            <img src={locatsiya} alt="" className='mx-auto '/>
                            <p className='font-[600] text-[18px] text-[#0D263B] mt-[24px] text-center '>
                                See Neighborhoods
                            </p>
                            <p className='font-[400] text-[16px] text-[#696969] text-center '>
                                With over 1 million+ homes <br />
                                for sale available on the <br />
                                website, Trulia can match <br />
                                you with a house you will <br />
                                want to call home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUs
