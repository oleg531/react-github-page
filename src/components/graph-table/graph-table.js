import React from "react";
import "./graph-table.css";
import Content from "../graph-table-content/graph-table-content";
import Footer from "../graph-table-footer/graph-table-footer";

const graphTable = props => {
  return (
    <div className="graph-table">
      <Content />
      <Footer />
    </div>
  );
};

export default graphTable;
