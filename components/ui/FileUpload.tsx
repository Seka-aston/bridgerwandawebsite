
import React, { useRef } from 'react';

interface FileUploadProps {
  label: string;
  file: File | null;
  onFileChange: (file: File | null) => void;
  required?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, file, onFileChange, required }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileChange(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    onFileChange(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="mt-1 flex items-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png"
        />
        <button
          type="button"
          onClick={handleClick}
          className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {file ? 'Change file' : 'Choose file'}
        </button>
        {file && (
          <div className="ml-4 flex items-center">
            <span className="text-sm text-gray-600">{file.name}</span>
            <button
              type="button"
              onClick={handleRemove}
              className="ml-2 text-sm font-medium text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        )}
      </div>
       {!file && <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG up to 5MB.</p>}
    </div>
  );
};

export default FileUpload;
