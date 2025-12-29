import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';

const Rootlayout = () => {
    return (
       <section>
        <nav>
            <Navbar></Navbar>
        </nav>
        <section className='max-w-7xl mx-auto min-h-screen'>
            <Outlet></Outlet>
        </section>

        <footer>
            Footer
        </footer>
       </section>
    );
};

export default Rootlayout;