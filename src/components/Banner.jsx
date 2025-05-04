import React from 'react';
import bannerImg from "../assets/main.png"
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className='flex pb-28 flex-col-reverse lg:flex-row mt-16 gap-10 lg:gap-24 items-center justify-around'>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
                className="flex-1/2">
                <h1
                    className='text-6xl font-semibold mb-7 text-center'>Join Us and Find your Job</h1>
                <p className='text-lg text-gray-500 font-medium w-9/12 mx-auto text-center'> <span className='font-semibold text-black'>J0BSY</span> <span>
                is a powerful Community to help job seekers manage and organize their job applications with ease. Track opportunities, set reminders, and stay on top of your career goals—all in one place.
                </span> </p>
                <div className="flex justify-center">
                <button className='btn btn-primary px-12 py-6 shadow-xl text-lg font-medium mt-7'>Find Job</button>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
                className="flex-1/2">
                <img src={bannerImg} alt="" className='' />
            </motion.div>
        </div>
    );
};

export default Banner;