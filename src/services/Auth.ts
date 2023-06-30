import axios from "axios";

export async function FetchCinAnalyseService<T>(Cin: File) {
  const formData = new FormData();
  try {
    formData.append("fileUpload", Cin);
    const cinAnalysed = await axios.post<T>(
      `/api/CinAnalys`,
       formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return cinAnalysed.data;
  } catch (error) {
    throw error;
  }
}
