import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { CompanyColumns } from "./column/colmn";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import CompanyForm from "./form/CompanyForm";

const Company = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  /* useEffect(() => {
    getData("/company");
  }, []);

  const getData = async (url) => {
    let res = await axios.get(url);
    let data = res.data;
    setTableData(data);
    setLoading(false);
  }; */

  console.log(tableData);
  return (
    <Box>
      <Box className="my-3 flex justify-between border-2 py-3">
        <Box>
          <Typography variant="h6">Company</Typography>
        </Box>
        <Box>
          <Button variant="contained" color="success" onClick={handleClickOpen}>
            ADD
          </Button>
          <CompanyForm open={open} handleClose={handleClose} />
        </Box>
      </Box>
      <Box>
        <DataTable loading={loading} data={tableData} coloum={CompanyColumns} />
      </Box>
    </Box>
  );
};

export default Company;
