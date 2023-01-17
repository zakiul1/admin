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

const CompanyForm = ({ open, handleClose }) => {
  return (
    <Box>
      <Dialog open={open} fullWidth maxWidth={"sm"}>
        <form>
          <DialogTitle>Add Company</DialogTitle>
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
                <FormControl sx={{ width: 270 }}>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
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
            <Button onClick={handleClose} variant="contained" color="error">
              Cancel
            </Button>
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
