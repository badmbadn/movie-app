import React from 'react';
import { Pagination } from 'antd';
import './pagination.css';

const PaginationMovie = ({ total, curPage, onChangePage }) => {
  return (
    <Pagination
      total={Math.min(total, 500 * 20)}
      defaultCurrent={1}
      current={curPage}
      className="pagination"
      onChange={(page) => onChangePage(page)}
      pageSize={20}
      hideOnSinglePage
    />
  );
};

export default PaginationMovie;
