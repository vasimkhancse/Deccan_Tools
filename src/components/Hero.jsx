import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

export default function Hero() {
  const heroBanners = [
    {
      id: 'banner-1',
      title: 'Deccan Toolings - Carbide Tools For Auto Industry',
      image: '/images/banners/banner-1.png',
      linkTo: '/products'
    },
    {
      id: 'banner-2',
      title: 'Deccan Toolings - Highly Specialized Tools',
      image: '/images/banners/banner-2.png',
      linkTo: '/products/special-tools'
    },
    {
      id: 'banner-3',
      title: 'Deccan Toolings - Precision Reamers & Cutters',
      image: '/images/banners/banner-3.png',
      linkTo: '/products/reamers'
    },
    {
      id: 'banner-4',
      title: 'Deccan Toolings - Product Portfolio',
      image: '/images/banners/banner-4.png',
      linkTo: '/products'
    },
    {
      id: 'banner-5',
      title: 'Deccan Toolings - 5-Axis CNC Manufacturing Facilities',
      image: '/images/banners/banner-5.png',
      linkTo: '/manufacturing'
    },
    {
      id: 'banner-6',
      title: 'Deccan Toolings - PVD Coating Solutions',
      image: '/images/banners/banner-6.png',
      linkTo: '/coating'
    }
  ];

  return (
    <section className="relative w-full bg-white border-b border-slate-200 overflow-hidden select-none">
      <Carousel
        autoplay={true}
        autoplayInterval={5000}
        pauseOnHover={true}
        showArrows={true}
        showDots={true}
        showCounter={true}
        showProgress={true}
        theme="light"
        itemsPerView={1}
        className="w-full"
        ariaLabel="Deccan Toolings Hero Banners"
      >
        {heroBanners.map((banner) => (
          <div
            key={banner.id}
            className="relative w-full overflow-hidden bg-slate-50 flex items-center justify-center"
          >
            <Link
              to={banner.linkTo}
              className="block w-full h-full cursor-pointer relative group"
              title={`Click to view ${banner.title}`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-auto min-h-[250px] sm:min-h-[500px] md:min-h-[500px] lg:min-h-[500px] max-h-[500px]   transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
