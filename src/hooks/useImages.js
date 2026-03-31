import { useMemo } from 'react';

const DEFAULT_IMAGES = [
    '/src/assets/image1.jpg', '/src/assets/image2.jpg', '/src/assets/image3.jpg', '/src/assets/image6.jpg', '/src/assets/images 5.jpg',    '/src/assets/images7.jpg', '/src/assets/images8.jpg', '/src/assets/images9.jpg', '/src/assets/images10.jpg', '/src/assets/images.jpg', '/src/assets/images11.jpg', '/src/assets/images12.jpg', '/src/assets/images13.jpg'
];

function useImages(initialPaths) {
  const images = useMemo(() => initialPaths || DEFAULT_IMAGES, [initialPaths]);

  return { images };
}

export default useImages;
