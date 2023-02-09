import { TreeTable, TreeState } from "cp-react-tree-table";
import { useState } from "react";
import SubTable from "./SubTable";

export default function Table({ data }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block w-full p-1.5 align-middle">
          <div className="overflow-hidden rounded-lg border">
            {/* Header */}
            <div className="mx-3 mb-2 flex h-12 flex-row items-center border-b-2">
              <div className="flex-none basis-1/2">Name</div>
              <div className="flex-none basis-1/2">Action</div>
            </div>
            {/* Header */}
            <SubTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
