import React, { useState, useEffect } from 'react';

const GradientCards = () => {
  // Function to generate a random color in hex format
  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
  };

  // Function to convert hex color to RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // State to store random gradient colors
  const [gradients, setGradients] = useState([]);

  // Generate 3 random gradients on component mount
  useEffect(() => {
    const newGradients = Array.from({ length: 3 }, () => {
      const color1 = generateRandomColor();
      const color2 = generateRandomColor();
      return {
        color1: color1,
        color2: color2,
        gradient: `linear-gradient(to right, ${color1}, ${color2})`,
        rgb1: hexToRgb(color1),
        rgb2: hexToRgb(color2),
      };
    });
    setGradients(newGradients);
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-white text-center font-bold text-2xl">Gradient Color Cards</h2>
      <div className="flex justify-center flex-wrap items-start  gap-8 pt-12 pb-12">
        {gradients.map((gradient, index) => (
          <article
            key={index}
            className="relative p-2 md:p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <figure
              className="relative w-100 h-48 rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: gradient.gradient }}
            >
              <div className="absolute w-1/5 h-1/5 bg-gradient-to-br from-pink-300 to-purple-500 blur-2xl rounded-full bottom-0 left-1/4 transform translate-x-2 hover:scale-110 transition-transform duration-300"></div>
            </figure>
            <h2 className="text-xl font-semibold mt-4">Hex codes: {gradient.color1}, {gradient.color2}</h2>
            <h2 className="text-xl font-semibold mt-4">RGB codes: {gradient.rgb1}, {gradient.rgb2}</h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default GradientCards;
