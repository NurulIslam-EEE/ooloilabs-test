import React from "react";
import TableComponent from "../components/TableComponent";
import data from "../tableTestData.json";
import tab0 from "../table0Config.json"
import tab1 from "../table1Config.json"
import tab2 from "../table2Config.json"
import tab3 from "../table3Config.json"
import "../styles/Home.css";

function Home() {
  const table1 = {
    name: { 
      show: true, 
      sort: true },
    joiningDate: { 
      show: false, 
      sort: false },
    city: { 
      show: false, 
      sort: false },
    role: { 
      show: true, 
      sort: false },
    email: { 
      show: true, 
      sort: false },
  };
  const table2 = {
    name: { 
      show: false, 
      sort: false 
    },
    joiningDate: { 
      show: true, 
      sort: true },
    city: { 
      show: false,
       sort: false },
    role: { 
      show: true, 
      sort: true },
    email: { 
      show: true, 
      sort: false },
  };
  const table3 = {
    name: { 
      show: true, 
      sort: false },
    joiningDate: { 
      show: true, 
      sort: false },
    city: { 
      show: true, 
      sort: true },
    role: { 
      show: true, 
      sort: true },
    email: { 
      show: false, 
      sort: false },
  };
  return (
    <div className="table-container container">
      <h3>Part 01: All colum with sort</h3>
      <TableComponent data={data} tableConfig={tab0} />
      <h3>Part 02 : Selective colum with sort on selective column</h3>
      <TableComponent data={data} tableConfig={tab1} />
   
      <TableComponent data={data} tableConfig={tab2} />
  
      <TableComponent data={data} tableConfig={tab3} />
    </div>
  );
}

export default Home;
