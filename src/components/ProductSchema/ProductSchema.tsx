import React from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  category: string;
  dimensions?: string;
  weight?: string;
  material?: string;
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({
  name,
  description,
  image,
  category,
  dimensions,
  weight,
  material
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    category,
    manufacturer: {
      '@type': 'Organization',
      name: 'LOKI N-4',
      url: 'https://lokin4.com'
    },
    ...(dimensions && { size: dimensions }),
    ...(weight && { weight }),
    ...(material && { material }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'RSD',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: 'LOKI N-4'
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};