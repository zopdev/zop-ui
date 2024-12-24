import React from 'react';
import useServiceDetails from '../../hooks/service/getServiceDetails';

const ServiceDetails = ({ formData }) => {
  const { service, loading, error } = useServiceDetails(formData);
  return (
    <div className="px-6">
      <>
        <div className="sm:px-0 ">
          <h3 className="text-base/7 font-semibold text-gray-900">Properties</h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-b border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Created</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {service?.data?.metadata?.creationTimestamp}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Name</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {service?.data?.metadata?.name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Namespace</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {service?.data?.metadata?.namespace}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Labels</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="flex flex-wrap gap-2">
                  {service?.data?.metadata?.labels &&
                    Object?.entries(service?.data?.metadata?.labels).map(([key, value]) => (
                      <span
                        key={key}
                        className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-2 py-1 rounded-full border border-primary-300"
                      >
                        {`${key}=${value}`}
                      </span>
                    ))}
                </div>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Selectors</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="flex flex-wrap gap-2">
                  {service?.data?.spec?.selector &&
                    Object?.entries(service?.data?.spec?.selector).map(([key, value]) => (
                      <span
                        key={key}
                        className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-2 py-1 rounded-full border border-primary-300"
                      >
                        {`${key}=${value}`}
                      </span>
                    ))}
                </div>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Type</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {service?.data?.spec?.type}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Session Affinity</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {service?.data?.spec?.sessionAffinity}
              </dd>
            </div>
          </dl>
        </div>
      </>
      <div className="mt-10 ">
        <div className="sm:px-0">
          <h3 className="text-base/7 font-semibold text-gray-900">Connection</h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Cluster IP</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {service?.data?.spec?.clusterIP}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Ports</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="flex flex-wrap gap-2">
                  {service?.data?.spec?.ports?.map((item, index) => (
                    <span
                      key={index}
                      className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full border border-green-300"
                    >
                      {`${item.port}:${item.targetPort}/${item.protocol}`}
                    </span>
                  ))}
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
