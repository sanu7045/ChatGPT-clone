import { useState, useEffect } from 'react';

export const useImage = () => {
  const key = 'chatgpt_gallery_images';
  const getImages = () => JSON.parse(localStorage.getItem(key) || '[]');
  const [images, setImages] = useState(getImages);

  useEffect(() => {
    const sync = () => setImages(getImages());
    window.addEventListener('gallery_sync', sync);
    return () => window.removeEventListener('gallery_sync', sync);
  }, []);

  const addImage = (file) => new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => {
      const data = [...getImages(), reader.result]; // always get fresh data
      localStorage.setItem(key, JSON.stringify(data));
      setImages(data);
      window.dispatchEvent(new Event('gallery_sync'));
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });

  return { images, addImage };
};
