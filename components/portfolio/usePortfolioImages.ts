import { useEffect, useRef, useState } from 'react';

const usePortfolioImages = (images: string[]) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isSet, setIsSet] = useState('');

  const upOrDown = (scroll: boolean) => {
    if (scroll) {
      if (
        currentImage * 400 + ref.current!.clientWidth >
        ref!.current!.scrollWidth
      ) {
        setCurrentImage(0);
      } else {
        setCurrentImage(
          (prev) =>
            prev +
            ref.current!.clientWidth /
              (ref!.current!.scrollWidth / images.length)
        );
      }
    } else {
      if (currentImage === 0) {
        setCurrentImage(images.length - 1);
      } else {
        setCurrentImage(
          (prev) =>
            prev -
            ref.current!.clientWidth /
              (ref!.current!.scrollWidth / images.length)
        );
      }
    }
  };

  useEffect(() => {
    ref.current?.scrollTo({
      left: 400 * currentImage,
      behavior: 'smooth',
    });
    if (isSet === '') {
      setIsSet('set');
    }
  }, [currentImage, isSet]);

  return { ref, upOrDown, currentImage, isSet };
};

export default usePortfolioImages;
