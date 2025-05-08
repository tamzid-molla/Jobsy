import React, { createContext, useState } from 'react';

export const CompaniesDataContext = createContext();

 const CompaniesContext = ({ children }) => {
     const [companies, setCompanies] = useState([]);


     
     
    const companiesData = {
        companies,
        setCompanies,
     }
     
    return (
        <CompaniesDataContext value={companiesData}>
            {children}
        </CompaniesDataContext>
    );
};

export default CompaniesContext;