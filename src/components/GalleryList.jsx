import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.MODE === 'production'
  ? 'https://law-5yers.onrender.com/api'
  : 'https://law-5yeas.onrender.com/api';

const GalleryList = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/gallery`)
      .then(res => setGallery(res.data));
  }, []);

  return (
    <div>
      {gallery.map((g) => (
        <img
          key={g._id}
          src={`${API_URL.replace('/api', '')}/uploads/${g.image}`}
          alt=""
          width="150"
        />
      ))}
    </div>
  );
};

export default GalleryList;
