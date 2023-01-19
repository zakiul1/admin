import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Company from "../tabs/Company";
import Employee from "../tabs/Employee";
import Account from "../tabs/Account";
import {
  HiOutlineBuildingLibrary,
  HiOutlineUserGroup,
  HiOutlineCurrencyDollar,
  HiOutlineListBullet,
} from "react-icons/hi2";
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
            <Tab
              icon={<HiOutlineBuildingLibrary size="24px" />}
              label="Company"
              value="1"
            />

            <Tab
              label="Employee"
              value="2"
              icon={<HiOutlineUserGroup size="24px" />}
            />
            <Tab
              label="Account"
              value="3"
              icon={<HiOutlineCurrencyDollar size="24px" />}
            />
            <Tab
              label="Expense Head"
              value="4"
              icon={<HiOutlineListBullet size="24px" />}
            />
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
