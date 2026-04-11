import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usePromptImage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(() => localStorage.getItem('prompt_image') || '');

  const handleImageClick = (imageBase64) => {
    localStorage.setItem('prompt_image', imageBase64);
    setSelectedImage(imageBase64);
    navigate('/share');
  };

  
  return { selectedImage, handleImageClick };
};

export default usePromptImage;