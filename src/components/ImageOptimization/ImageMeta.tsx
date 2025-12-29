import React from 'react';

interface ImageMetaProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const ImageMeta: React.FC<ImageMetaProps> = ({ src, alt, width, height }) => {
  return (
    <>
      <meta property="og:image" content={src} />
      <meta property="og:image:alt" content={alt} />
      {width && <meta property="og:image:width" content={width.toString()} />}
      {height && <meta property="og:image:height" content={height.toString()} />}
      <meta name="twitter:image" content={src} />
      <meta name="twitter:image:alt" content={alt} />
    </>
  );
};