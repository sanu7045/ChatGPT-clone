import React, { useState, useEffect } from 'react';
import Processingimage from '../Authenticated/Library/Processingimage';
import ProcessedImage from '../Authenticated/Library/ProcessedImage';

const LoadingImage = () => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 5000);

   
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
       {showSecond ? (
        <ProcessedImage />
      ) : (
        <Processingimage />
      )}
     
    </div>
  );
};

export default LoadingImage;
