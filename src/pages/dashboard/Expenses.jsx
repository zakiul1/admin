import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
const Expenses = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 2,
    maxColumns: 8,
  });

  return (
    <div className="mt-12">
      <div className="relative mb-12 grid md:grid-cols-1 xl:grid-cols-1">
        <div className="absolute right-0 top-[-15px] z-10">
          <Link className="" to={"/dashboard/expenses/transaction"}>
            <Button className="bg-green-400">
              <MdAdd />
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
