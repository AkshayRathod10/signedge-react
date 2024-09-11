import React from 'react';

const ContentWithImage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
      {/* Content Section */}
      <div className="flex-1">
        <ul className="list-disc pl-5">
          <li>Billboards: Display advertisements for products and services.</li>
          <li>Transit Advertising: Ads in buses, trains, and at stations.</li>
          <li>Retail Environments: Promote sales and new arrivals.</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src="/path/to/your-image.jpg" // Ensure the path is correct
          alt="Advertising Examples"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ContentWithImage;
