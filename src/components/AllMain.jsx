import React from 'react'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import Recent from './Recent'
import Vermont from './Vermont'
import Category from './Category'
import Recommended from './Recommended'

const AllMain = () => {
    return (
        <div>
            <main>

                <Recommended />
                <WhyChooseUs />
                <Category />
                <Vermont />
                <Recent />
                <Testimonials />
            </main>
        </div>
    )
}

export default AllMain
