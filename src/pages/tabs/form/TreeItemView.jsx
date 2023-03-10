import { TreeItem, TreeView } from "@mui/lab";
import { HiChevronRight, HiChevronDown } from "react-icons/hi2";

const TreeItemView = ({ data, getId }) => {
  const func = (e, nodeId) => {
    console.log(e.currentTarget.classList.add("addColor"));
    return getId(nodeId);
  };
  return (
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
      {data &&
        data.map((item) => {
          const { id, name, child } = item;

          return (
            <TreeItem key={id} nodeId={id.toString()} label={name}>
              {child?.length && <TreeItemView data={child} getId={getId} />}
            </TreeItem>
          );
        })}
    </TreeView>
  );
};

export default TreeItemView;
