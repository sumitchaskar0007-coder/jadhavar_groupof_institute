  // frontend/src/api.js
  import axios from 'axios';

  // For Vite
  const API_URL = import.meta.env.VITE_API_URL;

  const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add token to requests if it exists
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('adminToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor for better error handling
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        console.error('API Error:', error.response.status, error.response.data);
        
        if (error.response.status === 401) {
          localStorage.removeItem('adminToken');
          if (window.location.pathname !== '/admin/login') {
            window.location.href = '/admin/login';
          }
        }
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
      return Promise.reject(error);
    }
  );

  // =============================
  // AUTH APIs
  // =============================
  export const loginAdmin = (credentials) => api.post('/auth/login', credentials);
  export const getAdminProfile = () => api.get('/auth/profile');

  // =============================
  // GALLERY APIs
  // =============================

  // Get all gallery items (public) - FIXED to handle pagination
  // Get all gallery items (public) - NO LIMIT
export const getGalleryImages = async () => {
  try {
    const response = await api.get('/gallery');
    return response;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    throw error;
  }
};

  // Get single gallery item by ID
  export const getGalleryImageById = (id) => api.get(`/gallery/${id}`);

  // Create gallery item from file upload
  export const createGalleryImage = async (data) => {
    try {
      const mediaType = data.get('mediaType');
      const endpoint = mediaType === 'video' ? '/gallery/video' : '/gallery/image';
      
      const response = await api.post(endpoint, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response;
    } catch (error) {
      console.error('Error creating gallery item:', error);
      throw error;
    }
  };

  // Create gallery item from URL
  export const createGalleryImageFromUrl = async (data) => {
    try {
      const transformedData = {
        title: data.title,
        description: data.description,
        category: data.category,
        type: data.mediaType,
        url: data.mediaUrl
      };
      
      const response = await api.post('/gallery/from-url', transformedData);
      return response;
    } catch (error) {
      console.error('Error creating gallery item from URL:', error);
      throw error;
    }
  };

  // Update gallery item
  export const updateGalleryImage = async (id, data) => {
    try {
      const transformedData = {};
      
      if (data.title) transformedData.title = data.title;
      if (data.description) transformedData.description = data.description;
      if (data.category) transformedData.category = data.category;
      if (data.mediaType) transformedData.type = data.mediaType;
      if (data.mediaUrl) transformedData.url = data.mediaUrl;
      
      const response = await api.put(`/gallery/${id}`, transformedData);
      return response;
    } catch (error) {
      console.error('Error updating gallery item:', error);
      throw error;
    }
  };

  // Delete gallery item
  export const deleteGalleryImage = async (id) => {
    try {
      const response = await api.delete(`/gallery/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      throw error;
    }
  };

  // Get gallery categories
  export const getGalleryCategories = () => api.get('/gallery/categories');

  // Get admin gallery items (with filters)
  export const getAdminGalleryItems = (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    return api.get(`/gallery/admin/all${params ? `?${params}` : ''}`);
  };

  // =============================
  // ANNOUNCEMENT APIs
  // =============================
  export const getAnnouncements = () => api.get('/announcements');
  export const getAnnouncementById = (id) => api.get(`/announcements/${id}`);
  export const createAnnouncement = (data) => api.post('/announcements', data);
  export const updateAnnouncement = (id, data) => api.put(`/announcements/${id}`, data);
  export const deleteAnnouncement = (id) => api.delete(`/announcements/${id}`);

  // =============================
  // NOTICE APIs
  // =============================
  export const getNotices = () => api.get('/notices');
  export const getNoticeById = (id) => api.get(`/notices/${id}`);
  export const createNotice = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'file') {
        if (data[key]) formData.append('file', data[key]);
      } else if (key === 'attachments' && Array.isArray(data[key])) {
        data[key].forEach(file => formData.append('attachments', file));
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.post('/notices', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  };
  export const updateNotice = (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'file') {
        if (data[key]) formData.append('file', data[key]);
      } else if (key === 'attachments' && Array.isArray(data[key])) {
        data[key].forEach(file => formData.append('attachments', file));
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.put(`/notices/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  };
  export const deleteNotice = (id) => api.delete(`/notices/${id}`);

  // =============================
  // BLOG APIs
  // =============================
  export const getBlogs = () => api.get('/blogs');
  export const getBlogById = (id) => api.get(`/blogs/${id}`);
  export const createBlog = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'coverImage') {
        if (data[key]) formData.append('coverImage', data[key]);
      } else if (key === 'images' && Array.isArray(data[key])) {
        data[key].forEach(img => formData.append('images', img));
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.post('/blogs', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  };
  export const updateBlog = (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'coverImage') {
        if (data[key]) formData.append('coverImage', data[key]);
      } else if (key === 'images' && Array.isArray(data[key])) {
        data[key].forEach(img => formData.append('images', img));
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.put(`/blogs/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  };
  export const deleteBlog = (id) => api.delete(`/blogs/${id}`);

  // =============================
  // CAREER APIs
  // =============================
  export const getCareers = () => api.get('/careers');
  export const getCareerById = (id) => api.get(`/careers/${id}`);
  export const createCareer = (data) => api.post('/careers', data);
  export const updateCareer = (id, data) => api.put(`/careers/${id}`, data);
  export const deleteCareer = (id) => api.delete(`/careers/${id}`);

  // =============================
  // UTILITY FUNCTIONS
  // =============================

  export const getResponseList = (response, key) => {
    const payload = response?.data;

    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.[key])) return payload[key];
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.data?.[key])) return payload.data[key];
    if (Array.isArray(payload?.results)) return payload.results;
    if (Array.isArray(payload?.items)) return payload.items;

    return [];
  };

  export const downloadFile = (url, filename) => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`
      }
    })
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(objectUrl);
      })
      .catch(error => console.error('Download error:', error));
  };

  export const isValidFileType = (file, allowedTypes) => {
    return allowedTypes.includes(file.type);
  };

  export const isValidFileSize = (file, maxSizeMB) => {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    return file.size <= maxSizeBytes;
  };

  export default api;