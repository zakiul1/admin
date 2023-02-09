import { Box, Fab } from "@mui/material";
import { useState } from "react";
import { expenseHeadColumns } from "./column/colmn";
import { HiPlus } from "react-icons/hi";
import DataGrid from "react-data-grid";
import ExpenseHeadForm from "./form/ExpenseHeadForm";
import useFatchData from "./view/useFatchData";
import Table from "./Table";

const ExpenseHead = () => {
  //all State
  const [tableData, loading] = useFatchData("/expense-head");

  const [open, setOpen] = useState(false);
  //all State
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
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
        <ExpenseHeadForm
          setOpen={setOpen}
          open={open}
          handleClose={handleClose}
          data={tableData}
        />
      </Box>

      <Box>
        {/* <DataTable
          loading={loading}
          data={tableData}
          coloum={expenseHeadColumns}
        /> */}

        {/* <DataGrid columns={expenseHeadColumns} rows={tableData} /> */}
        <Table data={tableData} />
      </Box>
    </Box>
  );
};

export default ExpenseHead;
