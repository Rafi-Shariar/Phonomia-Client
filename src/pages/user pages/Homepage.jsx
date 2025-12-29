import React from 'react';
import Banner from '../../components/homepage/Banner';
import Features from '../../components/homepage/Features';

const Homepage = () => {
    return (
        <div className='px-2'>
            <Banner></Banner>
            <Features></Features>
        </div>
    );
};

export default Homepage;