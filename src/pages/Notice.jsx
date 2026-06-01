import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getNotices } from '../api';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await getNotices();
      setNotices(response.data);
      
      // Extract unique categories
      const uniqueCategories = ['all', ...new Set(response.data.map(notice => notice.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      toast.error('Failed to load notices');
    } finally {
      setLoading(false);
    }
  };

  const filteredNotices = selectedCategory === 'all'
    ? notices
    : notices.filter(notice => notice.category === selectedCategory);

  const importantNotices = filteredNotices.filter(notice => notice.isImportant);
  const regularNotices = filteredNotices.filter(notice => !notice.isImportant);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading notices...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notices</h1>
          <p className="text-xl text-gray-600">Important information and updates</p>
        </div>

        {/* Category Filter */}
        {categories.length > 1 && (
          <div className="flex justify-center mb-8 space-x-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize mb-2 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {filteredNotices.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No notices available in this category.
          </div>
        ) : (
          <div className="space-y-6">
            {/* Important Notices */}
            {importantNotices.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-4">Important Notices</h2>
                <div className="space-y-4">
                  {importantNotices.map((notice) => (
                    <NoticeCard
                      key={notice._id}
                      notice={notice}
                      onClick={() => setSelectedNotice(notice)}
                      isImportant
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Regular Notices */}
            {regularNotices.length > 0 && (
              <div className={importantNotices.length > 0 ? 'mt-8' : ''}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">General Notices</h2>
                <div className="space-y-4">
                  {regularNotices.map((notice) => (
                    <NoticeCard
                      key={notice._id}
                      notice={notice}
                      onClick={() => setSelectedNotice(notice)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal for full notice */}
        {selectedNotice && (
          <NoticeModal
            notice={selectedNotice}
            onClose={() => setSelectedNotice(null)}
          />
        )}
      </div>
    </div>
  );
};

const NoticeCard = ({ notice, onClick, isImportant }) => (
  <div
    className={`bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow ${
      isImportant ? 'border-l-4 border-red-500' : ''
    }`}
    onClick={onClick}
  >
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-semibold text-gray-900">{notice.title}</h3>
      {isImportant && (
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          Important
        </span>
      )}
    </div>
    <p className="mt-2 text-gray-600 line-clamp-2">{notice.content}</p>
    <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
      <span>Category: {notice.category}</span>
      <span>Posted: {new Date(notice.createdAt).toLocaleDateString()}</span>
    </div>
  </div>
);

const NoticeModal = ({ notice, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold">{notice.title}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </div>
      {notice.isImportant && (
        <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm mb-4">
          Important
        </span>
      )}
      <div className="prose max-w-none">
        <p className="whitespace-pre-wrap">{notice.content}</p>
      </div>
      {notice.fileUrl && (
        <div className="mt-4">
          <a
            href={notice.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            </svg>
            Download Attachment
          </a>
        </div>
      )}
      <div className="mt-6 text-sm text-gray-500">
        <div>Category: {notice.category}</div>
        <div>Posted on: {new Date(notice.createdAt).toLocaleString()}</div>
      </div>
    </div>
  </div>
);

export default Notice;