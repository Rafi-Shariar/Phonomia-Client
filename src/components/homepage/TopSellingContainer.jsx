import React from 'react';
import TopSellingCard from './TopSellingCard';

const TopSellingContainer = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-semibold 
            bg-linear-to-r from-orange-600 to-yellow-300 bg-clip-text text-transparent
            '>Most Selling Phones</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
                <TopSellingCard></TopSellingCard>
                <TopSellingCard></TopSellingCard>
                <TopSellingCard></TopSellingCard>
                <TopSellingCard></TopSellingCard>
                <TopSellingCard></TopSellingCard>
                <TopSellingCard></TopSellingCard>
                <TopSellingCard></TopSellingCard>
                <TopSellingCard></TopSellingCard>
            </div>
        </div>
    );
};

export default TopSellingContainer;