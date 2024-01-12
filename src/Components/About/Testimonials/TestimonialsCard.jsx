// import React from 'react';
import PropTypes from 'prop-types';

export const TestimonialsCard = ({
  className,
  vector = 'vector.svg',
  image = 'image.png',
  rating = 'rating.svg',
}) => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-[8px] p-[24px] ml-[72px] relative bg-gray-scalewhite rounded-[8px] shadow-[0px_10px_20px_#00000003] ${className}`}
      style={{ width: '100%', maxWidth: '376px' }} // Responsive width
    >
      <img className="relative w-[32px] h-[26px]" alt="Vector" src={vector} />
      <p
        className="relative w-[100%] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-700 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]"
        style={{ maxWidth: '100%' }} // Responsive text width
      >
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum,
        bibendum cursus velit sodales. Donec sed neque eget
      </p>
      <div
        className="flex flex-col sm:flex-row w-[100%] items-center justify-between pt-[8px] sm:pt-0 pb-0 px-0 relative flex-[0_0_auto]"
        style={{ maxWidth: '100%' }} // Responsive flex width
      >
        <div className="flex w-[screen] sm:w-[168px] items-center gap-[1px] relative">
          <img className="relative w-[56px] h-[56px] object-cover" alt="Image" src={image} />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div
              className="relative w-fit mt-[-1.00px] font-body-medium-body-medium-500 font-[number:var(--body-medium-body-medium-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-medium-body-medium-500-font-size)] text-center tracking-[var(--body-medium-body-medium-500-letter-spacing)] leading-[var(--body-medium-body-medium-500-line-height)] whitespace-nowrap [font-style:var(--body-medium-body-medium-500-font-style)]"
              style={{ maxWidth: '100%' }} // Responsive text width
            >
              Robert Fox
            </div>
            <div className="relative w-fit font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-400 text-[length:var(--body-small-body-small-400-font-size)] text-center tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-400-font-style)]">
              Customer
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-0">
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              className="inline-flex"
              alt="Rating"
              src={rating}
              style={{ width: '20px', height: '20px' }} // Responsive rating size
            />
          ))}
        </div>
      </div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.string,
};
