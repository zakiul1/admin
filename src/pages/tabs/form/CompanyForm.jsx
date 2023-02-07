import { Box, Dialog, Button } from "@mui/material";
import { CardBody, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Select, MenuItem, InputLabel } from "@mui/material";
const CompanyForm = ({ open, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      country: "",
      selectItem: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required*";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.name) {
        errors.name = "Required*";
      }
      if (!values.selectItem) {
        errors.selectItem = "Required*";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
    submitForm,
    setFieldValue,
    resetForm,
  } = formik;
  return (
    <Box>
      <Dialog open={open} fullWidth maxWidth={"xs"}>
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4 p-8">
            <div className="relative mb-5 ">
              <h3 className="m-auto text-2xl font-medium text-blue-gray-400">
                Add Company
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
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && (
              <div className="text-red-700">{errors.name}</div>
            )}
            <Input
              label="Email"
              variant="standard"
              size="lg"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div className="text-red-700">{errors.email}</div>
            )}
            <Input
              label="Address"
              variant="standard"
              size="lg"
              type="text"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            <Input
              variant="standard"
              label="Phone Number"
              size="lg"
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
            <Input
              variant="standard"
              label="Country"
              size="lg"
              type="text"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
            />
            <InputLabel id="select001">Select Company</InputLabel>
            <Select
              labelId="select001"
              variant="standard"
              name="selectItem"
              value={values.selectItem}
              onChange={(event) =>
                setFieldValue("selectItem", event.target.value)
              }
            >
              <MenuItem value="1">Customar</MenuItem>
              <MenuItem value="2">Bank</MenuItem>
              <MenuItem value="3">Factory</MenuItem>
            </Select>
            {errors.selectItem && touched.selectItem && (
              <div className="text-red-700">{errors.selectItem}</div>
            )}
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

export default CompanyForm;
