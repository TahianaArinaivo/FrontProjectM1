import { useState, useEffect } from "react";
import FileUploadService from "../services/fileUploadService";
import Ifile from "../types/file";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box, IconButton } from "@mui/material";

type Props = {
  cinUpload: (cin: File) => void;
};

const ImageUpload = ({ cinUpload }: Props) => {
  const [currentImage, setCurrentImage] = useState<File | undefined>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [imageInfos, setImageInfos] = useState<Array<Ifile>>([]);

  useEffect(() => {
    /* FileUploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });*/
    if (currentImage) {
      cinUpload(currentImage);
    }
  }, [currentImage]);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setProgress(0);
  };

  const upload = () => {
    setProgress(0);
    if (!currentImage) return;

    FileUploadService.upload(currentImage, (event: any) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return FileUploadService.getFiles();
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the Image!");
        }

        setCurrentImage(undefined);
      });
  };

  const pdfUrl = { previewImage };
  function PDFViewer() {
    return (
      <div
        style={{
          marginLeft: "-200px",
          width: "100%",
          height: "100%",
        }}
      >
        <embed
          src={previewImage}
          type="application/pdf"
          width="500%"
          height="310px"
          border-radius="20px"
        />
      </div>
    );
  }

  return (
    <Box>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        onClick={upload}
      >
        <input hidden accept=".pdf" type="file" onChange={selectImage} />
        <PhotoCamera />
      </IconButton>

      {previewImage && (
        <Box>
          <PDFViewer pdfUrl={pdfUrl} />
        </Box>
      )}
    </Box>
  );
};

export default ImageUpload;
