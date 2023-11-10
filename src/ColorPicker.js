import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: selectedColor || '#ffffff',
        minHeight: '100vh',
        transition: 'background-color 0.5s',
        margin: '50px',
      }}
    >
      <button
        onClick={handleButtonClick}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Pick a color
      </button>
      {showColorList && (
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
