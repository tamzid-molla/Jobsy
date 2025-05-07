import React, { useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router';
import PageTitle from '../components/PageTitle';

const CommingSoon = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });


  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      rotate: 360,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  const navigate = useNavigate()

  return (
    <>
      <PageTitle title={"ComingSoon | JOB S Y "} ></PageTitle>
    <motion.section
      
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="min-h-screen flex items-center justify-center bg-primary text-white py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={iconVariants}
          className="inline-block mb-6"
        >
          <FaRocket className="text-6xl text-white" />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          We're working hard to bring you something amazing. Stay tuned for the big reveal!
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
                  <Link
            className=" bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors duration-300"
          >
            Notify Me
          </Link>
          <button className=' bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors duration-300 ml-7' onClick={()=>navigate(-1)}>Go Back</button>
        </motion.div>
      </div>
      </motion.section>
      </>
  );
};

export default CommingSoon;