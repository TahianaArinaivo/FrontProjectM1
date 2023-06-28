import axios from "axios";
import { CONFIG } from "../../config";

const { API_URL, API_PORT } = CONFIG;
export async function FetchCinAnalyseService(Cin: File) {
  try {
    const cinAnalysed = await axios.post(`${API_URL}:${API_PORT}`, {
      cin: Cin,
    });
    return cinAnalysed;
  } catch (error) {
    throw error;
  }
}
