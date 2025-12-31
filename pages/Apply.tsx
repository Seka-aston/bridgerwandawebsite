
import React, { useState } from 'react';
import { ApplicationData } from '../types';
import ProgressIndicator from '../components/application/ProgressIndicator';
import Step1Program from '../components/application/Step1Program';
import Step2PersonalDetails from '../components/application/Step2PersonalDetails';
import Step3Documents from '../components/application/Step3Documents';
import Step4Questions from '../components/application/Step4Questions';
import Step5Review from '../components/application/Step5Review';
import Button from '../components/ui/Button';

const TOTAL_STEPS = 5;

const Apply: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    programId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    nationality: 'Rwandan',
    academicLevel: '',
    fieldOfStudy: '',
    institution: '',
    lastTrimesterScore: '',
    idDocument: null,
    proofOfPayment: null,
    transcript: null,
    preferredUniversity: '',
    hopedChange: '',
  });

  const updateData = (data: Partial<ApplicationData>) => {
    setApplicationData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev));
  const prevStep = () => setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
  
  const handleSubmit = () => {
    console.log('Submitting application:', applicationData);
    // In a real app, this would be an API call.
    // We'll just move to a "success" state.
    setCurrentStep(TOTAL_STEPS + 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
          {currentStep <= TOTAL_STEPS ? (
            <>
              <h1 className="text-3xl font-bold text-center mb-4 text-text-headings">Student Application</h1>
              <p className="text-center text-text-main mb-8">
                Complete the following steps to apply for a Bridge program.
              </p>
              <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
              <div className="mt-10">
                {currentStep === 1 && <Step1Program data={applicationData} updateData={updateData} />}
                {currentStep === 2 && <Step2PersonalDetails data={applicationData} updateData={updateData} />}
                {currentStep === 3 && <Step3Documents data={applicationData} updateData={updateData} />}
                {currentStep === 4 && <Step4Questions data={applicationData} updateData={updateData} />}
                {currentStep === 5 && <Step5Review data={applicationData} />}
              </div>
              <div className="flex justify-between mt-12">
                <Button onClick={prevStep} disabled={currentStep === 1} variant="secondary">
                  Back
                </Button>
                {currentStep < TOTAL_STEPS ? (
                  <Button onClick={nextStep}>Next</Button>
                ) : (
                  <Button onClick={handleSubmit}>Submit Application</Button>
                )}
              </div>
            </>
          ) : (
             <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h2 className="text-3xl font-bold mt-4 text-text-headings">Application Submitted!</h2>
                <p className="mt-2 text-text-main">Thank you for applying. We have received your information and will be in touch soon.</p>
                <Button to="/" className="mt-8">Back to Home</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;
