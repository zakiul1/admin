import { Box, Button, Fab, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { emlpoyeeColumns } from "./column/colmn";
import DataTable from "./DataTable";
import EmployeeForm from "./form/EmployeeForm";
import { HiPlus } from "react-icons/hi";

const Employee = () => {
  //data state
  const [tableData, setTableData] = useState([]);
  //loading state
  const [loading, setLoading] = useState(false);
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

  /* //fatch data
  useEffect(() => {
    getData("/employee");
  }, []);

  const getData = async (url) => {
    let res = await axios.get(url);
    let data = res.data;
    setTableData(data);
    setLoading(false);
  }; */
  //fatch data
  return (
    <Box>
      <Box className="relative my-2 flex justify-end ">
        <Fab
          onClick={handleClickOpen}
          size="small"
          sx={{ position: "absolute", top: "-5px", right: "-8px" }}
          color="success"
          aria-label="add"
        >
          <HiPlus />
        </Fab>
        <EmployeeForm open={open} handleClose={handleClose} />
      </Box>

      <DataTable loading={loading} data={tableData} coloum={emlpoyeeColumns} />
    </Box>
  );
};

export default Employee;
