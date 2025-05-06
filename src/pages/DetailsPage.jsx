import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaMapMarkerAlt, FaGlobe, FaIndustry, FaTimes } from 'react-icons/fa';
import { Dialog, Transition,TransitionChild,DialogTitle  } from '@headlessui/react';

const DetailsPage = () => {
    const [company, setCompany] = useState({});
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        document.title = `details/${id}`; 
        const finder = data.find(find => parseInt(find.id)===parseInt(id));
        setCompany(finder || {});
    }, [id, data])


    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };
   console.log(company.name);
    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            {/* Company Details Section */}
            {company ? <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    <div className="p-6">
                        <div className="flex items-center mb-6">
                            <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                className="w-24 h-24 rounded-full mr-4 object-cover"
                            />
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
                                <p className="text-gray-600">{company.industry}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-700">
                                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                                {company.location}
                            </p>
                            <p className="flex items-center text-gray-700">
                                <FaGlobe className="mr-2 text-blue-500" />
                                <a
                                    href={company.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {company.website}
                                </a>
                            </p>
                            <p className="flex items-center text-gray-700">
                                <FaIndustry className="mr-2 text-blue-500" />
                                {company.industry}
                            </p>
                        </div>
                    </div>
                </div>:""
            }

            {/* Jobs List Section */}
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Jobs</h2>
                <div className="space-y-4">
                    {company.jobs && company.jobs.length > 0 ? (
                        company.jobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg transition-shadow"
                            >
                                <div className="mb-4 sm:mb-0">
                                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                                    <p className="text-gray-600">{job.jobType}</p>
                                    <p className="text-gray-600">{job.salary}</p>
                                </div>
                                <button
                                    onClick={() => openModal(job)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Details
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No jobs available at the moment.</p>
                    )}
                </div>
            </div>

            {/* Job Details Modal */}
            <Transition appear show={isModalOpen} as={React.Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <TransitionChild
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 relative">
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                                    >
                                        <FaTimes size={24} />
                                    </button>
                                    {selectedJob && (
                                        <div>
                                            <img
                                                src={selectedJob.bannerImage}
                                                alt={`${selectedJob.title} banner`}
                                                className="w-full h-48 object-cover rounded-md mb-4"
                                            />
                                            <DialogTitle as="h3" className="text-2xl font-bold text-gray-900 mb-4">
                                                {selectedJob.title}
                                            </DialogTitle>
                                            <div className="space-y-4">
                                                <p className="text-gray-700">
                                                    <span className="font-semibold">Location:</span> {selectedJob.location}
                                                </p>
                                                <p className="text-gray-700">
                                                    <span className="font-semibold">Salary:</span> {selectedJob.salary}
                                                </p>
                                                <p className="text-gray-700">
                                                    <span className="font-semibold">Job Type:</span> {selectedJob.jobType}
                                                </p>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900">Description</h4>
                                                    <p className="text-gray-600">{selectedJob.description}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900">Requirements</h4>
                                                    <ul className="list-disc pl-5 text-gray-600">
                                                        {selectedJob.requirements.map((req, index) => (
                                                            <li key={index}>{req}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex justify-end space-x-4">
                                                <a
                                                    href={company.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                                                >
                                                    Apply Now
                                                </a>
                                                <button
                                                    onClick={closeModal}
                                                    className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default DetailsPage;