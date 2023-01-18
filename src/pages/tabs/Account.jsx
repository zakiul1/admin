import { Button } from "@material-tailwind/react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { emlpoyeeColumns } from "./column/colmn";
import DataTable from "./DataTable";
import AccountForm from "./form/AccountForm";
import { GrFormAdd } from "react-icons/gr";

const Account = () => {
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
      <Box className="my-2 flex justify-end ">
        <Button
          onClick={handleClickOpen}
          size="sm"
          className="w-[70px] rounded-md"
          color="blue"
        >
          <span className="text-[16px]">+</span>
        </Button>

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
