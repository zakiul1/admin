import ViewForm from "@/pages/tabs/view/ViewForm";

export const expensesDataColum = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "expenses_head_id",
    headerName: "Name",
    width: 180,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
    editable: true,
  },
  {
    field: "employ_id",
    headerName: "Expense By",
    width: 150,
    editable: true,
  },
  {
    field: "expense_description",
    headerName: "Description",
    width: 150,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: true,
  },
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
