import React from "react";
import "./graph-table-footer.css";
import ColorCell from "../color-cell/color-cell";
import { AllowedColors } from "../shared/cell-colors";

const graphTableFooter = props => {
  return (
    <div className="graph-table-footer">
      <div>
        Summary of Pull Requests, issues opened, and commits.{" "}
        <a href="#">Learn more</a>
      </div>
      <div className="less-more-content">
        Less
        <div className="less-more-colors">
          {AllowedColors.map(color => <ColorCell color={color} />)}
        </div>
        More
      </div>
    </div>
  );
};

export default graphTableFooter;
