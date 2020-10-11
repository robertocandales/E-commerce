import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const SelectComponent = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Select defaultValue='1' style={{ width: 120 }} onChange={handleChange} disabled>
        <Option value='1'>1</Option>
      </Select>
    </>
  );
};

export default SelectComponent;
