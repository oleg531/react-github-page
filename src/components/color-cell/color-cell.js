import React from "react";
import "./color-cell.css";

const colorCell = props => {
  const cellStyle = { backgroundColor: props.color };
  return <div className="color-cell" style={cellStyle} />;
};

export default colorCell;
