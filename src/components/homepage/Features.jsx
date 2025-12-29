import React from 'react';
import { FaCalculator } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RiExchangeFundsFill } from "react-icons/ri";
import { PiMoneyWavy } from "react-icons/pi";
import { IoIosPersonAdd } from "react-icons/io";
const Features = () => {
    return (
        <div className='mt-10 flex flex-col items-center gap-4 lg:flex-row lg:justify-around border py-8 rounded-2xl bg-slate-50 border-slate-400'>
            <div className='flex items-center gap-2 text-xl'><FaCalculator className='text-2xl text-purple-500' /> 36 Months EMI</div>
            <div className='flex items-center gap-2 text-xl'><TbTruckDelivery className='text-4xl text-green-500'/> Faster Home Delivery</div>
            <div className='flex items-center gap-2 text-xl'><RiExchangeFundsFill className='text-3xl text-yellow-500'/>Exchange Facility</div>
            <div className='flex items-center gap-2 text-xl'><PiMoneyWavy className='text-3xl text-blue-400'/> Best Price</div>
            <div className='flex items-center gap-2 text-xl'><IoIosPersonAdd className='text-3xl text-red-500'/>After Sales Service</div>
        </div>
    );
};

export default Features;