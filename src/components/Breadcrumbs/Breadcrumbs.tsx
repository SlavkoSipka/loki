import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routes: { [key: string]: string } = {
  'o-nama': 'O nama',
  'kontakt': 'Kontakt',
  'galerija': 'Galerija',
  'proizvodi': 'Proizvodi',
  'betonski-blokovi': 'Betonski blokovi',
  'betonske-cevi': 'Betonske cevi',
  'sahtovi-i-poklopci': 'Šahtovi i poklopci'
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Add structured data for breadcrumbs
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': pathnames.map((_, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@id': `https://lokin4.com/${pathnames.slice(0, index + 1).join('/')}`,
        'name': routes[pathnames[index]] || pathnames[index]
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbList)}
      </script>
      
      <nav className="flex items-center space-x-2 text-sm text-gray-400">
        <span className="text-gray-400">Početna</span>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <ChevronRight className="w-4 h-4" />
              {name === 'proizvodi' ? (
                <span className="text-gray-400">{routes[name] || name}</span>
              ) : !isLast ? (
                <Link to={routeTo} className="hover:text-blue-400 transition-colors">
                  {routes[name] || name}</Link>
              ) : (
                <span className="text-blue-400 cursor-default">{routes[name] || name}</span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
};