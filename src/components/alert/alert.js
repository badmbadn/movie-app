import React from 'react';
import { Alert } from 'antd';
import './alert.css';

function AlertMovie() {
  return (
    <div>
      <Alert message="Error" type="error" showIcon className="offline" />
    </div>
  );
}

export default AlertMovie;
