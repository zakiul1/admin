import { Box, Dialog, Button } from "@mui/material";
import { CardBody, Input, Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axiosCall from "../../../../axios-client";

import TreeItemView from "./TreeItemView";

const ExpenseHeadForm = ({ open, handleClose, setOpen, data }) => {
  //All State
  const [formData, setFormData] = useState({
    name: "",
    parent: "0",
    type: "",
  });
  console.log(data);
  //All State

  const getId = (nodeId) => {
    console.log(nodeId);
    // return nodeId;
  };
  const submitForm = (event) => {
    event.preventDefault();
    // console.log(getId());
    //setFormData((prev) => console.log(prev));
    //console.log()

    /*  axiosCall
      .post("/post-expense-head", formData)
      .then((res) => {
        setupdateDataTable((prev) => prev + 1);
        handleClose();
      })
      .catch((ee) => {
        console.log(ee);
      }); */
  };

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
            {/*    <DropdownTreeSelect
              data={data}
              onChange={onChange}
              onAction={onAction}
              onNodeToggle={onNodeToggle}
              multiSelect={false}
              showPartiallySelected={true}
              showDropdown="true"
            /> */}
            <TreeItemView data={data} getId={getId} />
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
