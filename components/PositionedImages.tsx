// React
import { FunctionComponent } from 'react';

// Components
import Image from '@/components/shared/Image'

interface ImageProps {
  url: string
  class?: string
};

interface PositionedImagesProps {
  images?: Array<ImageProps>
};

const PositionedImages: FunctionComponent<PositionedImagesProps> = ({ images = [] }) => {
  const positionedImage: Function = (image: ImageProps, key: Number) => {
    return <Image key={`image-${key}`} alt={`image-${key}`} className={`w-auto absolute ${image.class}`} src={image.url} />
  };

  return(
    <>
      {
        images.map((image: ImageProps, index: Number) => {
          return positionedImage(image, index)
        })
      }
    </>
  )
}

export default PositionedImages
