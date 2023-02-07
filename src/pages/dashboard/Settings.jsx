import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import Company from "../tabs/Company";
import Employee from "../tabs/Employee";
import Account from "../tabs/Account";
import ExpenseHead from "../tabs/ExpenseHead";

export default function Settings() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            textColor="secondary"
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Company" value="1" />

            <Tab label="Employee" value="2" />
            <Tab label="Account" value="3" />
            <Tab label="Expense Head" value="4" />
          </TabList>
        </Box>
        <TabPanel sx={{ padding: "0px" }} className="" value="1">
          <Company />
        </TabPanel>
        <TabPanel sx={{ padding: "0px" }} value="2">
          <Employee />
        </TabPanel>
        <TabPanel sx={{ padding: "0px" }} value="3">
          <Account />
        </TabPanel>
        <TabPanel sx={{ padding: "0px" }} value="4">
          <ExpenseHead />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
