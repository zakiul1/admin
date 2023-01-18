import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Input,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { GoX } from "react-icons/go";

const CompanyForm = ({ open, handleClose }) => {
  return (
    <Box>
      <Dialog open={open} fullWidth maxWidth={"xs"}>
        <form>
          <Box className="flex justify-between">
            <DialogTitle>Add Company</DialogTitle>
            <DialogTitle>
              <button
                onClick={handleClose}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-red-900 hover:bg-gray-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </DialogTitle>
          </Box>
          <DialogContent>
            <Box className="flex w-full flex-col gap-y-5">
              <Box className="flex gap-5">
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label="Address"
                    variant="standard"
                  />
                </FormControl>
              </Box>
              <Box className="flex gap-5">
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label="Country"
                    variant="standard"
                  />
                </FormControl>
              </Box>
              <Box className="mt-2">
                <FormControl sx={{ width: 200 }} size={"small"}>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
                    value={""}
                  >
                    <MenuItem value={1}>Customer</MenuItem>
                    <MenuItem value={2}>Factory</MenuItem>
                    <MenuItem value={3}>Bank</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions className="my-5">
            <Button variant="contained" color="success" onClick={handleClose}>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default CompanyForm;
