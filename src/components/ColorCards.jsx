import React, { useState, useEffect } from 'react';

const ColorCards = () => {
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

  // State to store random colors
  const [colors, setColors] = useState([]);

  // Generate 3 random colors on component mount
  useEffect(() => {
    const newColors = Array.from({ length: 4 }, () => {
      const hex = generateRandomColor();
      return {
        hex: hex,
        rgb: hexToRgb(hex),
      };
    });
    setColors(newColors);
  }, []);

  return (
    <div className='flex flex-col pt-6 pb-6'>
    <h2 className='text-white text-center font-bold text-2xl'>Normal Color Card</h2>
    <div className="flex justify-center flex-wrap items-start gap-8 pt-12 pb-2"> 
      {colors.map((color, index) => (
        <article
          key={index}
          className="relative p-2 md:p-6  bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
        > 
          <figure
            className="relative w-80 h-48 rounded-2xl overflow-hidden transition-all duration-300"
            style={{ background: color.hex }}
          >
            <div className="absolute w-1/5 h-1/5 bg-gradient-to-br from-pink-300 to-purple-500 blur-2xl rounded-full bottom-0 left-1/4 transform translate-x-2 hover:scale-110 transition-transform duration-300"></div>
          </figure>
          <h2 className="text-xl font-semibold mt-4">Hex code: {color.hex}</h2>
          <h2 className="text-xl font-semibold mt-4">RGB code: {color.rgb}</h2>
        </article>
      ))}
    </div>
    </div>
  );
};

export default ColorCards;
