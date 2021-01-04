import React from 'react';
import './headerBtn.css'

const HeaderBtn = (props) => {
  return (
    <div className="headerBtn">
      <div>{props.name}</div>
    </div>
  );
};

export default HeaderBtn;