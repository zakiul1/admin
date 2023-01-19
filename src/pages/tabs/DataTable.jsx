import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";

export default function DataTable({ data, coloum, loading }) {
  return (
    <Box sx={{ height: 480, width: "100%" }}>
      <DataGrid
        components={{
          LoadingOverlay: LinearProgress,
        }}
        rows={data}
        loading={loading}
        columns={coloum}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: false }}
      />
    </Box>
  );
}
