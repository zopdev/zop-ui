import React from 'react';
import { formatTime } from '../../utlis/helperFunc';
import { PROVIDER_ICON_MAPPER } from '../../constant';

const CloudAccountAuditCard = ({ item }) => {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground w-full max-w-md shadow-md"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6 pb-2">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cloud h-5 w-5 text-blue-500"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h3 className="text-xl font-semibold">Zop Cloud</h3>
              <div className="ml-2 w-2 h-2 rounded-full bg-green-500" />
            </div>
            <p className="text-sm text-gray-500">2 Apps</p>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div dir="ltr" data-orientation="horizontal" className="w-full">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid grid-cols-3 mb-4"
            tabIndex={0}
            data-orientation="horizontal"
            style={{ outline: 'none' }}
          >
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-«r0»-content-stale"
              data-state="inactive"
              id="radix-«r0»-trigger-stale"
              className="justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm flex items-center gap-1"
              tabIndex={-1}
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hard-drive h-4 w-4"
              >
                <line x1={22} x2={2} y1={12} y2={12} />
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                <line x1={6} x2="6.01" y1={16} y2={16} />
                <line x1={10} x2="10.01" y1={16} y2={16} />
              </svg>
              <span>Stale</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-«r0»-content-overprovisioned"
              data-state="inactive"
              id="radix-«r0»-trigger-overprovisioned"
              className="justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm flex items-center gap-1"
              tabIndex={-1}
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-alert h-4 w-4"
              >
                <circle cx={12} cy={12} r={10} />
                <line x1={12} x2={12} y1={8} y2={12} />
                <line x1={12} x2="12.01" y1={16} y2={16} />
              </svg>
              <span>Overprovisioned</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-«r0»-content-security"
              data-state="active"
              id="radix-«r0»-trigger-security"
              className="justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm flex items-center gap-1"
              tabIndex={0}
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield h-4 w-4"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
              <span>Security</span>
            </button>
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-«r0»-trigger-stale"
            id="radix-«r0»-content-stale"
            tabIndex={0}
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
            style={{}}
            hidden=""
          />
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-«r0»-trigger-overprovisioned"
            id="radix-«r0»-content-overprovisioned"
            tabIndex={0}
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
            hidden=""
          />
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-«r0»-trigger-security"
            id="radix-«r0»-content-security"
            tabIndex={0}
            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
          >
            <div className="w-full h-2 flex rounded-full overflow-hidden mt-2">
              <div className="bg-red-500" style={{ width: '20%' }} />
              <div className="bg-amber-500" style={{ width: '12%' }} />
              <div className="bg-blue-500" style={{ width: '0%' }} />
              <div className="bg-green-500" style={{ width: '60%' }} />
              <div className="bg-gray-300" style={{ width: '8%' }} />
            </div>
            <div className="grid grid-cols-5 gap-2 mt-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-alert h-5 w-5 text-red-500"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} x2={12} y1={8} y2={12} />
                    <line x1={12} x2="12.01" y1={16} y2={16} />
                  </svg>
                </div>
                <span className="text-xs font-medium mt-1">Danger</span>
                <span className="text-lg font-bold">5</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-alert h-5 w-5 text-amber-500"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} x2={12} y1={8} y2={12} />
                    <line x1={12} x2="12.01" y1={16} y2={16} />
                  </svg>
                </div>
                <span className="text-xs font-medium mt-1">Warning</span>
                <span className="text-lg font-bold">3</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock h-5 w-5 text-blue-500"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-xs font-medium mt-1">Pending</span>
                <span className="text-lg font-bold">0</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <span className="text-xs font-medium mt-1">Compliant</span>
                <span className="text-lg font-bold">15</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-alert h-5 w-5 text-gray-500"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} x2={12} y1={8} y2={12} />
                    <line x1={12} x2="12.01" y1={16} y2={16} />
                  </svg>
                </div>
                <span className="text-xs font-medium mt-1">Unchecked</span>
                <span className="text-lg font-bold">2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t text-xs text-gray-500">
          <p>Updated By owner@zop.dev</p>
          <p>28th January 2025, 15:38</p>
        </div>
      </div>
    </div>
  );
};

export default CloudAccountAuditCard;
