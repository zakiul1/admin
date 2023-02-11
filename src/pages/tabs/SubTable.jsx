import { TreeItem, TreeView } from "@mui/lab";
import { Fab, Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { FiEye, FiTrash } from "react-icons/fi";
import { HiChevronRight, HiChevronDown, HiPencil } from "react-icons/hi2";

const SubTable = ({ data }) => {
  const [openNodes, setOpenNodes] = useState([]);

  const handleClick = (id) => {
    if (openNodes.includes(id)) {
      setOpenNodes(openNodes.filter((nodeId) => nodeId !== id));
    } else {
      setOpenNodes([...openNodes, id]);
    }
  };

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <div
            onClick={() => handleClick(item.id)}
            style={{ cursor: "pointer" }}
            className="mx-3 mb-2 flex h-12 flex-row items-center border-b-2"
          >
            <div className={"flex-none basis-1/2"}>
              <div className="flex">
                {item.children && (
                  <div>
                    {openNodes.includes(item.id) ? (
                      <HiChevronDown />
                    ) : (
                      <HiChevronRight />
                    )}
                  </div>
                )}
                <div> {item.name}</div>
              </div>
            </div>
            <div>
              <button>edit</button>
              <button>Delete</button>
            </div>
          </div>
          {item.children && openNodes.includes(item.id) && (
            <div className="ml-5">
              <SubTable
                data={item.children}
                openNodes={openNodes}
                setOpenNodes={setOpenNodes}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubTable;
