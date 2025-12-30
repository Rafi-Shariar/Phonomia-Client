import React from 'react';
import Banner from '../../components/homepage/Banner';
import Features from '../../components/homepage/Features';
import SearchBar from '../../components/homepage/SearchBar';
import TopSellingContainer from '../../components/homepage/TopSellingContainer';

const Homepage = () => {
    return (
        <div className='px-2'>
            <Banner></Banner>
            <Features></Features>
            <SearchBar></SearchBar>
            <TopSellingContainer></TopSellingContainer>
        </div>
    );
};

export default Homepage;