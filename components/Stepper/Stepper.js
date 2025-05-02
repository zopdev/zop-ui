import React, { useState, useEffect, useCallback } from 'react';
import { CheckIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Button from '../Button';

const Stepper = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState({});
  const [stepStatus, setStepStatus] = useState(
    steps.map((_, index) => (index === 0 ? 'active' : 'incomplete')),
  );
  const [stepsComplete, setStepsComplete] = useState(steps.map(() => false));
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Update step status when current step changes
  useEffect(() => {
    const newStepStatus = steps.map((_, index) => {
      if (index < currentStep) return 'completed';
      if (index === currentStep) return 'active';
      return 'incomplete';
    });
    setStepStatus(newStepStatus);
  }, [currentStep, steps]);

  // Memoized setter for step completeness to avoid infinite loop
  const setCurrentStepComplete = useCallback(
    (isComplete) => {
      setStepsComplete((prev) => {
        if (prev[currentStep] === isComplete) return prev; // prevent unnecessary update
        const updated = [...prev];
        updated[currentStep] = isComplete;
        return updated;
      });
    },
    [currentStep],
  );

  // Handle data update from a step
  const updateStepData = (data) => {
    setStepData((prevData) => ({
      ...prevData,
      [currentStep]: data,
    }));
  };

  // Check if current step is complete
  const isCurrentStepComplete = () => {
    return stepsComplete[currentStep];
  };

  // Go to next step
  const goToNextStep = () => {
    if (currentStep < steps.length - 1 && isCurrentStepComplete()) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === steps.length - 1 && isCurrentStepComplete()) {
      onComplete?.(stepData);
    }
  };

  // Go to previous step
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Mobile step indicator - shows only current step with prev/next
  const renderMobileStepIndicator = () => {
    return (
      <div className="flex items-center justify-between mb-6 w-full">
        <div className="flex items-center">
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-2
              ${stepStatus[currentStep] === 'completed' ? 'bg-primary-500 text-white' : 'bg-gray-300 text-gray-800'}
            `}
          >
            {currentStep + 1}
          </div>
          <span className="font-medium">{steps[currentStep].title}</span>
        </div>
        <div className="text-sm text-gray-500">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>
    );
  };

  // Desktop step indicators - shows all steps
  const renderDesktopStepIndicators = () => {
    return (
      <div className="flex items-center justify-center mb-8 w-full">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step box */}
            <div
              onClick={() => {
                if (stepStatus[index] === 'completed' || index <= currentStep) {
                  setCurrentStep(index);
                }
              }}
              className={`
                flex items-center rounded-md px-4 py-2 text-center cursor-pointer
                ${
                  stepStatus[index] === 'completed'
                    ? 'border-2 border-primary-500'
                    : 'border border-primary-500'
                }
              `}
            >
              {/* Circle with check or index */}
              <div
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mr-2
                  ${
                    stepStatus[index] === 'completed'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-300 text-gray-800'
                  }
                `}
              >
                {stepStatus[index] === 'completed' ? <CheckIcon className="w-4 h-4" /> : index + 1}
              </div>
              <span className="text-sm font-medium text-gray-800">{step.title}</span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`
                  flex-1 mx-2
                  ${stepStatus[index] === 'completed' ? 'h-[2px] bg-primary-500' : 'h-[2px] bg-gray-300'}
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  // Alternative mobile step indicator - dots
  const renderMobileDotIndicator = () => {
    return (
      <div className="flex flex-col items-center mb-6 w-full">
        <div className="flex items-center justify-center space-x-2 mb-2">
          {steps.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                if (stepStatus[index] === 'completed' || index <= currentStep) {
                  setCurrentStep(index);
                }
              }}
              className={`
                w-3 h-3 rounded-full cursor-pointer
                ${
                  index === currentStep
                    ? 'bg-primary-500'
                    : stepStatus[index] === 'completed'
                      ? 'bg-primary-300'
                      : 'bg-gray-300'
                }
              `}
            />
          ))}
        </div>
        <div className="text-sm font-medium">
          Step {currentStep + 1}: {steps[currentStep].title}
        </div>
      </div>
    );
  };

  // Render current step component
  const renderCurrentStep = () => {
    const CurrentStepComponent = steps[currentStep].component;
    return (
      <CurrentStepComponent
        data={stepData[currentStep] || {}}
        updateData={updateStepData}
        allData={stepData}
        isLastStep={currentStep === steps.length - 1}
        setIsComplete={setCurrentStepComplete}
      />
    );
  };

  return (
    <div className="w-full  p-4 md:p-6 bg-white">
      {/* Render different indicators based on screen size */}
      <div className="hidden md:block">{renderDesktopStepIndicators()}</div>
      <div className="block md:hidden">{renderMobileDotIndicator()}</div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h2>
        {renderCurrentStep()}
      </div>

      <div className="flex justify-between">
        <Button
          variant="secondary"
          className={` flex items-center px-3 py-2 md:px-4 md:py-2 rounded-md ${
            currentStep === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          disabled={currentStep === 0}
          onClick={goToPreviousStep}
        >
          <ChevronLeftIcon className="w-3 h-3 mr-1" />
          {!isMobile ? 'Previous' : ''}
        </Button>
        {/* <button */}
        {/*  */}
        {/*  onClick={goToPreviousStep} */}
        {/*  disabled={currentStep === 0} */}
        {/*  className={`flex items-center px-3 py-2 md:px-4 md:py-2 rounded-md ${ */}
        {/*    currentStep === 0 */}
        {/*      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' */}
        {/*      : 'bg-gray-200 text-gray-700 hover:bg-gray-300' */}
        {/*  }`} */}
        {/* > */}
        {/*  <ChevronLeftIcon className="w-4 h-4 mr-1" /> */}
        {/*  {!isMobile ? 'Previous' : ''} */}
        {/* </button> */}
        <Button
          className={` flex items-center px-3 py-2 md:px-4 md:py-2 rounded-md ${
            !isCurrentStepComplete()
              ? 'bg-primary-300 text-white cursor-not-allowed'
              : 'bg-primary-500 text-white hover:bg-primary-600'
          }`}
          disabled={!isCurrentStepComplete()}
          onClick={goToNextStep}
        >
          {currentStep === steps.length - 1 ? 'Complete' : isMobile ? '' : 'Next'}
          {currentStep !== steps.length - 1 && <ChevronRightIcon className="w-4 h-4 ml-1" />}
        </Button>
        {/* <button */}
        {/*  onClick={goToNextStep} */}
        {/*  disabled={!isCurrentStepComplete()} */}
        {/*  className={`flex items-center px-3 py-2 md:px-4 md:py-2 rounded-md ${ */}
        {/*    !isCurrentStepComplete() */}
        {/*      ? 'bg-primary-300 text-white cursor-not-allowed' */}
        {/*      : 'bg-primary-500 text-white hover:bg-primary-600' */}
        {/*  }`} */}
        {/* > */}
        {/*  {currentStep === steps.length - 1 ? 'Complete' : isMobile ? '' : 'Next'} */}
        {/*  {currentStep !== steps.length - 1 && <ChevronRightIcon className="w-4 h-4 ml-1" />} */}
        {/* </button> */}
      </div>
    </div>
  );
};

export default Stepper;
