import React from 'react';
import Banner from '../../components/homepage/Banner';
import Features from '../../components/homepage/Features';
import SearchBar from '../../components/homepage/SearchBar';
import TopSellingContainer from '../../components/homepage/TopSellingContainer';
import BrandsLogoContainer from '../../components/homepage/BrandsLogoContainer';

const Homepage = () => {
    return (
        <div className='px-2'>
            <Banner></Banner>
            <Features></Features>
            <SearchBar></SearchBar>
            <TopSellingContainer></TopSellingContainer>
            <BrandsLogoContainer></BrandsLogoContainer>
        </div>
    );
};

export default Homepage;