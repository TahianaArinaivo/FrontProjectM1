import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Grid, Typography } from "@mui/material";
import SignalRService from "../../../services/SignalRService";

interface Row {
  date: Date;
  type: string;
  dateReception: Date;
  state: boolean;
}

interface Message {
  user: string;
  message: string;
}

export default function HomePublicUser() {
  const [typeSelect, setTypeSelect] = React.useState("");
  const [rows, setRows] = React.useState<Row[]>([]);
  const signalRService = new SignalRService();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [user, setUser] = React.useState("");
  const [message, setMessage] = React.useState("");

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

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(typeSelect);
    if (typeSelect === "") return;
    setRows((prev) => [
      ...prev,
      {
        type: typeSelect,
        date: new Date(),
        dateReception: new Date(),
        state: true,
      },
    ]);
  };

  React.useEffect(() => {
    signalRService.startConnection().then(() => {
      signalRService.addReceiveMessageListener((user, message) => {
        const updatedMessages = [...messages, { user, message }];
        setMessages(updatedMessages);
      });
    });
    return () => {
      signalRService.stopConnection();
    };
  }, []);

  const handleSendMessage = () => {
    signalRService.sendMessage(user, message).then(() => {
      // Do something after the message is sent, if needed
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "150vh",
        mt: "3rem",
        minWidth: 120,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Vos Demandes:
      </Typography>

      <Grid container>
        <Grid item md={10} xs={12}>
          <FormControl
            fullWidth
            variant="filled"
            sx={{ mb: "3rem", maxWidth: "50%" }}
          >
            <InputLabel id="demo-simple-select-label">
              Type de demande
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeSelect}
              label="Age"
              onChange={handleChange}
            >
              {type.map((e) => (
                <MenuItem key={e.value} value={e.value}>
                  {e.label}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              onClick={handelSubmit}
              sx={{ width: "25%", alignSelf: "end", marginTop: 1 }}
            >
              Demander
            </Button>
          </FormControl>
        </Grid>

        <Grid item md={12} xs={12}>
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
                    <TableCell>
                      {row.state ? "En attente" : "terminé"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
        </Grid>
      </Grid>
    </Box>
  );
}
