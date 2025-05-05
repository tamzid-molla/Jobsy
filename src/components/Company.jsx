import { motion } from 'framer-motion';
import React from 'react';

const Company = ({ company }) => {
    const { logo, name } = company;
    return (
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: .99 }}  
                    viewport={{ once: false, amount: 0.2 }}
            className='bg-white p-6 rounded-lg hover:bg-primary hover:text-white'>
            <div className="flex justify-center mb-5">
                <img src={logo} alt="Logo" className='w-20 h-20 rounded-full bg-secondary p-4 cursor-pointer'/>
            </div>
            <h3 className='text-center font-semibold text-2xl'>{name }</h3>
        </motion.div>
    );
};

export default Company;