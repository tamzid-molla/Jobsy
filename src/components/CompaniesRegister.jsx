import React, { use, useEffect, useState } from 'react';
import { CompaniesDataContext } from '../companiesContext/CompaniesContext';
import { CiLocationOn } from "react-icons/ci";
import { motion } from 'framer-motion';


const CompaniesRegister = () => {
    const { companies } = use(CompaniesDataContext);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const filteringCompany = companies.filter(company => (company.jobs.length > 2))
        setJobs(filteringCompany);
    }, [companies])
    return (
<div className="pb-40 mt-56">
            <h2 className='text-3xl font-bold my-3'>Top Company Registered</h2>
            <p>Some of the companies we have helped recruit excellent applicants over the years.</p>
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className='grid grid-cols-1 mt-16  md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {jobs.map(job => <div key={job.id} className=''>
                
                <div className="flex flex-col gap-4 bg-secondary shadow-lg p-5">
                    <div className="flex justify-center mt-10">
                        <img src={job.logo} className='w-32 h-32 rounded-full p-1 bg-primary' alt="" />
                    </div>
                    <div className="">
                        <h4 className='text-center text-2xl font-bold text-primary'>{job.name}</h4>
                        <p className='flex items-center justify-center my-4 gap-2 text-lg text-gray-600'> <CiLocationOn></CiLocationOn> {job.location}</p>
                        <button className='w-full btn bg-white text-primary mt-8 rounded-lg py-6 hover:text-white hover:bg-primary text-xl font-semibold'>{job.jobs.length } Open Position</button>
                    </div>
               </div>
           </div> )}
        </motion.div>
            
</div>
        
    );
};

export default CompaniesRegister;