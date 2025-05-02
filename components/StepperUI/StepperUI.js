'use client';

// Personal Information Step
import Stepper from '../Stepper/Stepper';

export default function StepperUI({ steps }) {
  const handleComplete = (data) => {
    console.log('All steps completed! Final data:', data);
    // Here you can submit the data to your backend or perform any final action
    alert('Form completed! Check console for all data.');
  };

  return (
    <div className=" mx-auto py-10">
      {/* <h1 className="text-2xl font-bold text-center mb-6">Multi-step Form</h1> */}
      <Stepper steps={steps} onComplete={handleComplete} />
    </div>
  );
}
