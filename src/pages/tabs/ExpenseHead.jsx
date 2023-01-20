import { Button } from "@material-tailwind/react";
import { Box, Fab } from "@mui/material";
import axiosCall from "../../../axios-client";
import { useEffect, useState } from "react";
import { expenseHeadColumns } from "./column/colmn";
import { HiPlus } from "react-icons/hi";
import DataTable from "./DataTable";
import ExpenseHeadForm from "./form/ExpenseHeadForm";
import { useStateContext } from "@/context/ContextProvider";

const ExpenseHead = () => {
  //all State
  const { expenseHeadParent } = useStateContext();
  const [loading, setLoading] = useState(false);
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
        />
      </Box>

      <Box>
        <DataTable
          loading={loading}
          data={expenseHeadParent}
          coloum={expenseHeadColumns}
        />
      </Box>
    </Box>
  );
};

export default ExpenseHead;
