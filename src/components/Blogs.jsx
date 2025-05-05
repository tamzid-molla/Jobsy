
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaBlog, FaTags, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Blogs = () => {
  // Animation controls for different sections
  const heroControls = useAnimation();
  const blogsControls = useAnimation();
  const categoriesControls = useAnimation();
  const ctaControls = useAnimation();

  // Intersection observers for each section
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [blogsRef, blogsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) heroControls.start({ opacity: 1, y: 0 });
    if (blogsInView) blogsControls.start({ opacity: 1, y: 0 });
    if (categoriesInView) categoriesControls.start({ opacity: 1, y: 0 });
    if (ctaInView) ctaControls.start({ opacity: 1, y: 0 });
  }, [
    heroInView,
    blogsInView,
    categoriesInView,
    ctaInView,
    heroControls,
    blogsControls,
    categoriesControls,
    ctaControls,
  ]);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Tips for Crafting a Winning Resume',
      excerpt: 'Learn how to make your resume stand out with these expert tips on formatting, keywords, and more.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      category: 'Career Advice',
    },
    {
      id: 2,
      title: 'The Future of Remote Work in 2025',
      excerpt: 'Explore the trends shaping remote work and how job seekers can adapt to new opportunities.',
      image: 'https://images.unsplash.com/photo-1598257006458-087b6878a0ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      category: 'Industry Trends',
    },
    {
      id: 3,
      title: 'How to Ace Your Next Job Interview',
      excerpt: 'From preparation to follow-up, discover strategies to impress hiring managers and land the job.',
      image: 'https://images.unsplash.com/photo-1516321310764-959200eb3e35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      category: 'Career Advice',
    },
    {
      id: 4,
      title: 'Navigating Career Changes with Confidence',
      excerpt: 'Transitioning to a new industry? Here’s how to leverage your skills and embrace change.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d8ea9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      category: 'Career Growth',
    },
  ];

  // Blog categories
  const categories = ['Career Advice', 'Industry Trends', 'Career Growth', 'Job Search Tips', 'Workplace Culture'];

  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter blog posts based on selected category
  const filteredBlogs = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(blog => blog.category === selectedCategory);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, x: -50 }}
            animate={heroControls}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              JobFinder Blog
            </h1>
            <p className="text-lg mb-6 max-w-lg">
              Stay informed with the latest career advice, industry trends, and job search tips. Our blog is your go-to resource for navigating the ever-changing world of work.
            </p>
            <a
              href="#blogs"
              className="inline-block bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Blogs
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroControls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1516321310764-959200eb3e35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Team collaborating"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blogs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={blogsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={blogsControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Latest Posts
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                animate={blogsControls}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-blue-500 font-semibold">{blog.category}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center text-blue-500 font-semibold hover:underline"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            ref={categoriesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={categoriesControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Browse by Category
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={categoriesControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => setSelectedCategory('All')}
              className={`py-2 px-6 rounded-lg font-semibold transition ${
                selectedCategory === 'All'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`py-2 px-6 rounded-lg font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={categoriesControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <FaTags className="text-5xl text-blue-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            ref={ctaRef}
            initial={{ opacity: 0, y: 50 }}
            animate={ctaControls}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={ctaControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mb-8"
          >
            Subscribe to our newsletter for the latest career tips, industry insights, and JobFinder updates. Join our community of job seekers and professionals today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="flex max-w-md wdbb-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-3 px-4 rounded-l-lg text-gray-800 flex-grow focus:outline-none"
              />
              <button className="bg-white text-blue-600 py-3 px-6 rounded-r-lg font-semibold hover:bg-gray-100 transition flex items-center">
                Subscribe <FaEnvelope className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;