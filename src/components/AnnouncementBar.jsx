import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AnnouncementBar.css";

const API_URL = import.meta.env.MODE === 'production'
  ? 'https://law-5yers.onrender.com/api'
  : 'https://law-5yeas.onrender.com/api';

export default function AnnouncementBar() {
  const [ann, setAnn] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/announcements/`)
      .then(res => setAnn(res.data))
      .catch(err => {
        // Error fetching announcements, continue without them
      });
  }, []);

  if (ann.length === 0) return null;

  return (
    <div className="announcement-wrapper">
      <div className="announcement-slider">
        {ann.map(item => (
          <div key={item.id} className="announcement-item">
            <strong>{item.title}:</strong> {item.message}
          </div>
        ))}
      </div>
    </div>
  );
}
