import React from "react";
import './number-info-block.css';

const numberInfoBlock = props => {
  return (
    <div className="number-info-block">
      <div className="block-header">{props.header}</div>
      <div className="block-content">{props.content}</div>
      <div className="block-footer">{props.footer}</div>
    </div>
  );
};

export default numberInfoBlock;
