import React from 'react';

const Input = ({ name, label, type }) => {

  return (
    <label>
      {label}
      <input type={type} name={name} />
    </label>
  );
}

export default Input;