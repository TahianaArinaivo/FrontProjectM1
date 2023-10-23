type Demande = {
  demandeId: number;
  dateDemande: Date;
  typeDemande: "cin" | "copie" | "residence";
  status: "pending" | "completed" | "cancel";
  userId: number;
};

export default Demande;
