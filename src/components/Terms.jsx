
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaFileContract, FaUserCheck, FaShieldAlt, FaLock, FaExclamationTriangle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Terms = () => {
  // Animation controls for different sections
  const introControls = useAnimation();
  const responsibilitiesControls = useAnimation();
  const usageControls = useAnimation();
  const privacyControls = useAnimation();
  const disclaimersControls = useAnimation();

  // Intersection observers for each section
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [responsibilitiesRef, responsibilitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [usageRef, usageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [privacyRef, privacyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [disclaimersRef, disclaimersInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (introInView) introControls.start({ opacity: 1, y: 0 });
    if (responsibilitiesInView) responsibilitiesControls.start({ opacity: 1, y: 0 });
    if (usageInView) usageControls.start({ opacity: 1, y: 0 });
    if (privacyInView) privacyControls.start({ opacity: 1, y: 0 });
    if (disclaimersInView) disclaimersControls.start({ opacity: 1, y: 0 });
  }, [
    introInView,
    responsibilitiesInView,
    usageInView,
    privacyInView,
    disclaimersInView,
    introControls,
    responsibilitiesControls,
    usageControls,
    privacyControls,
    disclaimersControls,
  ]);

  return (
    <div className="bg-gray-100">
      {/* Introduction Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            ref={introRef}
            initial={{ opacity: 0, y: 50 }}
            animate={introControls}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <FaFileContract className="text-6xl mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Welcome to JobFinder! These Terms of Service govern your use of our platform, including our website, mobile apps, and related services. By accessing or using JobFinder, you agree to comply with these terms. Please read them carefully.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* User Responsibilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={responsibilitiesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={responsibilitiesControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            User Responsibilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={responsibilitiesControls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-lg shadow-sm p-6"
            >
              <FaUserCheck className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Accurate Information</h3>
              <p className="text-gray-600">
                You agree to provide accurate, current, and complete information when creating an account or applying for jobs. Misrepresentation of qualifications or personal details is strictly prohibited.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={responsibilitiesControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-lg shadow-sm p-6"
            >
              <FaShieldAlt className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Lawful Use</h3>
              <p className="text-gray-600">
                You must use JobFinder in compliance with all applicable laws and regulations. Any unlawful activities, including harassment, fraud, or posting illegal content, will result in account termination.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Usage Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={usageRef}
            initial={{ opacity: 0, y: 50 }}
            animate={usageControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Service Usage
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={usageControls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Management</h3>
              <p className="text-gray-600">
                You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately of any unauthorized access or security breaches. JobFinder is not liable for losses resulting from unauthorized use.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={usageControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Job Applications</h3>
              <p className="text-gray-600">
                JobFinder facilitates connections between job seekers and employers. We do not guarantee job offers or employment outcomes. All applications are subject to the employer’s hiring processes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={usageControls}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Content Ownership</h3>
              <p className="text-gray-600">
                Any content you upload, such as resumes or profile information, remains your property. By uploading, you grant JobFinder a non-exclusive, worldwide license to display and share this content with potential employers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={privacyRef}
            initial={{ opacity: 0, y: 50 }}
            animate={privacyControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Privacy
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={privacyControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-lg shadow-sm p-8 text-center"
          >
            <FaLock className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data. By using JobFinder, you consent to our data practices as described in the Privacy Policy.
            </p>
            <a
              href="/privacy"
              className="inline-block mt-6 text-blue-500 font-semibold hover:underline"
            >
              Read Our Privacy Policy
            </a>
          </motion.div>
        </div>
      </section>

      {/* Disclaimers Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={disclaimersRef}
            initial={{ opacity: 0, y: 50 }}
            animate={disclaimersControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Disclaimers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={disclaimersControls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white text-black bg-opacity-10 rounded-lg p-6"
            >
              <FaExclamationTriangle className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-3">No Warranty</h3>
              <p>
                JobFinder is provided “as is” without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of job listings or employer information.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={disclaimersControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white text-black bg-opacity-10 rounded-lg p-6"
            >
              <FaExclamationTriangle className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Limitation of Liability</h3>
              <p>
                JobFinder is not liable for any damages arising from your use of the platform, including but not limited to loss of employment opportunities or data breaches caused by third parties.
              </p>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={disclaimersControls}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-8 max-w-3xl mx-auto"
          >
            For any questions or concerns regarding these Terms of Service, please contact our support team. We reserve the right to update these terms at any time, with changes effective upon posting.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Terms;