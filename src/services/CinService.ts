import APICLIENT from "./api-client";
import { User } from "../components/publicUser/types/User";

// export async function FetchCinAnalyseService<T>(Cin: File) {
//   const formData = new FormData();
//   try {
//     formData.append("fileUpload", Cin);
//     const cinAnalysed = await axios.post<T>(
//       `/api/CinAnalys`,
//        formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     return cinAnalysed.data;
//   } catch (error) {
//     throw error;
//   }
// }

const fn = (Cin: File) => {
  const formData = new FormData();
  formData.append("fileUpload", Cin);
  return formData;
};

export default new APICLIENT<User>("/CinAnalys", fn);
