import React, { useContext, } from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import Companies from '../components/Companies';
import Testimonials from '../components/Testimonials';
import CompaniesRegister from '../components/CompaniesRegister';
import { AuthContext } from '../AuthContext/GoogleContext';
import PageTitle from '../components/PageTitle';

const HomePage = () => {

    const { isLoading } = useContext(AuthContext);
    
    return (
        <div className='w-11/12 mx-auto'>
            <PageTitle title={"Home | JOB S Y "} ></PageTitle>
            {
                isLoading ? (<div className="h-screen flex justify-center items-center">
                    <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span>
                </div>) : (
                        <>
<Banner></Banner>
<HowItWorks></HowItWorks>
<Companies></Companies>
<Testimonials></Testimonials>
<CompaniesRegister></CompaniesRegister>
                        
                        </>
                )
            }
        </div>
    );
};

export default HomePage;