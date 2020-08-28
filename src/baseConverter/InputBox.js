import React from 'react';

const InputBox = ({ value, base, validator, onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    if (validator.test(value)) {
      onChange(parseInt(value, base));
    }
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
