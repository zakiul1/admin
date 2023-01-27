import { Box, Dialog, Button } from "@mui/material";
import { CardBody, Input, Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStateContext } from "@/context/ContextProvider";

const ExpenseHeadForm = ({ open, handleClose }) => {
  //All State
  const [formData, setFormData] = useState({
    name: "",
    parrent: "",
    type: "",
  });
  const { expenseHeadParent } = useStateContext();
  //All State

  const submitForm = (event) => {
    event.preventDefault();

    axios
      .post("/post-expense-head", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((ee) => {
        console.log(ee);
      });
    console.log(formData);
  };
  //console.log(expenseHeadParent);
  return (
    <Box>
      <Dialog open={open} fullWidth maxWidth={"xs"}>
        <form onSubmit={submitForm} encType="multiple/form-data">
          <CardBody className="flex flex-col gap-4 p-8">
            <div className="relative mb-5 ">
              <h3 className="m-auto text-2xl font-medium text-blue-gray-400">
                Add Expense Head
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
              required
              variant="standard"
              size="lg"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Select
              variant="standard"
              label="Parent"
              onChange={(val) => setFormData({ ...formData, parrent: val })}
            >
              {expenseHeadParent.map((option) => (
                <Option key={option.id} value={option.id.toString()}>
                  {option.name}
                </Option>
              ))}
            </Select>

            <Select
              variant="standard"
              label="Head Type"
              onChange={(val) => setFormData({ ...formData, type: val })}
              required
            >
              <Option value="0">Expense Head</Option>
              <Option value="1">Income Head</Option>
            </Select>
          </CardBody>
          <div className="mr-5 mb-6 flex justify-end">
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="small"
            >
              Save
            </Button>
          </div>
        </form>
      </Dialog>
    </Box>
  );
};

export default ExpenseHeadForm;
