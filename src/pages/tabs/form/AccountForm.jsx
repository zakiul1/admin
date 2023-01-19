import { Box, Dialog, Button } from "@mui/material";
import { CardBody, Input, Select, Option } from "@material-tailwind/react";

const AccountForm = ({ open, handleClose }) => {
  return (
    <Box>
      <Dialog open={open} fullWidth maxWidth={"xs"}>
        <form>
          <CardBody className="flex flex-col gap-4 p-8">
            <div className="relative mb-5 ">
              <h3 className="m-auto text-2xl font-medium text-blue-gray-400">
                Add Account
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
            <Input
              label="Name"
              variant="standard"
              size="lg"
              /*  onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              } */
            />
            <Input
              label="Account Number"
              variant="standard"
              size="lg"
              /*  onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              } */
            />
            <Input
              label="Bank Name"
              variant="standard"
              size="lg"
              /*  onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              } */
            />
            <Input
              variant="standard"
              label="Swift Code"
              size="lg"
              /*  onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              } */
            />
            <Input
              variant="standard"
              label="Current Balance"
              size="lg"
              /*  onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              } */
            />
          </CardBody>
          <div className="mr-5 mb-6 flex justify-end">
            <Button variant="contained" color="success" size="small">
              Save
            </Button>
          </div>
        </form>
      </Dialog>
    </Box>
  );
};

export default AccountForm;
