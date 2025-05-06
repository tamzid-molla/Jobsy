import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router';

const Company = ({ company }) => {
    const { logo, name,id } = company;
    return (<>
        <Link to={`/details/${id}`}>
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: .99 }}  
                    viewport={{ once: false, amount: 0.2 }}
            className='bg-white p-6 rounded-lg hover:bg-primary hover:text-white'>
            <div className="flex justify-center mb-5">
                  <img src={logo} alt="Logo" className='w-20 h-20 rounded-full bg-secondary p-4'/> 
            </div>
            <h3 className='text-center font-semibold text-2xl'>{name }</h3>
        </motion.div>  </Link> </>
    );
};

export default Company;