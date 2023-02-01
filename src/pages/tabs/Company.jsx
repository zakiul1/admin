import { useState } from "react";
import DataTable from "./DataTable";
import { CompanyColumns } from "./column/colmn";
import { Box, Fab } from "@mui/material";
import CompanyForm from "./form/CompanyForm";
import { HiPlus } from "react-icons/hi";
import useFatchData from "./view/useFatchData";
const Company = () => {
  const [tableData, loading] = useFatchData("/company");

  //Modal View State and method
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //Modal View State and method
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
        <CompanyForm open={open} handleClose={handleClose} />
      </Box>
      <Box>
        <DataTable loading={loading} data={tableData} coloum={CompanyColumns} />
      </Box>
    </Box>
  );
};

export default Company;
