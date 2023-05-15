import { useEffect, useState } from 'react';

const useMainPortfolioImages = (images: string[]) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [width, setWidth] = useState({ clientWidth: 0, scrollWidth: 0 });

  useEffect(() => {
    const div = document.getElementById('my-div');
    if (div) {
      setCurrentImage(0);
      div.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
      setWidth({ clientWidth: div.clientWidth, scrollWidth: div.scrollWidth });
    }
  }, [images]);

  const upOrDown = (scroll: boolean) => {
    if (scroll) {
      if (currentImage * 400 + width.clientWidth > width.scrollWidth) {
        setCurrentImage(0);
      } else {
        setCurrentImage(
          (prev) =>
            prev + width.clientWidth / (width.scrollWidth / images.length)
        );
      }
    } else {
      if (currentImage === 0) {
        setCurrentImage(images.length - 1);
      } else {
        setCurrentImage(
          (prev) =>
            prev - width.clientWidth / (width.scrollWidth / images.length)
        );
      }
    }
  };

  useEffect(() => {
    const div = document.getElementById('my-div');
    div?.scrollTo({
      left: 400 * currentImage,
      behavior: 'smooth',
    });
  }, [currentImage, images]);

  return { width, upOrDown, currentImage };
};

export default useMainPortfolioImages;
