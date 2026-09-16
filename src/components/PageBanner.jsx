import React from 'react';
import Breadcrumb from './Breadcrumb';

/**
 * Reusable PageBanner component
 * Displays responsive desktop and mobile graphic banners for section pages
 * Includes breadcrumb navigation strip for clean UX and SEO hierarchy
 */
export default function PageBanner({
  desktopImage,
  mobileImage,
  alt = 'Deccan Toolings Banner',
  title = '',
  breadcrumbItems = [],
  showBreadcrumb = true,
  className = ''
}) {
  return (
    <section className={`w-full bg-slate-100 overflow-hidden select-none ${className}`}>
      {/* Semantic H1 for SEO and Screen Readers */}
      {title && <h1 className="sr-only">{title}</h1>}

      {/* Responsive Banner Image */}
      <div className="w-full relative overflow-hidden bg-slate-900 border-b border-slate-200">
        <picture className="block w-full">
          {mobileImage && (
            <source
              media="(max-width: 767px)"
              srcSet={mobileImage}
            />
          )}
          <img
            src={desktopImage}
            alt={alt || title}
            className="w-full h-auto block object-cover w-full"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Breadcrumb Navigation Bar */}
      {showBreadcrumb && breadcrumbItems.length > 0 && (
        <div className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      )}
    </section>
  );
}
