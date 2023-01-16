import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Dialog,
  DialogActions,
} from "@mui/material";

const SettingsDataGrid = ({ header }) => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 2,
    maxColumns: 8,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mt-2">
      <div className=" mb-12 grid md:grid-cols-1 xl:grid-cols-1">
        <div className="mb-2 flex items-center justify-between border-2 p-2">
          <div className="">
            <h6>{header}</h6>
          </div>
          <div>
            <div>
              <Button variant="outlined" onClick={handleOpen}>
                Open form dialog
              </Button>
              <Dialog open={open}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>

        <div style={{ height: 400, width: "100%" }}>
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid {...data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDataGrid;
