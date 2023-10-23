import moment from "moment";

export const datePlus2Days = (date: Date) => {
  const formatWithMoment = moment(date);
  const datePlus2Days = formatWithMoment.clone().add(2, "days");
  return datePlus2Days.format("D MMMM YYYY [à] HH[H]:mm");
};

export const getStatus = (status: "pending" | "completed" | "cancel") => {
  // "pending" | "completed" | "cancel";
  return status === "pending"
    ? "En attente"
    : status === "completed"
    ? "Terminer"
    : "Annuler";
};

export const formatDate = (date: Date) => {
  return moment(date).format("D MMMM YYYY [à] HH[H]:mm");
};
