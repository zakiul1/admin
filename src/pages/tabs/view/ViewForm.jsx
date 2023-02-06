import { Fab, Stack, Tooltip } from "@mui/material";

import { HiPencil } from "react-icons/hi";
import { FiTrash, FiEye } from "react-icons/fi";
import { useState } from "react";
import CompanyViewData from "./CompanyViewData";
import { useStateContext } from "@/context/ContextProvider";

const ViewForm = ({ data }) => {
  const { row } = data;
  const { id } = data.row;
  const [open, setOpen] = useState(false);
  const [alldata, setData] = useState(row);

  const handleClose = () => {
    setOpen(false);
  };

  const handleView = (e) => {
    setOpen(true);
  };
  const handleEdit = (e) => {
    console.log(id);
  };
  const handleDelete = (e) => {
    alert(id);
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Tooltip title="View Details">
          <Fab
            variant="extended"
            onClick={handleView}
            size="small"
            color="primary"
            aria-label="view"
          >
            <FiEye />
          </Fab>
        </Tooltip>

        {/*       <CompanyViewData data={alldata} open={open} handleClose={handleClose} /> */}
        <Tooltip title="Edit">
          <Fab
            onClick={handleEdit}
            size="small"
            color="secondary"
            aria-label="edit"
            variant="extended"
          >
            <HiPencil />
          </Fab>
        </Tooltip>
        <Tooltip title="Delete">
          <Fab
            onClick={handleDelete}
            size="small"
            color="warning"
            aria-label="delete"
            variant="extended"
          >
            <FiTrash />
          </Fab>
        </Tooltip>
      </Stack>
    </>
  );
};

export default ViewForm;
