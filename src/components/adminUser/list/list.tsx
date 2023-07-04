import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material";

//Information
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";

import BadgeIcon from "@mui/icons-material/Badge";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookIcon from "@mui/icons-material/Book";

import { token } from "../../../theme";
import Residence from "./Residence";
import PrintIcon from '@mui/icons-material/Print';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "adresse",
    headerName: "Adresse",
    width: 150,
    editable: true,
  },
  {
    field: "Sexe",
    headerName: "Sexe",
    width: 120,
    editable: true,
  },
  {
    field: "Phone",
    headerName: "Numéro Téléphone",
    width: 150,
    editable: true,
  },
  {
    field: "cin",
    headerName: "Numéro CIN",
    type: "number",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
  {
    id: 2,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
  {
    id: 3,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
  {
    id: 4,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
  {
    id: 5,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
  {
    id: 6,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
  {
    id: 7,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
  {
    id: 8,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
  {
    id: 9,
    lastName: "Aloy ",
    firstName: "RAMANANDRAIBE",
    adresse: "FBC 84",
    Sexe: "Homme",
    Phone: "0345162578",
    cin: 169069269369,
  },
];

export default function List() {
  const [open, setOpen] = React.useState(false);
  const [openResidence, setOpenResidence] = React.useState(false);
  const [currentRow, setCurrentRow] = React.useState<GridRowParams>();

  const handleClickOpen = (params: GridRowParams) => {
    setCurrentRow(params);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handelOpenDialogResidence = () =>{
    setOpenResidence(true);
  };
  const closeDialogResidence = () =>{
    setOpenResidence(false);
  };


  const theme = useTheme();
  const colors = token(theme.palette.mode);

  //Pour récupérer les valeurs : {currentRow?.row?.lastName}

  return (
    <div>
      <Typography sx={{ m: 1, pl: 3 }} variant="h4">
        Liste
      </Typography>
      <Box sx={{ height:"550px", width: "100%", p: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          sx={{
            cursor: "alias",
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          onRowClick={handleClickOpen}
        />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          <Box>
            {"Informations"}
            <Box sx={{position:"absolute", display: "flex", justifyContent: "flex-end",top:10, right:20 }}>
              <IconButton sx={{ color: colors.greenAccent[500]}} onClick={handelOpenDialogResidence} >
                <BadgeIcon />
              </IconButton>

              <IconButton sx={{ color: colors.greenAccent[500]}}>
                <AccountBoxIcon />
              </IconButton>

              <IconButton sx={{ color: colors.greenAccent[500]}}>
                <BookIcon />
              </IconButton>
            </Box>
          </Box>



          <Dialog maxWidth={'xl'} sx={{ml:"15rem"}} open={openResidence} onClose={closeDialogResidence}>
              <Residence/>
              <DialogActions>
                <IconButton color="primary">
                  <PrintIcon/>
                </IconButton>
              </DialogActions>
          </Dialog>



        </DialogTitle>


        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Card
                sx={{
                  minWidth: "280px",
                  backgroundColor: "lightgray",
                  color: "white",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200px"
                    image="/public/id.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {currentRow?.row?.firstName} {currentRow?.row?.lastName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginRight: "auto",
                  marginTop: "5px",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Nom"
                  value={currentRow?.row?.firstName}
                  disabled
                  style={{ width: "250px" }}
                />
                <TextField
                  id="standard-basic"
                  label="Prénom"
                  value={currentRow?.row?.lastName}
                  disabled
                />
                <TextField
                  id="standard-basic"
                  label="Age"
                  value={currentRow?.row?.age}
                  disabled
                />
                <TextField
                  id="standard-basic"
                  label="Sexe"
                  value={currentRow?.row?.Sexe}
                  disabled
                />
              </Box>
            </Box>

            <TextField
              id="standard-basic"
              label="Date de naissance"
              value={currentRow?.row?.Ddn}
              disabled
              style={{ marginTop: "10px", width: "100%", marginRight: "5px" }}
            />

            <Box
              sx={{
                display: "flex",
                marginTop: "5px",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="standard-basic"
                label="Nom du Père"
                value={currentRow?.row?.pere}
                disabled
                style={{ marginTop: "10px", width: "100%", marginRight: "5px" }}
              />
              <TextField
                id="standard-basic"
                label="Nom de la mère"
                value={currentRow?.row?.mere}
                disabled
                style={{ marginTop: "10px", width: "100%", marginLeft: "5px" }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "5px",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="standard-basic"
                label="Adresse"
                value={currentRow?.row?.adresse}
                disabled
                style={{ marginTop: "10px", width: "100%", marginRight: "5px" }}
              />
              <TextField
                id="standard-basic"
                label="Fokontany"
                value={currentRow?.row?.Fokotany}
                disabled
                style={{ marginTop: "10px", width: "100%", marginLeft: "5px" }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "5px",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="standard-basic"
                label="Numéro de téléphone"
                value={currentRow?.row?.Phone}
                disabled
                style={{ marginTop: "10px", width: "100%", marginRight: "5px" }}
              />
              <TextField
                id="standard-basic"
                label="CIN"
                value={currentRow?.row?.cin}
                disabled
                style={{ marginTop: "10px", width: "100%", marginLeft: "5px" }}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
