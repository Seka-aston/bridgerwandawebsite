
import React from 'react';
import { ApplicationData } from '../../types';
import Input from '../ui/Input';

interface Props {
  data: ApplicationData;
  updateData: (data: Partial<ApplicationData>) => void;
}

const Step4Questions: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text-headings">Step 4: Key Questions</h2>
      <p className="text-text-main mb-6">Your answers help us understand your ambitions and how Bridge can best support you.</p>

      <div className="space-y-6">
        <Input
          label="What is your preferred university for further studies, if any?"
          name="preferredUniversity"
          value={data.preferredUniversity}
          onChange={(e) => updateData({ preferredUniversity: e.target.value })}
        />
        <div>
          <label htmlFor="hopedChange" className="block text-sm font-medium text-gray-700 mb-2">
            What change do you hope to initiate in your community or industry after gaining skills and experience?
          </label>
          <textarea
            id="hopedChange"
            name="hopedChange"
            rows={5}
            value={data.hopedChange}
            onChange={(e) => updateData({ hopedChange: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Step4Questions;
