import React, { useContext, useEffect,  } from 'react';
import Company from './Company';
import { CompaniesDataContext } from '../companiesContext/CompaniesContext';

const Companies = () => {
    const { companies, setCompanies } = useContext(CompaniesDataContext);

    useEffect(() => {
        fetch("/jobs.json").then(res => res.json()).then(data => setCompanies(data));
    }, [])
    return (
        <div className='mt-32 bg-secondary p-10 pb-20 rounded-xl mb-20'>
            <h1 className='text-3xl font-bold text-center'>Available Company</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-7">
                    {
                        companies.map(company=> <Company key={company.id} company={company} ></Company>)
                    }
            </div>
        </div>
    );
};

export default Companies;