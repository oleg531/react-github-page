import React from "react";
import "./public-contributions.css";
import GraphTable from "../graph-table/graph-table";
import NumberInfoBlock from "../number-info-block/number-info-block";

const publicContributions = props => {
  return (
    <div className="public-contributions">
      <div className="header">Public contributions</div>
      <div className="body">
        <GraphTable />
        <div className="number-blocks">
          <NumberInfoBlock header="Year of contributions" content="6,280 total" footer="Sep 25, 2013 - Sep 25,2014"/>
          <NumberInfoBlock header="Longest streak" content="341 days" footer="October 20 -  September 25"/>
          <NumberInfoBlock header="Current streak" content="341 days" footer="October 20 -  September 25"/>
        </div>
      </div>
    </div>
  );
};

export default publicContributions;
