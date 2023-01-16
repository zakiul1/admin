import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Company from "../tabs/Company";
import Employee from "../tabs/Employee";
import Account from "../tabs/Account";

export default function Settings() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Company" value="1" />
            <Tab label="Employee" value="2" />
            <Tab label="Account" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={{ padding: "0px" }} className="" value="1">
          <Company />
        </TabPanel>
        <TabPanel sx={{ padding: "0px" }} value="2">
          <Employee />
        </TabPanel>
        <TabPanel sx={{ padding: "0px" }} value="3">
          {" "}
          <Account />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
