import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Expenses = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 2,
    maxColumns: 8,
  });

  return (
    <div className="mt-12">
      <div className="mb-12 grid md:grid-cols-1 xl:grid-cols-1">
        <div className="flex justify-end">
          <Link to={"/dashboard/expenses/transaction"}>
            <Button className="mb-3 " color="green">
              Add
            </Button>
          </Link>
        </div>

        <div style={{ height: 400, width: "100%" }}>
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid {...data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
