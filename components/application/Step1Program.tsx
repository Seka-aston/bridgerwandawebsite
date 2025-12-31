
import React from 'react';
import { ApplicationData } from '../../types';
import { PROGRAMS } from '../../constants';
import Input from '../ui/Input';

interface Props {
  data: ApplicationData;
  updateData: (data: Partial<ApplicationData>) => void;
}

const Step1Program: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text-headings">Step 1: Program Selection</h2>
      
      <div className="mb-8 p-4 bg-surface border-l-4 border-primary text-secondary">
        <h3 className="font-bold mb-2">Eligibility Requirements</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Must be a Rwandan TVET student.</li>
          <li>English proficiency is required.</li>
          <li>Minimum academic score of 60% in the last trimester.</li>
          <li>Registration fee: 55,000 RWF (Proof of payment required).</li>
        </ul>
      </div>

      <div>
        <label htmlFor="programId" className="block text-sm font-medium text-gray-700 mb-2">
          Select Your Preferred Program
        </label>
        <select
          id="programId"
          name="programId"
          value={data.programId}
          onChange={(e) => updateData({ programId: e.target.value })}
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          required
        >
          <option value="" disabled>-- Choose a program --</option>
          {PROGRAMS.map(program => (
            <option key={program.id} value={program.id}>{program.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Step1Program;
