import React from 'react';

const Vermont = () => {
    return (
        <div>
            <section>
                <div className="relative w-full h-[500px]">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-[url('https://i0.wp.com/luxx.miami/wp-content/uploads/2022/06/35-5.jpg?w=900&ssl=1')] bg-cover bg-center"></div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <p className='font-[600] text-[28px] text-white text-center'>
                            Vermont Farmhouse With Antique Jail Is <br />
                            the Week's Most Popular Home
                        </p>
                        <button className='font-[400] text-[14px] text-white py-[12px] px-[51px] bg-[#0061DF] rounded-[2px] mt-[48px]'>
                            Read more
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vermont;
