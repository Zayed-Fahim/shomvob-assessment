'use client';
import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

interface CustomImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  lazy?: boolean;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  fallbackSrc = '/default-image.png',
  className = '',
  lazy = false,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  const handleError = () => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      {...rest}
    />
  );
};
