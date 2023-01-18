import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { emlpoyeeColumns } from "./column/colmn";
import DataTable from "./DataTable";
import EmployeeForm from "./form/EmployeeForm";

const Employee = () => {
  //data state
  const [tableData, setTableData] = useState([]);
  //loading state
  const [loading, setLoading] = useState(true);
  //modal open state
  const [open, setOpen] = useState(false);
  //modal show function
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  //modal show function

  //fatch data
  useEffect(() => {
    getData("/employee");
  }, []);

  const getData = async (url) => {
    let res = await axios.get(url);
    let data = res.data;
    setTableData(data);
    setLoading(false);
  };
  //fatch data
  return (
    <Box>
      <Box className="my-3 flex justify-between border-2 py-3">
        <Box>
          <Typography variant="h6">Employee</Typography>
        </Box>
        <Box>
          <Button variant="contained" color="success" onClick={handleClickOpen}>
            ADD
          </Button>
          <EmployeeForm open={open} handleClose={handleClose} />
        </Box>
      </Box>
      <DataTable loading={loading} data={tableData} coloum={emlpoyeeColumns} />
    </Box>
  );
};

export default Employee;
