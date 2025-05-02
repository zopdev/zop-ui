'use client';

import { useState } from 'react';
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  CloudIcon,
  ServerIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export default function CloudAccountAuditCard() {
  const [activeTab, setActiveTab] = useState('stale');

  // Sample data with more categories
  const auditData = {
    stale: {
      danger: 3,
      warning: 5,
      pending: 2,
      compliant: 18,
      unchecked: 1,
      total: 29,
    },
    overprovisioned: {
      danger: 2,
      warning: 4,
      pending: 1,
      compliant: 22,
      unchecked: 3,
      total: 32,
    },
    security: {
      danger: 5,
      warning: 3,
      pending: 0,
      compliant: 15,
      unchecked: 2,
      total: 25,
    },
    network: {
      danger: 1,
      warning: 2,
      pending: 1,
      compliant: 10,
      unchecked: 0,
      total: 14,
    },
    storage: {
      danger: 4,
      warning: 2,
      pending: 3,
      compliant: 20,
      unchecked: 1,
      total: 30,
    },
    compute: {
      danger: 2,
      warning: 3,
      pending: 1,
      compliant: 25,
      unchecked: 2,
      total: 33,
    },
  };

  // Get category icon based on category name
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'stale':
        return <ServerIcon className="h-4 w-4" />;
      case 'overprovisioned':
        return <ExclamationCircleIcon className="h-4 w-4" />;
      case 'security':
        return <ShieldCheckIcon className="h-4 w-4" />;
      case 'network':
        return <GlobeAltIcon className="h-4 w-4" />;
      case 'storage':
        return <GlobeAltIcon className="h-4 w-4" />;
      case 'compute':
        return <ServerIcon className="h-4 w-4" />;
      default:
        return <ExclamationCircleIcon className="h-4 w-4" />;
    }
  };

  const getStatusPercentage = (status, category) => {
    // Handle edge case of total being 0
    if (auditData[category].total === 0) return 0;
    return (auditData[category][status] / auditData[category].total) * 100;
  };

  const renderStatusBar = (category) => {
    return (
      <div className="w-full h-2 flex rounded-full overflow-hidden mt-2">
        <div
          className="bg-red-500"
          style={{
            width: `${getStatusPercentage('danger', category)}%`,
            minWidth: auditData[category].danger > 0 ? '4px' : '0', // Ensure visibility for small values
          }}
        />
        <div
          className="bg-yellow-500"
          style={{
            width: `${getStatusPercentage('warning', category)}%`,
            minWidth: auditData[category].warning > 0 ? '4px' : '0',
          }}
        />
        <div
          className="bg-primary-500"
          style={{
            width: `${getStatusPercentage('pending', category)}%`,
            minWidth: auditData[category].pending > 0 ? '4px' : '0',
          }}
        />
        <div
          className="bg-green-500"
          style={{
            width: `${getStatusPercentage('compliant', category)}%`,
            minWidth: auditData[category].compliant > 0 ? '4px' : '0',
          }}
        />
        <div
          className="bg-gray-300"
          style={{
            width: `${getStatusPercentage('unchecked', category)}%`,
            minWidth: auditData[category].unchecked > 0 ? '4px' : '0',
          }}
        />
      </div>
    );
  };

  const renderStatusDetails = (category) => {
    return (
      <div className="grid grid-cols-5 gap-2 mt-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          </div>
          <span className="text-xs font-medium mt-1">Danger</span>
          <span className="text-lg font-bold">{auditData[category].danger}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100">
            <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" />
          </div>
          <span className="text-xs font-medium mt-1">Warning</span>
          <span className="text-lg font-bold">{auditData[category].warning}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100">
            <ClockIcon className="h-5 w-5 text-primary-500" />
          </div>
          <span className="text-xs font-medium mt-1">Pending</span>
          <span className="text-lg font-bold">{auditData[category].pending}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
          </div>
          <span className="text-xs font-medium mt-1">Compliant</span>
          <span className="text-lg font-bold">{auditData[category].compliant}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
            <ExclamationCircleIcon className="h-5 w-5 text-gray-500" />
          </div>
          <span className="text-xs font-medium mt-1">Unchecked</span>
          <span className="text-lg font-bold">{auditData[category].unchecked}</span>
        </div>
      </div>
    );
  };

  // Add this CSS class to hide scrollbar but keep functionality
  const scrollbarHideStyle = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;

  return (
    <>
      <style jsx global>
        {scrollbarHideStyle}
      </style>
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        {/* Card Header */}
        <div className="p-4 pb-2">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100">
              <CloudIcon className="h-5 w-5 text-primary-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="text-xl font-semibold">Zop Cloud</h3>
                <div className="ml-2 w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm text-gray-500">2 Apps</p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          {/* Custom Tabs */}
          <div className="w-full">
            {/* Tab List */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
              <div className="inline-flex min-w-full p-1 bg-gray-100 rounded-lg">
                {Object.keys(auditData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      activeTab === category
                        ? 'bg-white shadow-sm'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {getCategoryIcon(category)}
                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {Object.keys(auditData).map((category) => (
                <div key={category} className={`${activeTab === category ? 'block' : 'hidden'}`}>
                  {renderStatusBar(category)}
                  {renderStatusDetails(category)}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t text-xs text-gray-500">
            <p>Updated By owner@zop.dev</p>
            <p>28th January 2025, 15:38</p>
          </div>
        </div>
      </div>
    </>
  );
}
