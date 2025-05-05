import React from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import Companies from '../components/Companies';
import Testimonials from '../components/Testimonials';
import CompaniesRegister from '../components/CompaniesRegister';

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Companies></Companies>
            <Testimonials></Testimonials>
            <CompaniesRegister></CompaniesRegister>
        </div>
    );
};

export default HomePage;