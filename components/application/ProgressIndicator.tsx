
import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  const steps = [
      "Program", "Details", "Documents", "Questions", "Review"
  ];

  return (
    <div className="w-full">
        <div className="flex items-center justify-between">
            {steps.map((label, index) => {
                const stepNumber = index + 1;
                const isCompleted = currentStep > stepNumber;
                const isActive = currentStep === stepNumber;

                return (
                    <React.Fragment key={stepNumber}>
                        <div className="flex flex-col items-center text-center w-20">
                            <div className={`
                                w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300
                                ${isCompleted ? 'bg-primary text-white' : ''}
                                ${isActive ? 'bg-surface text-primary border-2 border-primary' : ''}
                                ${!isCompleted && !isActive ? 'bg-gray-200 text-gray-500' : ''}
                            `}>
                                {isCompleted ? '✔' : stepNumber}
                            </div>
                            <p className={`mt-2 text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-500'}`}>{label}</p>
                        </div>
                        {stepNumber < totalSteps && <div className={`flex-1 h-1 transition-colors duration-300 ${currentStep > stepNumber ? 'bg-primary' : 'bg-gray-200'}`}></div>}
                    </React.Fragment>
                );
            })}
        </div>
    </div>
  );
};

export default ProgressIndicator;
