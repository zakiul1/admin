import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { emlpoyeeColumns } from "./column/colmn";
import DataTable from "./DataTable";
import AccountForm from "./form/AccountForm";

const Account = () => {
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
      <Box className="my-3 flex justify-between border-2 py-3">
        <Box>
          <Typography variant="h6">Account</Typography>
        </Box>
        <Box>
          <Button variant="contained" color="success" onClick={handleClickOpen}>
            ADD
          </Button>
          <AccountForm open={open} handleClose={handleClose} />
        </Box>
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
