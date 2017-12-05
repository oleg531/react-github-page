import React from "react";
import "./graph-table-content.css";
import ColorCell from "../color-cell/color-cell";
import { AllowedColors } from "../shared/cell-colors";

const months = [
  "Oct",
  "Nov",
  "Dec",
  "Jun",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep"
];

const getRandomInRange = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const getRandomColor = () =>
  AllowedColors[getRandomInRange(0, AllowedColors.length - 1)];

const getCels = () => {
  let cellInRows = [];
  for (let i = 0; i < months.length * 5; i++) {
    cellInRows.push(<ColorCell color={getRandomColor()} />);
  }

  return cellInRows;
};

const getRows = () => {
  let rows = [];

  for (let i = 0; i < 7; i++) {
    let day = (
      <div className="day">
        {i == 1 ? "M" : i == 3 ? "W" : i == 5 ? "F" : ""}
      </div>
    );
    rows.push(<div className="row">{[day, ...getCels()]}</div>);
  }

  return rows;
};

const graphTableContent = props => {
  return (
    <div className="graph-table-content">
      <div className="months">{months.map(m => <div>{m}</div>)}</div>
      {getRows()}
    </div>
  );
};

export default graphTableContent;
