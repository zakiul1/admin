import { Fab, Stack } from "@mui/material";

import { HiPencil } from "react-icons/hi";
import { FiTrash, FiEye } from "react-icons/fi";
import { useState } from "react";
import CompanyViewData from "./CompanyViewData";

const ViewForm = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [alldata, setData] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const onClick = (e) => {
    const currentRow = data.row;
    setOpen(true);
    setData(currentRow);
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Fab onClick={onClick} size="small" color="primary" aria-label="edit">
          <FiEye />
        </Fab>
        <CompanyViewData data={alldata} open={open} handleClose={handleClose} />
        <Fab
          /* onClick={onClick} */ size="small"
          color="secondary"
          aria-label="edit"
        >
          <HiPencil />
        </Fab>
        <Fab
          /* onClick={onClick} */ size="small"
          color="error"
          aria-label="edit"
        >
          <FiTrash />
        </Fab>
      </Stack>
    </>
  );
};

export default ViewForm;
