
import React from 'react';
import { ApplicationData } from '../../types';
import Input from '../ui/Input';

interface Props {
  data: ApplicationData;
  updateData: (data: Partial<ApplicationData>) => void;
}

const Step2PersonalDetails: React.FC<Props> = ({ data, updateData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateData({ [e.target.name]: e.target.value });
    };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text-headings">Step 2: Personal & Academic Details</h2>
      
      <div className="space-y-6">
        {/* Personal Details */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="text-lg font-semibold px-2">Personal Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Input label="First Name" name="firstName" value={data.firstName} onChange={handleChange} required />
            <Input label="Last Name" name="lastName" value={data.lastName} onChange={handleChange} required />
            <Input label="Email Address" name="email" type="email" value={data.email} onChange={handleChange} required />
            <Input label="Phone Number" name="phone" type="tel" value={data.phone} onChange={handleChange} required />
            <Input label="Date of Birth" name="dob" type="date" value={data.dob} onChange={handleChange} required />
            <div>
                 <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                 <select id="gender" name="gender" value={data.gender} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required>
                     <option value="" disabled>Select gender</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="Other">Other</option>
                 </select>
            </div>
            <Input label="Nationality" name="nationality" value={data.nationality} onChange={handleChange} required />
          </div>
        </fieldset>

        {/* Academic Details */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="text-lg font-semibold px-2">Academic Information</legend>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Input label="Current Academic Level (e.g., Level 4, Level 5)" name="academicLevel" value={data.academicLevel} onChange={handleChange} required />
            <Input label="Field of Study" name="fieldOfStudy" value={data.fieldOfStudy} onChange={handleChange} required />
            <Input label="Name of Institution" name="institution" value={data.institution} onChange={handleChange} required />
            <Input label="Last Trimester Score (%)" name="lastTrimesterScore" type="number" min="0" max="100" value={data.lastTrimesterScore} onChange={handleChange} required />
           </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Step2PersonalDetails;
