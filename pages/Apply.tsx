
import React, { useState } from 'react';
import { ApplicationData } from '../types';
import ProgressIndicator from '../components/application/ProgressIndicator';
import Step1Program from '../components/application/Step1Program';
import Step2PersonalDetails from '../components/application/Step2PersonalDetails';
import Step3Documents from '../components/application/Step3Documents';
import Step4Questions from '../components/application/Step4Questions';
import Step5Review from '../components/application/Step5Review';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase';

const TOTAL_STEPS = 5;

const Apply: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
  
  const uploadFile = async (file: File, bucket: string, path: string) => {
    const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
      upsert: true
    });
    if (error) throw error;
    
    const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(path);
    return publicUrl;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const timestamp = Date.now();
      const userId = (await supabase.auth.getUser()).data.user?.id;

      if (!userId) {
        throw new Error('You must be signed in to submit an application.');
      }

      // 1. Upload documents
      let idUrl = '';
      let proofUrl = '';
      let transcriptUrl = '';

      if (applicationData.idDocument) {
        idUrl = await uploadFile(applicationData.idDocument, 'application-documents', `${userId}/${timestamp}_id_document`);
      }
      if (applicationData.proofOfPayment) {
        proofUrl = await uploadFile(applicationData.proofOfPayment, 'application-documents', `${userId}/${timestamp}_proof_of_payment`);
      }
      if (applicationData.transcript) {
        transcriptUrl = await uploadFile(applicationData.transcript, 'application-documents', `${userId}/${timestamp}_transcript`);
      }

      // 2. Submit application record
      const { error: dbError } = await supabase
        .from('applications')
        .insert({
          user_id: userId,
          program_id: applicationData.programId,
          first_name: applicationData.firstName,
          last_name: applicationData.lastName,
          email: applicationData.email,
          phone: applicationData.phone,
          dob: applicationData.dob,
          gender: applicationData.gender,
          nationality: applicationData.nationality,
          academic_level: applicationData.academicLevel,
          field_of_study: applicationData.fieldOfStudy,
          institution: applicationData.institution,
          last_trimester_score: applicationData.lastTrimesterScore,
          id_document_url: idUrl,
          proof_of_payment_url: proofUrl,
          transcript_url: transcriptUrl,
          preferred_university: applicationData.preferredUniversity,
          hoped_change: applicationData.hopedChange,
        });

      if (dbError) throw dbError;

      // Success
      setCurrentStep(TOTAL_STEPS + 1);
    } catch (err: any) {
      console.error('Error submitting application:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              
              {error && (
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              )}

              <div className="mt-10">
                {currentStep === 1 && <Step1Program data={applicationData} updateData={updateData} />}
                {currentStep === 2 && <Step2PersonalDetails data={applicationData} updateData={updateData} />}
                {currentStep === 3 && <Step3Documents data={applicationData} updateData={updateData} />}
                {currentStep === 4 && <Step4Questions data={applicationData} updateData={updateData} />}
                {currentStep === 5 && <Step5Review data={applicationData} />}
              </div>
              <div className="flex justify-between mt-12">
                <Button onClick={prevStep} disabled={currentStep === 1 || isSubmitting} variant="secondary">
                  Back
                </Button>
                {currentStep < TOTAL_STEPS ? (
                  <Button onClick={nextStep}>Next</Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
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
