import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getCareers, getCareerById } from '../api';

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [filter, setFilter] = useState({
    type: 'all',
    department: 'all'
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await getCareers();
      setCareers(response.data);
    } catch (error) {
      toast.error('Failed to load career positions');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (id) => {
    try {
      const response = await getCareerById(id);
      setSelectedCareer(response.data);
    } catch (error) {
      toast.error('Failed to load career details');
    }
  };

  const departments = ['all', ...new Set(careers.map(c => c.department))];
  const types = ['all', 'full-time', 'part-time', 'contract', 'internship'];

  const filteredCareers = careers.filter(career => {
    if (filter.type !== 'all' && career.type !== filter.type) return false;
    if (filter.department !== 'all' && career.department !== filter.department) return false;
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading career opportunities...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
          <p className="text-xl text-gray-600">Join our team and make a difference</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select
                value={filter.department}
                onChange={(e) => setFilter({ ...filter, department: e.target.value })}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept.charAt(0).toUpperCase() + dept.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select
                value={filter.type}
                onChange={(e) => setFilter({ ...filter, type: e.target.value })}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredCareers.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No career positions available matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCareers.map((career) => (
              <CareerCard
                key={career._id}
                career={career}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {/* Career Details Modal */}
        {selectedCareer && (
          <CareerModal
            career={selectedCareer}
            onClose={() => setSelectedCareer(null)}
          />
        )}
      </div>
    </div>
  );
};

const CareerCard = ({ career, onViewDetails }) => {
  const isDeadlinePassed = career.applicationDeadline && new Date(career.applicationDeadline) < new Date();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{career.title}</h2>
        <span className={`px-3 py-1 rounded-full text-sm ${
          isDeadlinePassed
            ? 'bg-red-100 text-red-800'
            : 'bg-green-100 text-green-800'
        }`}>
          {isDeadlinePassed ? 'Closed' : 'Open'}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {career.department}
        </div>
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {career.location}
        </div>
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {career.type.charAt(0).toUpperCase() + career.type.slice(1).replace('-', ' ')}
        </div>
        {career.salary && (
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {career.salary}
          </div>
        )}
      </div>

      {career.applicationDeadline && (
        <div className="mb-4 text-sm text-gray-500">
          <span className="font-medium">Deadline:</span>{' '}
          {new Date(career.applicationDeadline).toLocaleDateString()}
        </div>
      )}

      <button
        onClick={() => onViewDetails(career._id)}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        View Details
      </button>
    </div>
  );
};

const CareerModal = ({ career, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">{career.title}</h2>
          <p className="text-gray-600">{career.department} • {career.location}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <span className="text-sm text-gray-600">Job Type</span>
          <p className="font-semibold">{career.type.charAt(0).toUpperCase() + career.type.slice(1).replace('-', ' ')}</p>
        </div>
        {career.salary && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-sm text-gray-600">Salary</span>
            <p className="font-semibold">{career.salary}</p>
          </div>
        )}
        {career.applicationDeadline && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-sm text-gray-600">Application Deadline</span>
            <p className="font-semibold">{new Date(career.applicationDeadline).toLocaleDateString()}</p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Job Description</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{career.description}</p>
        </div>

        {career.responsibilities && career.responsibilities.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2">
              {career.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {career.requirements && career.requirements.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-3">Requirements</h3>
            <ul className="list-disc list-inside space-y-2">
              {career.requirements.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t">
        <button
          onClick={() => window.location.href = `mailto:careers@college.edu?subject=Application for ${career.title}`}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Apply Now
        </button>
      </div>
    </div>
  </div>
);

export default Career;