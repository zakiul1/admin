import ViewForm from "../view/ViewForm";

export const CompanyColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "name",
    headerName: "Name",
    width: 180,
    editable: true,
    headerAlign: "center",
  },

  {
    field: "contact",
    headerName: "Phone No",
    type: "number",
    width: 160,
    editable: true,
    headerAlign: "center",
    align: "left",
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
    editable: true,
    headerAlign: "center",
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
    editable: true,
    headerAlign: "center",
  },
  {
    field: "type",

    headerName: "Type",
    width: 100,
    align: "left",
    headerAlign: "left",
    editable: true,
    valueGetter: (params) => {
      if (params.row.type === 1) {
        return "Bank";
      } else {
        return "Customer";
      }
    },
  },
  ,
  {
    field: "action",
    headerName: "Action",
    align: "right",
    width: 180,
    sortable: false,
    headerAlign: "center",
    disableClickEventBubbling: false,
    renderCell: (params) => <ViewForm data={params} />,
  },
];
export const emlpoyeeColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 150,
    editable: true,
  },
  {
    field: "phone_number",
    headerName: "Phone Number",
    width: 110,
    editable: true,
  },
];
