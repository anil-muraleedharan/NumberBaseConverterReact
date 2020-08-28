import React from 'react';

const InputBox = ({ value, base, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value, base);
  };
  return (
    <div className='input-box'>
      <label>Base {base}</label>
      <input
        type='text'
        onChange={handleChange}
        value={value}
        placeholder={`Enter a number in base ${base}`}
      />
    </div>
  );
};

export default InputBox;
