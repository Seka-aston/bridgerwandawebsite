
import React from 'react';
import { ApplicationData } from '../../types';
import FileUpload from '../ui/FileUpload';

interface Props {
  data: ApplicationData;
  updateData: (data: Partial<ApplicationData>) => void;
}

const Step3Documents: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text-headings">Step 3: Document Uploads</h2>
      <p className="text-text-main mb-6">Please upload the required documents. Ensure they are clear and readable. Accepted formats: PDF, JPG, PNG.</p>
      
      <div className="space-y-6">
        <FileUpload
          label="National ID or Passport"
          file={data.idDocument}
          onFileChange={(file) => updateData({ idDocument: file })}
          required
        />
        <FileUpload
          label="Proof of Payment (Registration Fee: 55,000 RWF)"
          file={data.proofOfPayment}
          onFileChange={(file) => updateData({ proofOfPayment: file })}
          required
        />
        <FileUpload
          label="Most Recent Academic Transcript"
          file={data.transcript}
          onFileChange={(file) => updateData({ transcript: file })}
          required
        />
      </div>

      <div className="mt-8 p-4 bg-surface border-l-4 border-primary text-secondary">
        <h4 className="font-bold">Important Note</h4>
        <p>Your application will not be considered complete until all required documents are successfully uploaded.</p>
      </div>
    </div>
  );
};

export default Step3Documents;
