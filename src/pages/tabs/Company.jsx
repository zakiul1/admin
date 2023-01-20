import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { CompanyColumns } from "./column/colmn";
import axiosCall from "../../../axios-client";
import { Box, Fab, Typography } from "@mui/material";
import CompanyForm from "./form/CompanyForm";
import { HiPlus } from "react-icons/hi";
const Company = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    getData("/company");
  }, []);

  const getData = async (url) => {
    await axiosCall
      .get(url)
      .then((res) => {
        let data = res.data;
        setTableData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  //console.log(tableData);
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
