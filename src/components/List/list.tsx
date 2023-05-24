import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowParams, GridValueGetterParams } from '@mui/x-data-grid';
import Information from './information';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//Information
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import TextField from '@mui/material/TextField';
  

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'pere',
    headerName: 'Nom du père',
    width: 200,
    editable: true,
  },
  {
    field: 'mere',
    headerName: 'Nom de la mère',
    width: 200,
    editable: true,
  },
  {
    field: 'adresse',
    headerName: 'Adresse',
    width: 150,
    editable: true,
  },
  {
    field: 'Ddn',
    headerName: 'Date de naissance',
    width: 150,
    editable: true,
  },
  {
    field: 'Sexe',
    headerName: 'Sexe',
    width: 120,
    editable: true,
  },
  {
    field: 'Phone',
    headerName: 'Numéro Téléphone',
    width: 150,
    editable: true,
  },
  {
    field: 'cin',
    headerName: 'Numéro CIN',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'Fokotany',
    headerName: 'Fokotany',
    width: 200,
    editable: true,
  }
];

const rows = [
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , Fokotany: 'Ambohipo'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 , Fokotany: 'Ambohipo'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , Fokotany: 'Zmbohipo'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , Fokotany: 'Ambohipo'},
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 , Fokotany: 'Ambohipo'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , Fokotany: 'Fmbohipo'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , Fokotany: 'Ambohipo'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO kAPOKA va', mere: 'ANARANA Vehivavy',adresse:'JGD 69 BIS', Ddn:'69 Juillet 1969', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 35 , Fokotany: 'Ambohipo'},
];

export default function list() {
  const [open, setOpen] = React.useState(false);
  const [currentRow, setCurrentRow] = React.useState<GridRowParams>()

  const handleClickOpen = (params:GridRowParams) => {
    setCurrentRow(params);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Pour récupérer les valeurs : {currentRow?.row?.lastName}

  return (
    <div>
    <Box sx={{ height: 470, width: '120%' }}>
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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Modifier les informations "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">


          <Box
            sx={{
              display: "flex",
              justifyContent: ""
            }}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                width="500"
                height="200"
                image="/public/cin.jpg"
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
                marginLeft: "50px",
                marginTop: "5px",
                justifyContent: "space-between"
              }}>
                <TextField id="standard-basic" label="Nom" value={currentRow?.row?.firstName} disabled />
                <TextField id="standard-basic" label="Prénom" value={currentRow?.row?.lastName} disabled />
                <TextField id="standard-basic" label="Age" value={currentRow?.row?.age} disabled />       
                <TextField id="standard-basic" label="Sexe" value={currentRow?.row?.Sexe} disabled />       
            </Box>
          </Box>
          
          <TextField id="standard-basic" label="Date de naissance" value={currentRow?.row?.Ddn} disabled style={{marginTop: "10px", width:"100%", marginRight: "5px"}}/>

          <Box
            sx={{
              display: "flex",
              marginTop: "5px",
              justifyContent: "space-between"
            }}>
            <TextField id="standard-basic" label="Nom du Père" value={currentRow?.row?.pere} disabled style={{marginTop: "10px", width:"100%", marginRight: "5px"}}/>
            <TextField id="standard-basic" label="Nom de la mère" value={currentRow?.row?.mere} disabled style={{marginTop: "10px" ,width: "100%", marginLeft: "5px"}}/>              
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "5px",
              justifyContent: "space-between"
            }}>
            <TextField id="standard-basic" label="Adresse" value={currentRow?.row?.adresse} disabled style={{marginTop: "10px", width:"100%", marginRight: "5px"}}/>
            <TextField id="standard-basic" label="Fokontany" value={currentRow?.row?.Fokotany} disabled style={{marginTop: "10px" ,width: "100%", marginLeft: "5px"}}/>              
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "5px",
              justifyContent: "space-between"
            }}>
            <TextField id="standard-basic" label="Numéro de téléphone" value={currentRow?.row?.Phone} disabled style={{marginTop: "10px", width:"100%", marginRight: "5px"}}/>
            <TextField id="standard-basic" label="CIN" value={currentRow?.row?.cin} disabled style={{marginTop: "10px" ,width: "100%", marginLeft: "5px"}}/>              
          </Box>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose} autoFocus>
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}