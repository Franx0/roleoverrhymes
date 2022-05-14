// React
import { FunctionComponent, useState, useEffect } from 'react';

interface ImageProps {
  src: string,
  defaultSrc?: string,
  alt: string,
  width?: string,
  height?: string,
  className?: string,
  style?: any,
};

const defaultImageUrl = '/role_over_rhymes.png';

const Image: FunctionComponent<any> = (props: ImageProps) => {
  const { className, style, src, defaultSrc, alt, width="100", height="100"} = props;
  const defaultSrcObject = { src: defaultImageUrl, blurred: true };
  const [currentSrc, setCurrentSrc] = useState(
    {...defaultSrcObject, src: (src || defaultSrc || defaultImageUrl)}
  );

  useEffect(() => {
    if(src) setCurrentSrc({ src: src, blurred: false });
  }, [src]);

  const handleError = () => {
    setCurrentSrc(defaultSrcObject);
  };

  return (
    <img
      onError={() => handleError()}
      width={width}
      height={height}
      style={ currentSrc.blurred ? {...style, filter: 'blur(0.5rem)' } : style }
      className={className}
      alt={alt}
      src={currentSrc.src}
      loading="lazy" />
  )
}

export default Image
