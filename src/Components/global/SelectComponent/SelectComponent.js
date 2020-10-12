import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const SelectComponent = ({ qty = 0 }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const array = [...Array(qty).keys()];
  console.log(array);
  //  for (let index = 0; index < qty; index++) {
  //    const qtyArrat = index;

  //    console.log(qtyArrat.push(qtyArrat));
  //  }
  const qtyArrat = [qty];
  console.log(qtyArrat);
  return (
    <>
      <Select
        defaultValue='1'
        style={{ width: 120 }}
        onChange={handleChange}
        disabled={array.length === 0 ? true : false}>
        {array.length
          ? array.map((q, i) => (
              <Select.Option key={i} value={i + 1}>
                {i + 1}
              </Select.Option>
            ))
          : null}
      </Select>
    </>
  );
};

export default SelectComponent;
