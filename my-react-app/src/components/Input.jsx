import React from 'react';

const Input = ({ placeholder, type = 'text', onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      style={{
        padding: '0.6em 1.2em',
        fontSize: '1em',
        borderRadius: '8px',
        border: '1px solid #646cff',
        backgroundColor: '#1a1a1a',
        color: 'rgba(255, 255, 255, 0.87)',
        fontFamily: 'inherit',
        width: '100%',
        maxWidth: '300px',
        marginBottom: '1em',
      }}
    />
  );
};

export default Input;

