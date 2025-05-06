import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import Companies from '../components/Companies';
import Testimonials from '../components/Testimonials';
import CompaniesRegister from '../components/CompaniesRegister';
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
    useEffect(() => {
        document.title = "home"; 
    }, [])
    
    return (
        <div className='w-11/12 mx-auto'>
            <ToastContainer></ToastContainer>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Companies></Companies>
            <Testimonials></Testimonials>
            <CompaniesRegister></CompaniesRegister>
        </div>
    );
};

export default HomePage;