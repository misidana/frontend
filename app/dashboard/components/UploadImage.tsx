import { useEffect, useState } from "react";
import axios from "axios";
import { useUpload } from "@/lib/zustand";
import { FaCheck } from "react-icons/fa6";
import Loading from "@/components/Loading";
import { toast } from "react-toastify";

const UploadForm = ({ isPending }: { isPending: boolean }) => {
  const [file, setFile] = useState<any>(null);
  const { setImgUrl, isUpload, setIsUpload } = useUpload();
  const [IsLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (isPending) {
      toast.error("Please wait for the transaction to complete");
      return null;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/doxxfay9h/image/upload`,
        formData
      );
      if (response.status === 200) {
        setIsUpload(true);
        setImgUrl(response.data.secure_url);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (file) {
      handleSubmit();
    }
  }, [file]);

  return (
    <div className='text-white'>
      {IsLoading && <Loading />}
      <div>
        <input
          type='file'
          onChange={handleFileChange}
          className='border rounded-xl border-slate-500'
        />
      </div>
      {IsLoading && "Loading..."}
      {isUpload && (
        <button
          type='button'
          className={
            "my-3 border rounded-lg p-2 font-semibold flex items-center gap-2 text-blue-500 border-blue-500 disabled:opacity-50"
          }
        >
          Uploaded
          <FaCheck />
        </button>
      )}
    </div>
  );
};

export default UploadForm;
