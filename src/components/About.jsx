import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaGlobe, FaHistory, FaTrophy } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import jobfinder from "../assets/job-finder.png"
import { Link } from 'react-router';

const About = () => {
  // Animation controls for different sections
  const heroControls = useAnimation();
  const missionControls = useAnimation();
  const teamControls = useAnimation();
  const visionControls = useAnimation();
  const historyControls = useAnimation();
  const achievementsControls = useAnimation();

  // Intersection observers for each section
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [historyRef, historyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [achievementsRef, achievementsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Trigger animations when sections come into view
  useEffect(() => {
    document.title = `about`; 
    if (heroInView) heroControls.start({ opacity: 1, y: 0 });
    if (missionInView) missionControls.start({ opacity: 1, y: 0 });
    if (teamInView) teamControls.start({ opacity: 1, y: 0 });
    if (visionInView) visionControls.start({ opacity: 1, y: 0 });
    if (historyInView) historyControls.start({ opacity: 1, y: 0 });
    if (achievementsInView) achievementsControls.start({ opacity: 1, y: 0 });
  }, [
    heroInView,
    missionInView,
    teamInView,
    visionInView,
    historyInView,
    achievementsInView,
    heroControls,
    missionControls,
    teamControls,
    visionControls,
    historyControls,
    achievementsControls,
  ]);

  // Team members data
  const teamMembers = [
    {
      




      name: 'Jane Doe',
      role: 'CEO & Founder',
      image: 'https://i.ibb.co.com/nqvt4GgZ/image.jpg',
      bio: 'With over 15 years in the recruitment industry, Jane founded JOBSY to revolutionize job searching.',
    },
    {
      name: 'John Smith',
      role: 'CTO',
      image: 'https://i.ibb.co.com/wN3j6dqn/CTO.jpg',
      bio: 'John leads our tech team, ensuring our platform is cutting-edge and user-friendly.',
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Designer',
      image: 'https://i.ibb.co.com/qz2Dn3Q/Lead-Designer.jpg',
      bio: 'Emily crafts visually stunning and intuitive designs for an exceptional user experience.',
    },
    {
      name: 'Michael Brown',
      role: 'Marketing Director',
      image: 'https://i.ibb.co.com/TBFJ6V8C/director.jpg',
      bio: 'Michael drives our brand’s outreach, connecting us with job seekers and employers worldwide.',
    },
    {
      name: 'Sarah Davis',
      role: 'HR Specialist',
      image: 'https://i.ibb.co.com/ynRRfdB7/HR.jpg',
      bio: 'Sarah ensures our platform supports diverse hiring needs with inclusivity at its core.',
    },
  ];

  // Achievements data
  const achievements = [
    { title: '100K+ Users', description: 'Over 100,000 job seekers trust JOBSY for their career journey.' },
    { title: '500+ Companies', description: 'Partnered with top-tier companies across various industries.' },
    { title: 'Award-Winning Platform', description: 'Recognized for innovation in job search technology in 2024.' },
    { title: 'Global Reach', description: 'Serving job seekers and employers in over 50 countries.' },
  ];

  return (
    <div className="bg-gradient-to-br  from-blue-600 to-purple-700 text-white py-24">
      {/* Hero Section */}
      <section className="w-11/12 mx-auto pb-20">
        <div className="px-6 flex flex-col-reverse justify-center lg:justify-around gap-10 lg:flex-row items-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, x: -50 }}
            animate={heroControls}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-8 mx-auto pl-10 lg:mb-0"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Discover JOBSY
            </h1>
            <p className="text-lg mb-6 max-w-lg">
              At JOBSY, we’re dedicated to bridging the gap between talented professionals and innovative companies. Our platform empowers career growth through seamless connections, cutting-edge technology, and a passion for opportunity.
            </p>
            <Link
              href="/companies"
              className="inline-block bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Opportunities
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroControls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center w-full"
          >
            <img
              src={jobfinder}
              alt="About JobFinder"
              className="rounded-xl w-full -ml-20 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={missionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={missionControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Our Mission
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionControls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <FaRocket className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Empower Careers
              </h3>
              <p className="text-gray-600">
                We provide job seekers with tools and opportunities to find roles that align with their skills, passions, and career goals, fostering personal and professional growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Build Communities
              </h3>
              <p className="text-gray-600">
                Our platform creates vibrant communities where employers and candidates collaborate, share insights, and build lasting professional relationships.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionControls}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <FaLightbulb className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Innovate Solutions
              </h3>
              <p className="text-gray-600">
                We leverage advanced technology to deliver intuitive, efficient, and inclusive solutions for job searching and talent acquisition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="hidden md:block py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          ref={historyRef}
          initial={{ opacity: 0, y: 50 }}
          animate={historyControls}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full hidden md:block"></div>
          <div className="space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={historyControls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right mb-4 md:mb-0 p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">2018</h3>
                <p className="text-gray-600 text-sm lg:text-base">JOBSY was founded with a vision to simplify job searches.</p>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 flex justify-center md:justify-start">
                <FaHistory className="text-2xl sm:text-3xl text-blue-500" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={historyControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col md:flex-row-reverse items-center"
            >
              <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">2020</h3>
                <p className="text-gray-600 text-sm lg:text-base">Launched our mobile app, reaching 50,000 users.</p>
              </div>
              <div className="w-full md:w-1/2 md:pr-8 flex justify-center md:justify-end">
                <FaHistory className="text-2xl sm:text-3xl text-blue-500" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={historyControls}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right mb-4 md:mb-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">2023</h3>
                <p className="text-gray-600 text-sm lg:text-base">Expanded globally, partnering with 300+ companies.</p>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 flex justify-center md:justify-start">
                <FaHistory className="text-2xl sm:text-3xl text-blue-500" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={historyControls}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col md:flex-row-reverse items-center"
            >
              <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">2025</h3>
                <p className="text-gray-600 text-sm lg:text-base">Serving over 100,000 users and recognized as a leader in job search innovation.</p>
              </div>
              <div className="w-full md:w-1/2 md:pr-8 flex justify-center md:justify-end">
                <FaHistory className="text-2xl sm:text-3xl text-blue-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={teamRef}
            initial={{ opacity: 0, y: 50 }}
            animate={teamControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={teamControls}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                className="bg-gray-50 rounded-lg shadow-md p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={achievementsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={achievementsControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={achievementsControls}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <FaTrophy className="text-4xl text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            ref={visionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={visionControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Our Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={visionControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mb-8"
          >
            We envision a world where every individual finds meaningful work that fuels their passion, and every company discovers exceptional talent to drive innovation. JOBSY is committed to creating a global platform that fosters opportunity, diversity, and growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visionControls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaGlobe className="text-7xl mx-auto" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;