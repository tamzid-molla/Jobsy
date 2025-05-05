import React from 'react';
import clint01 from "../assets/Clint/clint-1.jpg"
import clint02 from "../assets/Clint/clint-2.jpg"
import clint03 from "../assets/Clint/clint-3.jpg"
import clint05 from "../assets/Clint/clint-5.jpg"
import { motion } from 'framer-motion';

const Testimonials = () => {
   
    return (
        <div className="mt-32 mb-20 ">
             <h2 className=' text-center text-4xl font-bold mb-16'>Our Happy Customers</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-4'>
                <motion.div

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
                className="bg-white border border-gray-300 hover:border-none hover:shadow-2xl p-10 rounded-lg">
            <div className="flex py-7 justify-center">
                <img src={clint05} alt="" className='w-28 h-28 bg-primary p-1 rounded-full'/>
            </div>
            <div className="">
                <p className='text-center italic text-lg font-medium'>“Job Tracker helped me organize my applications and follow-ups effortlessly. I landed my dream job in just a few weeks because I was finally staying on top of things.”
                </p>
                <p className='mt-20 text-xl font-bold text-primary text-center'>— Emma Stone</p>
            </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-10 border border-gray-300 hover:border-none hover:shadow-2xl rounded-lg">
            <div className="flex py-7 justify-center">
                <img src={clint01} alt="" className='w-28 h-28 bg-primary p-1 rounded-full'/>
            </div>
            <div className="">
                <p className='italic text-center text-lg font-medium'>“Before Job Tracker, I was constantly losing track of interview dates. Now I have everything in one place — resumes, statuses, contacts. It’s a lifesaver.”
                </p>
                <p className='mt-20 text-xl font-bold text-primary text-center'>— Noah Carter</p>
            </div>
            </motion.div>


            <motion.div
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                className="bg-white border border-gray-300 hover:border-none hover:shadow-2xl p-10 rounded-lg">
            <div className="flex py-7 justify-center">
                <img src={clint02} alt="" className='w-28 h-28 bg-primary p-1 rounded-full'/>
            </div>
            <div className="">
                <p className='text-center text-lg font-medium italic'>“The interface is user-friendly and doesn’t overwhelm me. I especially like the progress tracking and reminders feature.”
                </p>
                <p className='mt-20 text-xl font-bold text-primary text-center'>— Olivia Green</p>
            </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
                className="bg-white border border-gray-300 hover:border-none hover:shadow-2xl p-10 rounded-lg">
            <div className="flex py-7 justify-center">
                <img src={clint03} alt="" className='w-28 h-28 bg-primary p-1 rounded-full'/>
            </div>
            <div className="">
                <p className='text-center text-lg font-medium italic'>“As a recent graduate, I didn’t know where to start. Job Tracker made it easy to plan my applications and stay motivated throughout the process.”
                </p>
                <p className='mt-20 text-xl font-bold text-primary text-center'>— Liam Parker</p>
            </div>
            </motion.div>
        </div>
        </div>
    );
};

export default Testimonials;