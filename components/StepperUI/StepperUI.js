'use client';

import Stepper from '../Stepper/Stepper';

export default function StepperUI({ steps }) {
  const handleComplete = (data) => {
    console.log('All steps completed! Final data:', data);
  };

  return (
    <div className=" mx-auto py-10">
      <Stepper steps={steps} onComplete={handleComplete} />
    </div>
  );
}
