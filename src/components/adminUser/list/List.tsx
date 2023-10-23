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
import PrintIcon from "@mui/icons-material/Print";
import { useGetUser, useGetUserById } from "../../../hooks/useUser";
import { useGetDemande } from "../../../hooks/useDemande";
import { formatDate, getStatus } from "../../../helpers/utils";
import { withAsync } from "../../../helpers/withAsync";
import { UserService } from "../../../services/UserService";
import { User } from "../../publicUser/types/User";
import { Data } from "../../../types/Data";

const columns: GridColDef[] = [
  { field: "id", headerName: "DemandeId", width: 90 },

  {
    field: "DateDemande",
    headerName: "DateDemande",
    width: 150,
    editable: true,
  },
  {
    field: "TypeDemande",
    headerName: "TypeDemande",
    width: 150,
    editable: true,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 150,
    editable: true,
  },
  {
    field: "UserId",
    headerName: "Utuliseteur ID",
    width: 150,
    editable: true,
  },
];

export default function List() {
  const [open, setOpen] = React.useState(false);
  const [openResidence, setOpenResidence] = React.useState(false);
  const [currentRow, setCurrentRow] = React.useState<GridRowParams>();
  const [currentUser, setCurrentUser] = React.useState<User>({} as User);
  const [rows, setRows] = React.useState<any[]>([]);
  const { data } = useGetDemande();

  React.useEffect(() => {
    if (data) {
      data.result?.map(function (demande) {
        const newRow = {
          id: demande.demandeId,
          DateDemande: formatDate(demande.dateDemande),
          TypeDemande: demande.typeDemande,
          Status: getStatus(demande.status),
          UserId: demande.userId,
        };
        setRows((prevRows) => [...prevRows, newRow]);
      });
    }
  }, [data?.result]);

  const handleClickOpen = async (params: GridRowParams) => {
    try {
      setCurrentRow(params);
      const data = await UserService.getById(8);
      setOpen(true);
      console.log("data:", data?.result);
      const dataTmp =  data?.result
      setCurrentUser(data?.result);
    } catch (e) {
      return e;
    }
  };

  console.log(currentUser);

  const handleClose = () => {
    setOpen(false);
  };

  const handelOpenDialogResidence = () => {
    setOpenResidence(true);
  };
  const closeDialogResidence = () => {
    setOpenResidence(false);
  };

  const theme = useTheme();
  const colors = token(theme.palette.mode);

  //Pour récupérer les valeurs : {currentRow?.row?.lastName}

  return (
    <div>
      <Typography
        sx={{ m: 1, pl: 3, fontFamily: "'Work Sans', sans-serif" }}
        variant="h4"
      >
        Liste des demandes
      </Typography>
      <Box
        sx={{
          height: "550px",
          width: "100%",
          p: 3,
          fontFamily: "'Work Sans', sans-serif",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          <Box>
            {"Informations"}
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-end",
                top: 10,
                right: 20,
              }}
            >
              <IconButton
                sx={{ color: colors.greenAccent[500] }}
                onClick={handelOpenDialogResidence}
              >
                <BadgeIcon />
              </IconButton>

              <IconButton sx={{ color: colors.greenAccent[500] }}>
                <AccountBoxIcon />
              </IconButton>

              <IconButton sx={{ color: colors.greenAccent[500] }}>
                <BookIcon />
              </IconButton>
            </Box>
          </Box>

          <Dialog
            maxWidth={"xl"}
            sx={{ ml: "15rem" }}
            open={openResidence}
            onClose={closeDialogResidence}
          >
            <Residence props={currentUser} />
            <DialogActions>
              <IconButton color="primary">
                <PrintIcon />
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
              ></Card>

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
                  value={currentUser?.name}
                  disabled
                  style={{ width: "250px" }}
                />
                <TextField
                  id="standard-basic"
                  label="Prénom"
                  value={currentUser?.lastName}
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
                  value={currentUser?.sex}
                  disabled
                />
              </Box>
            </Box>

            <TextField
              id="standard-basic"
              label="Date de naissance"
              value={currentUser?.birth}
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
                value={currentUser?.fathersName}
                disabled
                style={{ marginTop: "10px", width: "100%", marginRight: "5px" }}
              />
              <TextField
                id="standard-basic"
                label="Nom de la mère"
                value={currentUser?.mothersName}
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
                value={currentUser?.address}
                disabled
                style={{ marginTop: "10px", width: "100%", marginRight: "5px" }}
              />
              <TextField
                id="standard-basic"
                label="Profession"
                value={currentUser?.job}
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
                value={currentUser?.tel}
                disabled
                style={{ marginTop: "10px", width: "100%", marginRight: "5px" }}
              />
              <TextField
                id="standard-basic"
                label="CIN"
                value={currentUser?.numCIN}
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
