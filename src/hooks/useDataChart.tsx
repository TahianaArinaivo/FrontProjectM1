import React, { useCallback } from "react";
import { User } from "../components/publicUser/types/User";
import moment from "moment";

export const useDataChart = (
  users?: User[],
  data?: { time: string; amount: number }[]
) => {
  const generateData = useCallback(() => {
    for (let index = 0; index <= 23; index++) {
      for (let j = 0; j < users?.length!; j++) {
        if (
          moment(users?.[j]?.createdAt, "YYYY-MM-DD HH:mm:ss.SSS Z").hour() ===
          index
        ) {
          data![index]!.amount! += 1;
        }
      }
    }
  }, [users]);
  return { generateData };
};
