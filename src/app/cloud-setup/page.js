'use client';

import React, { useEffect, useState } from 'react';
import StepperUI from '../../../components/StepperUI/StepperUI';
import CreateCloud from '@/app/cloud-accounts/create/page';
import DynamicFormRadioWithIcon from '../../../components/RadioButtonWithIcon/RadioButtonWithIcon';

const ResourceAudit = ({ data, updateData, setIsComplete }) => {
  const auditOptions = [
    {
      label: 'Stale',
      description: 'Resources that are no longer in use',
      value: 'Stale',
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828665.png',
    },
    {
      label: 'OverProvisioned',
      description: 'Resources that have more capacity than needed',
      value: 'OverProvisioned',
      icon: 'https://cdn-icons-png.flaticon.com/512/929/929564.png',
    },
    {
      label: 'Security',
      description: 'Resources with potential security issues',
      value: 'Security',
      icon: 'https://cdn-icons-png.flaticon.com/512/565/565547.png',
    },
    {
      label: 'Run All',
      description: 'Run all types of audits on your resources',
      value: 'run-all',
      icon: 'https://cdn-icons-png.flaticon.com/512/189/189254.png',
    },
  ];
  const handleChange = (newValue) => {
    const updatedData = { ...data, selectedOption: newValue };
    updateData(updatedData);
    validateStep(updatedData);
  };

  const validateStep = (stepData) => {
    const isValid = !!stepData?.selectedOption;
    setIsComplete(isValid);
  };

  useEffect(() => {
    if (!data?.selectedOption) {
      updateData({ ...data, selectedOption: 'run-all' });
    } else {
      validateStep(data);
    }
  }, [data, updateData, setIsComplete]);

  return (
    <div className="md:flex xs:space-y-4 space-x-8 min-h-96">
      {/* Left Side Content */}
      <div className="md:w-[34%] md:m-12 md:mx-14">
        <h2 className="text-md font-semibold mb-4">Select Resource Audit Type</h2>
        <p className="text-gray-600">
          Choose an audit type to evaluate different aspects of your cloud resources.
        </p>
      </div>
      {/* Right Side - Replaced with DynamicFormRadioWithIcon */}
      <div className="md:w-[45%] md:my-12">
        <DynamicFormRadioWithIcon
          options={auditOptions}
          name="resource-audit"
          value={data?.selectedOption}
          defaultSelected={'run-all'}
          onChange={handleChange}
          orientation="horizontal"
        />
      </div>
    </div>
  );
};

const ScheduleStep = ({ data, updateData, setIsComplete }) => {
  const cronPattern =
    /(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\d+(ns|us|µs|ms|s|m|h))+)|((((\d+,)+\d+|(\d+(\/|-)\d+)|\d+|sun|mon|tue|wed|thu|fri|sat|\*) ?){5,7})/;
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    const updatedData = { ...data, cronSchedule: value };
    updateData(updatedData);
    validateStep(updatedData);
  };

  const validateStep = (stepData) => {
    const value = stepData?.cronSchedule || '';
    if (value.trim() === '') {
      setError('');
      setIsComplete(false);
    } else if (!cronPattern.test(value)) {
      setError('Invalid Schedule Time');
      setIsComplete(false);
    } else {
      setError('');
      setIsComplete(true);
    }
  };

  useEffect(() => {
    validateStep(data);
  }, [data, setIsComplete]);

  return (
    <div className="md:flex xs:space-y-4 space-x-8 min-h-96">
      <div className="md:w-[34%] md:m-12 md:mx-14">
        <h2 className="text-xl font-semibold mb-4">Cron Schedule Info</h2>
        <p className="text-gray-600 mb-2">
          Provide a valid cron expression like{' '}
          <code className="bg-gray-100 px-1 rounded">*/5 * * * *</code>. This will determine how
          often the task runs.
        </p>
        <p className="text-sm text-gray-500">
          You can also use special strings like <code>@daily</code>, <code>@hourly</code>, or{' '}
          <code>@every 5m</code>.
        </p>
      </div>

      <div className="w-[35%] space-y-2 my-12">
        <label className="block text-sm font-medium text-gray-700 mb-1">Enter Schedule</label>
        <input
          type="text"
          name="cronSchedule"
          value={data.cronSchedule || ''}
          onChange={handleChange}
          placeholder="*/5 * * * *"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {error && <span className="text-yellow-500 text-sm">{error}</span>}
      </div>
    </div>
  );
};

// Review Step
// const ReviewStep = ({ allData, isLastStep, setIsComplete }) => {
//   // Review step is always complete
//   useEffect(() => {
//     setIsComplete(true);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//
//   return (
//     <div className="space-y-6">
//       <div className="bg-gray-50 p-4 rounded-md">
//         <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
//         <p>
//           <span className="font-medium">Name:</span> {allData[0]?.fullName}
//         </p>
//         <p>
//           <span className="font-medium">Email:</span> {allData[0]?.email}
//         </p>
//       </div>
//
//       <div className="bg-gray-50 p-4 rounded-md">
//         <h3 className="text-lg font-medium text-gray-900 mb-2">Address</h3>
//         <p>
//           <span className="font-medium">Street:</span> {allData[1]?.street}
//         </p>
//         <p>
//           <span className="font-medium">City:</span> {allData[1]?.city}
//         </p>
//         <p>
//           <span className="font-medium">Zip Code:</span> {allData[1]?.zipCode}
//         </p>
//       </div>
//
//       <div className="bg-gray-50 p-4 rounded-md">
//         <h3 className="text-lg font-medium text-gray-900 mb-2">Preferences</h3>
//         <p>
//           <span className="font-medium">Contact Method:</span> {allData[2]?.contactMethod}
//         </p>
//         <p>
//           <span className="font-medium">Newsletter:</span> {allData[2]?.newsletter ? 'Yes' : 'No'}
//         </p>
//       </div>
//     </div>
//   );
// };

const Audit = () => {
  // const { applications, loading, error } = useApplicationList();

  const steps = [
    {
      title: 'Cloud Account',
      component: (props) => <CreateCloud {...props} audit={true} />,
    },

    {
      title: 'Resource Audit',
      component: ResourceAudit,
    },
    {
      title: 'Schedule',
      component: ScheduleStep,
    },
    // {
    //   title: "Review",
    //   component: ReviewStep,
    // },
  ];
  const handleComplete = (data) => {
    console.log('All steps completed! Final data:', data);
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full overflow-auto text-left pt-8 ">
      <StepperUI steps={steps} onComplete={handleComplete} />
      {/* <EmptyComponent */}
      {/*  imageComponent={<BlankCloudAccountSvg />} */}
      {/*  redirectLink={'/applications/create'} */}
      {/*  buttonTitle={'Add Application'} */}
      {/*  title={'Please start by setting up your first application'} */}
      {/* /> */}

      {/* {error && <ErrorComponent errorText={error || 'Something went wrong'} />} */}
    </div>
  );
};

export default Audit;
