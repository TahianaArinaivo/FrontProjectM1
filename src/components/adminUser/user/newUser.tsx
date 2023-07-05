import React from 'react';
import Dialog from "@mui/material/Dialog";
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box } from '@mui/material';
import { useRecoilState } from "recoil";
import dialogAtom from "../../../atom/dialogAtom";

function NewUser() {
    const [showDialog, setShowDialog] = useRecoilState(dialogAtom);
  return (
    <div>
        <Dialog open>
        <DialogTitle sx={{fontFamily: "'Work Sans', sans-serif"}}>Nouvelle utilisateur</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{p:2, fontFamily: "'Work Sans', sans-serif"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia odio,
         minima beatae quam fugit, ad animi aut quibusdam facilis,
           </DialogContentText>
          <Box sx={{justifyContent:"space-between",fontFamily: "'Work Sans', sans-serif"}}>
          <TextField   id="firstNameId" fullWidth label="Nom" variant="outlined" sx={{marginBottom:"1rem"}} />
          <TextField  id="lastNameId" fullWidth label="Prenom" variant="outlined" sx={{marginBottom:"1rem"}} />
          <TextField  id="jobId" fullWidth label="Profession" variant="outlined" sx={{marginBottom:"1rem"}} />         
          <TextField  id="homeId" fullWidth label="Lieu" variant="outlined" sx={{marginBottom:"1rem"}} />
          <TextField  id="emailId" fullWidth label="Email" variant="outlined" sx={{marginBottom:"1rem"}} />
          <TextField  id="mdpsId" fullWidth label="Mot de passe" variant="outlined" sx={{marginBottom:"1rem"}} />
          </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)}>Annuler</Button>
          <Button onClick={() => setShowDialog(false)}>Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NewUser