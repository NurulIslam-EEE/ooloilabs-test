import React from "react";
import TableComponent from "../components/TableComponent";
import data from "../tableTestData.json";
import tab0 from "../table0Config.json"
import tab1 from "../table1Config.json"
import tab2 from "../table2Config.json"
import tab3 from "../table3Config.json"
import "../styles/Home.css";

function Home() {

  return (
    <div className="table-container container">
      <h3>Part 01: All columns with sort functionality</h3>
      <TableComponent data={data} tableConfig={tab0} />
      <h3>Part 02 : Selective columns with sort functionality on selective columns</h3>
      <TableComponent data={data} tableConfig={tab1} />
   
      <TableComponent data={data} tableConfig={tab2} />
  
      <TableComponent data={data} tableConfig={tab3} />
    </div>
  );
}

export default Home;
