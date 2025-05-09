import React, { useState } from 'react'
import hauzing from '../assets/hauzing.png'
import dom from '../assets/dom.png'
import search from '../assets/search.svg'
import setting from '../assets/setting.png'

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div>
            <div className='bg-[#0D263B]'>
                <div className='w-[1440px] mx-auto'>
                    <nav className='flex justify-between items-center py-[14px]'>
                        <img src={hauzing} alt="Logo" />
                        <ul className='flex items-center gap-[64px]'>
                            <li><a href="#" className="font-[400] text-[16px] text-white">Home</a></li>
                            <li><a href="#" className="font-[400] text-[16px] text-white">Properties</a></li>
                            <li><a href="#" className="font-[400] text-[16px] text-white">Contacts</a></li>
                        </ul>
                        <button className='font-[400] text-[14px] text-white w-[120px] h-[44px] flex justify-center items-center
                    rounded-[2px] border-[1px] border-solid border-white'>
                            Login
                        </button>
                    </nav>
                </div>
            </div>

            <div className="w-[1440px] mx-auto ">
                <div className="flex items-center justify-center gap-4 py-4">
                    <div className="flex items-center gap-2 w-[829px] border border-[#E6E9EC] rounded-[2px] h-[44px] pl-[15px]">
                        <img src={dom} alt="Home" />
                        <input
                            type="text"
                            placeholder="Enter an address, neighborhood, city, or ZIP code"
                            className="font-[400] text-[14px] text-[#0D263B] w-full border-none outline-none h-full"
                        />
                    </div>

                    {/* Advanced Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 border border-[#E6E9EC] rounded-[2px] h-[44px] px-4 font-[400] text-[14px] text-[#0D263B]"
                    >
                        <img src={setting} alt="Settings" />
                        Advanced
                    </button>

                    {/* Search Button */}
                    <button
                        className="flex items-center gap-2 bg-[#0061DF] text-white rounded-[2px] border border-[#0061DF] h-[44px] px-6 font-[400] text-[14px]"
                    >
                        <img src={search} alt="Search" />
                        Search
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-gray-100 "
                    onClick={() => setIsModalOpen(false)} // Modalni foniga bosganda yopiladi
                >
                    <div
                        className="bg-white rounded-lg shadow p-6 relative flex flex-col "
                        onClick={(e) => e.stopPropagation()} // Modal ichiga bosganda yopilmasligi uchun
                    >

                        <div className="space-y-4 text-gray-600 w-[920px] ">
                            <div>
                                <p className='font-[600] text-[16px] text-[#0D263B] '>
                                    Address
                                </p>
                                <div className='flex gap-[20px] items-center mt-[10px] '>
                                    <input type="text" placeholder='Country'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                    <input type="text" placeholder='Region'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                    <input type="text" placeholder='City'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                    <input type="text" placeholder='Zip code'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                </div>
                            </div>
                            <div className='mt-[20px] '>
                                <p className='font-[600] text-[16px] text-[#0D263B] '>
                                    Apartment info
                                </p>
                                <div className='flex gap-[20px] items-center mt-[10px] '>
                                    <input type="text" placeholder='Rooms'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                    <input type="text" placeholder='Size'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                    <input type="text" placeholder='Sort'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                </div>
                            </div>
                            <div className='mt-[20px] '>
                                <p className='font-[600] text-[16px] text-[#0D263B] '>
                                    Price
                                </p>
                                <div className='flex gap-[20px] items-center mt-[10px] '>
                                    <input type="text" placeholder='Min price'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                    <input type="text" placeholder='Max price'
                                        className='font-[400] text-[14px] text-[#0D263B] pl-[16px] py-[6px] w-[200px] rounded-[2px]  border-solid border-[1px] border-[#E6E9EC] ' />
                                </div>
                            </div>

                        <div className=" flex justify-end items-center gap-[20px]  ">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-[128px] py-[12px] hover:bg-[#0061DF] hover:text-white border-[1px] border-solid border-black
                             hover:border-[#0061DF] rounded-[2px] font-[400] text-[14px]  "
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-[128px] py-[12px] hover:bg-[#0061DF] hover:text-white border-[1px] border-solid border-black
                            hover:border-[#0061DF] rounded-[2px] font-[400] text-[14px]  "
                            >
                                Submit
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar
