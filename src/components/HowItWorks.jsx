import React from 'react';
import { FaUserPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";


import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-3xl font-bold'>Find Jobs in 4 Easy Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .8 }}     
                    className="shadow-lg px-5 py-8 bg-secondary rounded-lg">
                <div className="flex justify-center p-10">
                <FaUserPlus size={50} className=' text-primary'/>
                </div>
                <div className="">
                    <h3 className='text-center font-bold text-2xl mb-3'>Create a Profile</h3>
                    <p className='text-center text-[16px] font-semibold'>Start by registering on the platform and logging into your account. Once you're in, take a few moments to build a strong and complete profile. Adding your skills, experience, and a clear bio not only helps personalize your job search but also builds trust with potential employers who will view your applications. A well-prepared profile increases your chances of getting noticed.</p>
                </div>
                </motion.div>
                

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .8 }}     
                    className="shadow-lg px-5 py-8 bg-secondary rounded-lg">
                <div className="flex justify-center p-10">
                <IoSearch size={50} className=' text-primary'/>
                </div>
                <div className="">
                    <h3 className='text-center font-bold text-2xl mb-3'>Browse Jobs</h3>
                    <p className='text-center text-[16px] font-semibold'>After setting up your profile, you can browse through a wide range of job listings posted by various companies. Use filters such as location, job type, experience level, or industry to narrow down your search. Our platform helps you discover jobs that align with your qualifications and interests so that you can focus on opportunities that truly matter to you.</p>
                </div>
                </motion.div>
                

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .8 }}     
                    className="shadow-lg px-5 py-8 bg-secondary rounded-lg">
                <div className="flex justify-center p-10">
                <FaRegPaperPlane size={50} className=' text-primary'/>
                </div>
                <div className="">
                    <h3 className='text-center font-bold text-2xl mb-3'>Apply Easily</h3>
                    <p className='text-center text-[16px] font-semibold'>When you find a job that fits your goals and preferences, simply click and apply. You can manage your applications directly from your dashboard. All your applied jobs are tracked in one place, making it easier to stay on top of deadlines, interview calls, or further communication from companies.</p>
                </div>
                </motion.div>
                

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .8 }}     
                    className="shadow-lg px-5 py-8 bg-secondary rounded-lg">
                <div className="flex justify-center p-10">
                <FaSyncAlt size={50} className=' text-primary'/>
                </div>
                <div className="">
                    <h3 className='text-center font-bold text-2xl mb-3'>Update Status</h3>
                    <p className='text-center text-[16px] font-semibold'>As your job application progresses—whether you're shortlisted, attending interviews, or get hired—you can update the status of each job. This keeps your job search organized and gives you a clear overview of your journey. Tracking your progress helps reduce confusion and allows you to follow up effectively when needed.</p>
                </div>
            </motion.div>
            </div>
        </div>
    );
};

export default HowItWorks;