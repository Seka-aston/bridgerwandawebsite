
import React from 'react';
import { ApplicationData } from '../../types';
import { PROGRAMS } from '../../constants';

interface Props {
  data: ApplicationData;
}

const ReviewItem: React.FC<{ label: string; value?: string | null }> = ({ label, value }) => (
  <div className="py-2">
    <dt className="font-medium text-text-main">{label}</dt>
    <dd className="mt-1 text-text-headings">{value || 'Not provided'}</dd>
  </div>
);

const Step5Review: React.FC<Props> = ({ data }) => {
  const programTitle = PROGRAMS.find(p => p.id === data.programId)?.title || 'Not selected';

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text-headings">Step 5: Review and Submit</h2>
      <p className="text-text-main mb-6">Please review your information carefully before submitting. You cannot edit it after submission.</p>

      <div className="space-y-6">
        {/* Program Selection */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-text-headings">Program Selection</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <ReviewItem label="Selected Program" value={programTitle} />
          </dl>
        </div>

        {/* Personal & Academic Details */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-text-headings">Personal & Academic Details</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <ReviewItem label="Full Name" value={`${data.firstName} ${data.lastName}`} />
            <ReviewItem label="Email" value={data.email} />
            <ReviewItem label="Phone" value={data.phone} />
            <ReviewItem label="Date of Birth" value={data.dob} />
            <ReviewItem label="Institution" value={data.institution} />
            <ReviewItem label="Last Trimester Score" value={`${data.lastTrimesterScore}%`} />
          </dl>
        </div>

        {/* Documents */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-text-headings">Uploaded Documents</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <ReviewItem label="ID Document" value={data.idDocument?.name} />
            <ReviewItem label="Proof of Payment" value={data.proofOfPayment?.name} />
            <ReviewItem label="Transcript" value={data.transcript?.name} />
          </dl>
        </div>

        {/* Key Questions */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-text-headings">Key Questions</h3>
          <dl>
            <ReviewItem label="Preferred University" value={data.preferredUniversity} />
            <ReviewItem label="Change you hope to initiate" value={data.hopedChange} />
          </dl>
        </div>
      </div>
       <div className="mt-8 p-4 bg-surface border-l-4 border-primary text-secondary">
          <h4 className="font-bold">Confirmation</h4>
          <p>By submitting, I confirm that all the information provided is accurate and I meet the eligibility requirements.</p>
        </div>
    </div>
  );
};

export default Step5Review;
