import { Spin } from 'antd';
import React from 'react';
import './spiner.css';

function Spinner() {
  return (
    <div className="inner-spinner">
      <Spin size="large" />
    </div>
  );
}

export default Spinner;
