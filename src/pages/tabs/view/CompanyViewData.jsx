import {
  Box,
  Dialog,
  Button,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import { CardBody, Input, Select, Option } from "@material-tailwind/react";

const CompanyViewData = ({ open, handleClose, data }) => {
  return (
    <Box>
      <Dialog open={open} fullWidth maxWidth={"xs"}>
        <form className="bg-blue-gray-300">
          <CardBody className="flex flex-col gap-4 p-8">
            <div className="relative mb-2 ">
              <h3 className="m-auto text-2xl font-medium text-blue-gray-400">
                Company Details
              </h3>
              <button
                onClick={handleClose}
                type="button"
                className="absolute right-[-10px] top-0 inline-flex items-center justify-center rounded-md bg-white p-2 text-red-800 hover:bg-gray-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </CardBody>
          <DialogContent>
            <Stack>
              <Typography variant="body">Name: {data.name}</Typography>
              <Typography variant="body">Email: {data.email}</Typography>
            </Stack>
          </DialogContent>
        </form>
      </Dialog>
    </Box>
  );
};

export default CompanyViewData;
