import { Box, Fab } from "@mui/material";
import { useState } from "react";
import { emlpoyeeColumns } from "./column/colmn";
import { HiPlus } from "react-icons/hi";
import DataTable from "./DataTable";
import AccountForm from "./form/AccountForm";
import useFatchData from "./view/useFatchData";

const Account = () => {
  const [tableData, loading] = useFatchData("/account");
  const [open, setOpen] = useState(false);
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
        <AccountForm open={open} handleClose={handleClose} />
      </Box>

      <Box>
        <DataTable
          loading={loading}
          data={tableData}
          coloum={emlpoyeeColumns}
        />
      </Box>
    </Box>
  );
};

export default Account;
