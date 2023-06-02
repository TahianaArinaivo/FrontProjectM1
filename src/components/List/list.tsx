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
  { id: 1, lastName: 'Aloy ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO  Francis', mere: 'RAZEFA',adresse:'FBC 84', Ddn:'21 Mars 1957', Sexe:'Homme', Phone: '0345162578', cin: 169069269369,age: 25 , Fokotany: 'Ankadivato'},
  { id: 2, lastName: 'Patrick ', firstName: 'RAKOTO', pere: 'RAKOTO Benja', mere: 'ANARANA Sipa',adresse:'FIA 94', Ddn:'16 Juillet 1945', Sexe:'Homme', Phone: '0346960969', cin: 169069269329,age: 35 , Fokotany: 'Ambohipo'},
  { id: 3, lastName: 'Tendry ', firstName: 'RANDREMA', pere: 'RAKOTO Nirina ', mere: 'Vehivavy',adresse:'FEF 24', Ddn:'12 Septembre 1992', Sexe:'Femme', Phone: '0326957451', cin: 169069269369,age: 23 , Fokotany: 'Analakely'},
  { id: 4, lastName: 'Kevin ', firstName: 'RANDRIA', pere: 'RAKOTO  Feno', mere: 'MAmaliza',adresse:'ZEFD 685', Ddn:'16 Juillet 1945', Sexe:'Femme', Phone: '0326957451', cin: 169069269369,age: 28 , Fokotany: 'Ankadivato'},
  { id: 5, lastName: 'Benja ', firstName: 'FENO', pere: 'RAKOTO  Poivron', mere: 'Iaz Marina',adresse:'ZEAF 584', Ddn:'16 Juillet 1945', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 21 , Fokotany: 'Anosy'},
  { id: 6, lastName: 'Nirina ', firstName: 'KOTOBE', pere: 'RAKOTO  Tomate', mere: 'Test Anarana',adresse:'THE 3554', Ddn:'12 Septembre 1992', Sexe:'Homme', Phone: '0326957451', cin: 169069269369,age: 22 , Fokotany: 'Analakely'},
  { id: 7, lastName: 'Sitraka ', firstName: 'LETSARA', pere: 'RAKOTO  Oigong', mere: 'Nom',adresse:'NTS 32', Ddn:'16 Juillet 1945', Sexe:'Femme', Phone: '0346960969', cin: 169069269369,age: 23 , Fokotany: 'Ankadivato'},
  { id: 8, lastName: 'Tahiana ', firstName: 'NIRINA', pere: 'RAKOTO  Crepin', mere: 'Prenom',adresse:' G3G2G 52', Ddn:'12 Septembre 1992', Sexe:'Femme', Phone: '0346960969', cin: 169069269369,age: 25 , Fokotany: 'Anosy'},
  
  { id: 9, lastName: 'Portal ', firstName: 'RAZEFA', pere: 'RAKOTO  Histoire', mere: 'Qui',adresse:'ZEFG5 54', Ddn:'16 Juillet 1945', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 24 , Fokotany: 'Ankadivato'},
  { id: 10, lastName: 'Feno ', firstName: 'BERTRAND', pere: 'RAKOTO  Dortoire', mere: 'Est Le',adresse:'GR3 54', Ddn:'32 Decembre 1968', Sexe:'Femme', Phone: '0326957451', cin: 169069269369,age: 21, Fokotany: 'Analakely'},
  { id: 11, lastName: 'Alika ', firstName: 'MARCHANDISE', pere: 'RAKOTO Antoine ', mere: 'Nomde',adresse:'EZF 2154', Ddn:'32 Decembre 1968', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 25 , Fokotany: 'Ankadivato'},
  { id: 12, lastName: 'Anarana ', firstName: 'SACRIFICE', pere: 'RAKOTO  Selstin', mere: 'Fille',adresse:'ZEG 54', Ddn:'32 Decembre 1968', Sexe:'Femme', Phone: '0346960969', cin: 169069269369,age: 27 , Fokotany: 'Analakely'},
  { id: 13, lastName: 'Iza ', firstName: 'MENTION', pere: 'RAKOTO  ', mere: 'Idiot',adresse:'E2F23 547', Ddn:'21 Decmbre 1985', Sexe:'Homme', Phone: '0326957451', cin: 169069269369,age: 28 , Fokotany: 'Anosy'},
  { id: 14, lastName: 'Koto ', firstName: 'MAMANA', pere: 'RAKOTO  ', mere: 'Nirina',adresse:'23F2 57', Ddn:'13 Mai 1975', Sexe:'Femme', Phone: '031587548', cin: 169069269369,age: 22 , Fokotany: 'Ankadivato'},
  { id: 15, lastName: 'Benjamina ', firstName: 'RAVAO', pere: 'RAKOTO  ', mere: 'Zefaniaina',adresse:'AZ 989', Ddn:'01 Avril 1966', Sexe:'Femme', Phone: '0349575268', cin: 169069269369,age: 23 , Fokotany: 'Analakely'},
  { id: 17, lastName: 'Bema ', firstName: 'RAMANANDRAIBE', pere: 'RAKOTO  Viande', mere: 'Anoinette',adresse:'AZ 54', Ddn:'16 Juillet 1945', Sexe:'Femme', Phone: '0326957451', cin: 169069269369,age: 27 , Fokotany: 'Ankadivato'},
  { id: 18, lastName: 'Robert ', firstName: 'RAKOTONAVA', pere: 'RAKOTO  Maillot', mere: 'Cotelette',adresse:'GEA 38', Ddn:'12 Septembre 1992', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 24 , Fokotany: 'Analakely'},
  { id: 19, lastName: 'Julien ', firstName: 'FITIAVANA', pere: 'RAKOTO  Voiture', mere: 'Idiote',adresse:'FRGA 54', Ddn:'16 Juillet 1945', Sexe:'Homme', Phone: '0326957451', cin: 169069269369,age: 25 , Fokotany: 'Ankadivato'},
  { id: 20, lastName: 'Zefa ', firstName: 'TEST', pere: 'RAKOTO  Fille', mere: '',adresse:'Andreas', Ddn:'NYE 65', Sexe:'Femme', Phone: '0326957451', cin: 169069269369,age: 25 , Fokotany: 'Anosy'},
  { id: 21, lastName: 'Portal ', firstName: 'RAZEFA', pere: 'RAKOTO  Histoire', mere: 'Qui',adresse:'ZEFG5 54', Ddn:'16 Juillet 1945', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 24 , Fokotany: 'Ankadivato'},
  { id: 22, lastName: 'Feno ', firstName: 'BERTRAND', pere: 'RAKOTO  Dortoire', mere: 'Est Le',adresse:'GR3 54', Ddn:'32 Decembre 1968', Sexe:'Femme', Phone: '0326957451', cin: 169069269369,age: 21, Fokotany: 'Analakely'},
  { id: 23, lastName: 'Alika ', firstName: 'MARCHANDISE', pere: 'RAKOTO Antoine ', mere: 'Nomde',adresse:'EZF 2154', Ddn:'32 Decembre 1968', Sexe:'Homme', Phone: '0346960969', cin: 169069269369,age: 25 , Fokotany: 'Ankadivato'},
  { id: 24, lastName: 'Anarana ', firstName: 'SACRIFICE', pere: 'RAKOTO  Selstin', mere: 'Fille',adresse:'ZEG 54', Ddn:'32 Decembre 1968', Sexe:'Femme', Phone: '0326957451', cin: 169069269369,age: 27 , Fokotany: 'Analakely'},
  { id: 25, lastName: 'Iza ', firstName: 'MENTION', pere: 'RAKOTO  ', mere: 'Idiot',adresse:'E2F23 547', Ddn:'21 Decmbre 1985', Sexe:'Homme', Phone: '0326957451', cin: 169069269369,age: 28 , Fokotany: 'Anosy'},
  { id: 26, lastName: 'Koto ', firstName: 'MAMANA', pere: 'RAKOTO  ', mere: 'Nirina',adresse:'23F2 57', Ddn:'13 Mai 1975', Sexe:'Femme', Phone: '031587548', cin: 169069269369,age: 22 , Fokotany: 'Ankadivato'},
  { id: 27, lastName: 'Benjamina ', firstName: 'RAVAO', pere: 'RAKOTO  ', mere: 'Zefaniaina',adresse:'AZ 989', Ddn:'01 Avril 1966', Sexe:'Femme', Phone: '0349575268', cin: 169069269369,age: 23 , Fokotany: 'Analakely'},
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
    <Box sx={{ height: 500, width: '120%' }}>
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
          <Card sx={{ minWidth: "280px", backgroundColor: "lightgray" , color: "white" }}>
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
                justifyContent: "space-between"
              }}>
                <TextField id="standard-basic" label="Nom" value={currentRow?.row?.firstName} disabled style={{width: "250px"}}/>
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