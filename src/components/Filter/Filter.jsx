import { createContext } from 'react';
import { Component } from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      FILTER
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
