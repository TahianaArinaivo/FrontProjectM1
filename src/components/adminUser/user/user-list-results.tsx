import * as React from "react";
import { DataGrid, GridColDef, GridRowParams, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Button, Dialog, Grid } from "@mui/material";
import {useRecoilState} from 'recoil'
import dialogAtom from "../../../atom/dialogAtom";
import CustomDialog from "../../Dialog";
import NewUser from "./newUser";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "Nom", headerName: "Nom", width: 190 },
  { field: "Prénom", headerName: "Prénom", width: 190 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "Nom complet",
    headerName: "Nom complet",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.Nom || ""} ${params.row.Prénom || ""}`,
  },
];

const rows = [
  { id: 1, Prénom: "Snow", Nom: "Jon", age: 35 },
];

export default function UserListResults() {
  const [showDialog, setShowDialog] = useRecoilState(dialogAtom);

  const [open, setOpen] = React.useState(false);
  const [currentRow, setCurrentRow] = React.useState<GridRowParams>()

  const handleClickOpen = (params:GridRowParams) => {
    setCurrentRow(params);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ height: 400, width: '100%',fontFamily: "'Work Sans', sans-serif" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        onRowClick={handleClickOpen}
      />
          <CustomDialog open={showDialog}>
              <NewUser/>
          </CustomDialog>
    </Box>
  );
}
