import { Box, Button, Fab, Typography } from "@mui/material";
import axiosCall from "../../../axios-client";
import { useEffect, useState } from "react";
import { emlpoyeeColumns } from "./column/colmn";
import DataTable from "./DataTable";
import EmployeeForm from "./form/EmployeeForm";
import { HiPlus } from "react-icons/hi";
import useFatchData from "./view/useFatchData";

const Employee = () => {
  const [tableData, loading] = useFatchData("/employee");

  //modal show function
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  //modal show function

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
