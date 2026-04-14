import React, { useState, useEffect } from 'react';
import Processingimage from './Processingimage';
import ProcessedImage from './ProcessedImage';

const LoadingImage = () => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 1000);


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
