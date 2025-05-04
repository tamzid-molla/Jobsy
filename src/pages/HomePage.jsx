import React from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default HomePage;