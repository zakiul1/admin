import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { CompanyColumns } from "./column/colmn";
import axios from "axios";

const Company = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getData("/company");
  }, []);

  const getData = async (url) => {
    let res = await axios.get(url);
    let data = res.data;
    setTableData(data);
  };

  console.log(tableData);
  return (
    <>
      <DataTable data={tableData} coloum={CompanyColumns} />
    </>
  );
};

export default Company;
