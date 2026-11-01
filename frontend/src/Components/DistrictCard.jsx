import React from 'react';

const DistrictCard = () => {
  return (
    <div className="absolute top-32 left-10 md:left-20 bg-[#f6f1e7] w-[calc(100%-5rem)] max-w-sm p-4 rounded-2xl shadow-xl z-20 border border-[#e5dbc8]">
      <h2 className="text-lg font-bold text-[#3d3321] mb-3 flex items-center gap-2">
        📍 Ranchi District
      </h2>

      <div className="flex gap-4 items-start">
        <img
          src="/images/hundru-falls.jpg"
          className="w-28 h-24 object-cover rounded-lg shadow-sm flex-shrink-0"
          alt="Hundru Falls"
        />

        <ul className="text-xs text-gray-700 list-disc pl-4 space-y-1.5 leading-relaxed">
          <li>Capital city of Jharkhand</li>
          <li>Famous for Hundru Falls</li>
          <li>Rich Tribal History of Munda and Oraon</li>
        </ul>
      </div>

      <button className="mt-4 bg-[#1e5c45] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors hover:bg-[#154233] w-full sm:w-auto">
        Learn More ›
      </button>
    </div>
  );
};

export default DistrictCard;