import { TreeItem, TreeView } from "@mui/lab";
import { Fab, Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { FiEye, FiTrash } from "react-icons/fi";
import { HiChevronRight, HiChevronDown, HiPencil } from "react-icons/hi2";

const SubTable = ({ data }) => {
  const [track, setTract] = useState(false);
  const handleCick = () => {
    setTract(!track);
  };
  const handleView = (id) => {
    console.log(id);
  };
  return (
    <>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <div className="mx-3 mb-2 flex h-12 flex-row items-center border-b-2">
              <div
                onClick={handleCick}
                className="flex basis-1/2  items-center"
              >
                {item.child && (
                  <div>{track ? <HiChevronDown /> : <HiChevronRight />}</div>
                )}
                {item.name}
              </div>
              <div className="flex-none basis-1/2">
                <Stack direction="row" spacing={1}>
                  <Tooltip title="View Details">
                    <Fab
                      variant="extended"
                      onClick={() => handleView(item.id)}
                      size="small"
                      color="primary"
                      aria-label="view"
                      id={item.id}
                    >
                      <FiEye />
                    </Fab>
                  </Tooltip>

                  <Tooltip title="Edit">
                    <Fab
                      /*     onClick={handleEdit} */
                      size="small"
                      color="secondary"
                      aria-label="edit"
                      variant="extended"
                    >
                      <HiPencil />
                    </Fab>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Fab
                      /*   onClick={handleDelete} */
                      size="small"
                      color="warning"
                      aria-label="delete"
                      variant="extended"
                    >
                      <FiTrash />
                    </Fab>
                  </Tooltip>
                </Stack>
              </div>
            </div>

            <div className="ml-4 hidden">
              {item.child && <SubTable data={item.child} />}
            </div>
          </div>
        ))}
    </>
  );
};

export default SubTable;
