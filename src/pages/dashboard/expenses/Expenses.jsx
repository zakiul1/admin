import React, { useEffect, useState } from "react";
import ExpensesAddForm from "./form/ExpensesAddForm";
import { Box, Button, Fab } from "@mui/material";
import DataTable from "@/pages/tabs/DataTable";
import { expensesDataColum } from "./colum/expensesDataColum";
import { HiPlus } from "react-icons/hi";
import axios from "axios";

const Expenses = ({ header }) => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  /*   useEffect(() => {
    getData("/account");
  }, []);

  const getData = async (url) => {
    let res = await axios.get(url);
    let data = res.data;
    setTableData(data);
    setLoading(false);
  }; */

  return (
    <div className="mt-2">
      <div className=" mb-12 grid md:grid-cols-1 xl:grid-cols-1">
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
          <ExpensesAddForm open={open} handleClose={handleClose} />
        </Box>

        <DataTable
          data={tableData}
          coloum={expensesDataColum}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Expenses;
