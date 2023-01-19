import { Button } from "@material-tailwind/react";
import { Box, Fab } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { expenseHeadColumns } from "./column/colmn";
import { HiPlus } from "react-icons/hi";
import DataTable from "./DataTable";
import ExpenseHeadForm from "./form/ExpenseHeadForm";

const ExpenseHead = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    getData("/account");
  }, []);

  const getData = async (url) => {
    let res = await axios.get(url);
    let data = res.data;
    setTableData(data);
    setLoading(false);
  };

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
        <ExpenseHeadForm open={open} handleClose={handleClose} />
      </Box>

      <Box>
        <DataTable
          loading={loading}
          data={tableData}
          coloum={expenseHeadColumns}
        />
      </Box>
    </Box>
  );
};

export default ExpenseHead;
