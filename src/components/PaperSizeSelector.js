import React from 'react';

const PaperSizeSelector = ({ setPaperSize, customSize, handlePresetChange }) => {
  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    setPaperSize(prevSize => ({ ...prevSize, [name]: value }));
  };

  return (
    <div>
      <select onChange={handlePresetChange}>
        <option value="A4">A4</option>
        <option value="A3">A3</option>
        <option value="custom">Customize</option>
      </select>
      {customSize && (
        <div>
          <label>
            Width (mm):
            <input type="number" name="width" onChange={handleSizeChange} />
          </label>
          <label>
            Height (mm):
            <input type="number" name="height" onChange={handleSizeChange} />
          </label>
        </div>
      )}
    </div>
  );
};

export default PaperSizeSelector;
