import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

export const Upload = ({ setImage }) => {
  return (
    <FileUploaderRegular
      className="mx-auto mt-8 flex items-center justify-center"
      onFileUploadSuccess={setImage}
      pubkey={import.meta.env.VITE_UC_PUBLIC_KEY}
    />
  );
};
