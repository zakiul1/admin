import { TreeItem, TreeView } from "@mui/lab";
import React from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

const TryTree = ({ data }) => {
  /*   const { row } = data; */

  const func = () => {};
  return (
    <>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<HiChevronDown />}
        defaultExpandIcon={<HiChevronRight />}
        sx={{
          flexGrow: 1,
          maxHeight: 200,
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: "10px",
        }}
        onNodeSelect={func}
      >
        <TreeItem nodeId={data.id} label={data.name}>
          {data.child &&
            data.child.map((item) => (
              <TreeItem key={item.id} nodeId={item.id} label={item.name}>
                {item.child && <TryTree data={item.child} />}
              </TreeItem>
            ))}
        </TreeItem>
      </TreeView>
    </>
  );
};

export default TryTree;
