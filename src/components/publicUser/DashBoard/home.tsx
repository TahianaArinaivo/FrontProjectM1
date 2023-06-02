import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Row {
  date:Date,
  type:string,
  dateReception:Date,
  state:boolean
}

export default function HomePublicUser() {
  const [typeSelect, setTypeSelect] = React.useState("");
  const [rows,setRows] = React.useState<Row[]>([])

  const type = [
    {
      value: "cin",
      label: "CIN",
    },
    {
      value: "residence",
      label: "RESIDENCE",
    },
    {
      value: "copie",
      label: "COPIE",
    },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setTypeSelect(event.target.value as string);
  };

  const handelSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      console.log(typeSelect);
      if(typeSelect === "") return
      setRows((prev)=>[...prev, {type: typeSelect, date: new Date, dateReception: new Date, state: true} ])
    }

  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
        flexGrow: 1,
        width: "150vh",
        mt: "3rem",
        minWidth: 120,
      }}
    >
        <Typography sx={{ m: 1 }} variant="h4">
         Vos Demandes:
        </Typography>
      <FormControl fullWidth sx={{mb:"3rem", maxWidth: "50%"}}>
        <InputLabel id="demo-simple-select-label">Type de demande</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeSelect}
          label="Age"
          onChange={handleChange}
        >
          {type.map((e) => (
            <MenuItem key={e.value} value={e.value}>{e.label}</MenuItem>
          ))}
        </Select>
        <Button variant="contained" onClick={handelSubmit} sx={{width:"25%", alignSelf: "end", marginTop: 1}}>Demander</Button>
      </FormControl>


      <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date de création</TableCell>
            <TableCell>Type de demande</TableCell>
            <TableCell>Date de réception</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date.getDate()}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.dateReception.getDate()}</TableCell>
              <TableCell >{row.state ? "En attente": "terminé"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>

    </Box>
  );
}
