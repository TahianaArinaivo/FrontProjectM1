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

  return (
    <Box>
      <IconButton
        sx={{
          color: "#7874D6",
        }}
        aria-label="upload picture"
        component="label"
        onClick={upload}
      >
        <input hidden accept=".pdf" type="file" onChange={selectImage} />
        <PhotoCamera />
      </IconButton>

      {previewImage && (
        <Box>
          <img
            style={{ width: "98%", height: "300px", marginTop: "-2rem" }}
            src={previewImage}
            alt="sary eto"
          />
        </Box>
      )}
    </Box>
    /*
    <div>
      <div className="row">
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" accept="image/*" onChange={selectImage} />
          </label>
        </div>

        <div className="col-4">
          <button
            className="btn btn-success btn-sm"
            disabled={!currentImage}
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>

      {currentImage && progress > 0 && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      {previewImage && (
        <div>
          <img className="preview" src={previewImage} alt="" />
        </div>
      )}

      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}

      {imageInfos.length > 0 && (
        <div className="card mt-3">
          <div className="card-header">List of Images</div>
          <ul className="list-group list-group-flush">
            {imageInfos.map((img, index) => (
              <li className="list-group-item" key={index}>
                <p>
                  <a href={img.url}>{img.name}</a>
                </p>
                <img src={img.url} alt={img.name} height="80px" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>*/
  );
};

export default ImageUpload;
