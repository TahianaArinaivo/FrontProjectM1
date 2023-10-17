import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";
import { useDataChart } from "../../../hooks/useDataChart";
import { User } from "../../publicUser/types/User";

function createData(time: string, amount: number) {
  return { time, amount };
}

const data = [
  createData("00:00", 0),
  createData("01:00", 0),
  createData("02:00", 0),
  createData("03:00", 0),
  createData("04:00", 0),
  createData("05:00", 0),
  createData("06:00", 0),
  createData("07:00", 0),
  createData("08:00", 0),
  createData("09:00", 0),
  createData("10:00", 0),
  createData("11:00", 0),
  createData("12:00", 0),
  createData("13:00", 0),
  createData("14:00", 0),
  createData("15:00", 0),
  createData("16:00", 0),
  createData("17:00", 0),
  createData("18:00", 0),
  createData("19:00", 0),
  createData("20:00", 0),
  createData("21:00", 0),
  createData("22:00", 0),
  createData("23:00", 0),
];

interface Props {
  users?: User[];
}

export default function Chart({ users }: Props) {
  const theme = useTheme();
  const { generateData } = useDataChart(users, data);

  React.useEffect(() => {
    if(users) {
      generateData();
    }
  }, [])


  return (
    <React.Fragment>
      <Title>Aujourd'hui</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Enregistement
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
