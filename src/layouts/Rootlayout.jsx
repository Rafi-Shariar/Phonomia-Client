import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const Rootlayout = () => {
    return (
       <section>
        <nav>
            <Navbar></Navbar>
        </nav>
        <section className='max-w-7xl mx-auto min-h-screen'>
            <Outlet></Outlet>
        </section>

        <footer className='mt-10'>
            <Footer></Footer>
        </footer>
       </section>
    );
};

export default Rootlayout;