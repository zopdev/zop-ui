'use client';

import Button from '../../../components/Button';
import { useRouter } from 'next/navigation';
import CloudAccountAuditCard from '../../../components/Cards/cloudAccountAuditCard';

const Dashboard = () => {
  const router = useRouter();
  const handleAuditClick = () => {
    router.push('/cloud-setup');
  };
  return (
    <main className="flex-1 p-6">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Welcome to ZOP Dashboard
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started by choosing one of the options below
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* <div */}
          {/*  className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" */}
          {/*  data-v0-t="card" */}
          {/* > */}
          {/*  <div className="flex flex-col space-y-1.5 p-6 pb-3"> */}
          {/*    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"> */}
          {/*      <svg */}
          {/*        xmlns="http://www.w3.org/2000/svg" */}
          {/*        width={24} */}
          {/*        height={24} */}
          {/*        viewBox="0 0 24 24" */}
          {/*        fill="none" */}
          {/*        stroke="currentColor" */}
          {/*        strokeWidth={2} */}
          {/*        strokeLinecap="round" */}
          {/*        strokeLinejoin="round" */}
          {/*        className="lucide lucide-cloud-cog h-6 w-6 text-primary" */}
          {/*      > */}
          {/*        <circle cx={12} cy={17} r={3} /> */}
          {/*        <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" /> */}
          {/*        <path d="m15.7 18.4-.9-.3" /> */}
          {/*        <path d="m9.2 15.9-.9-.3" /> */}
          {/*        <path d="m10.6 20.7.3-.9" /> */}
          {/*        <path d="m13.1 14.2.3-.9" /> */}
          {/*        <path d="m13.6 20.7-.4-1" /> */}
          {/*        <path d="m10.8 14.3-.4-1" /> */}
          {/*        <path d="m8.3 18.6 1-.4" /> */}
          {/*        <path d="m14.7 15.8 1-.4" /> */}
          {/*      </svg> */}
          {/*    </div> */}
          {/*    <h3 className="font-semibold tracking-tight text-xl">Audit Your Cloud</h3> */}
          {/*    <p className="text-muted-foreground text-base"> */}
          {/*      Analyze your cloud infrastructure for security vulnerabilities, performance issues, */}
          {/*      and cost optimization opportunities. */}
          {/*    </p> */}
          {/*  </div> */}
          {/*  <div className="p-6 pt-0 flex-1"> */}
          {/*    <ul className="space-y-2 text-sm"> */}
          {/*      <li className="flex items-center"> */}
          {/*        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary"> */}
          {/*          ✓ */}
          {/*        </span> */}
          {/*        <span>Security vulnerability assessment</span> */}
          {/*      </li> */}
          {/*      <li className="flex items-center"> */}
          {/*        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary"> */}
          {/*          ✓ */}
          {/*        </span> */}
          {/*        <span>Performance optimization</span> */}
          {/*      </li> */}
          {/*      <li className="flex items-center"> */}
          {/*        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary"> */}
          {/*          ✓ */}
          {/*        </span> */}
          {/*        <span>Cost efficiency recommendations</span> */}
          {/*      </li> */}
          {/*    </ul> */}
          {/*  </div> */}
          {/*  <div className="flex items-center p-6 pt-0"> */}
          {/*    <Button onClick={() => handleAuditClick()} className={' w-full justify-center'}> */}
          {/*      <svg */}
          {/*        xmlns="http://www.w3.org/2000/svg" */}
          {/*        width={24} */}
          {/*        height={24} */}
          {/*        viewBox="0 0 24 24" */}
          {/*        fill="none" */}
          {/*        stroke="currentColor" */}
          {/*        strokeWidth={2} */}
          {/*        strokeLinecap="round" */}
          {/*        strokeLinejoin="round" */}
          {/*        className="lucide lucide-cloud-cog mr-2 h-4 w-4" */}
          {/*      > */}
          {/*        <circle cx={12} cy={17} r={3} /> */}
          {/*        <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" /> */}
          {/*        <path d="m15.7 18.4-.9-.3" /> */}
          {/*        <path d="m9.2 15.9-.9-.3" /> */}
          {/*        <path d="m10.6 20.7.3-.9" /> */}
          {/*        <path d="m13.1 14.2.3-.9" /> */}
          {/*        <path d="m13.6 20.7-.4-1" /> */}
          {/*        <path d="m10.8 14.3-.4-1" /> */}
          {/*        <path d="m8.3 18.6 1-.4" /> */}
          {/*        <path d="m14.7 15.8 1-.4" /> */}
          {/*      </svg> */}
          {/*      Audit Your Cloud */}
          {/*    </Button> */}
          {/*    /!* <button className="bg-primary-500 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"> *!/ */}
          {/*    /!*  <svg *!/ */}
          {/*    /!*    xmlns="http://www.w3.org/2000/svg" *!/ */}
          {/*    /!*    width={24} *!/ */}
          {/*    /!*    height={24} *!/ */}
          {/*    /!*    viewBox="0 0 24 24" *!/ */}
          {/*    /!*    fill="none" *!/ */}
          {/*    /!*    stroke="currentColor" *!/ */}
          {/*    /!*    strokeWidth={2} *!/ */}
          {/*    /!*    strokeLinecap="round" *!/ */}
          {/*    /!*    strokeLinejoin="round" *!/ */}
          {/*    /!*    className="lucide lucide-cloud-cog mr-2 h-4 w-4" *!/ */}
          {/*    /!*  > *!/ */}
          {/*    /!*    <circle cx={12} cy={17} r={3} /> *!/ */}
          {/*    /!*    <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" /> *!/ */}
          {/*    /!*    <path d="m15.7 18.4-.9-.3" /> *!/ */}
          {/*    /!*    <path d="m9.2 15.9-.9-.3" /> *!/ */}
          {/*    /!*    <path d="m10.6 20.7.3-.9" /> *!/ */}
          {/*    /!*    <path d="m13.1 14.2.3-.9" /> *!/ */}
          {/*    /!*    <path d="m13.6 20.7-.4-1" /> *!/ */}
          {/*    /!*    <path d="m10.8 14.3-.4-1" /> *!/ */}
          {/*    /!*    <path d="m8.3 18.6 1-.4" /> *!/ */}
          {/*    /!*    <path d="m14.7 15.8 1-.4" /> *!/ */}
          {/*    /!*  </svg> *!/ */}
          {/*    /!*  Audit Your Cloud *!/ */}
          {/*    /!* </button> *!/ */}
          {/*  </div> */}
          {/* </div> */}
          <CloudAccountAuditCard />
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
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
                  className="lucide lucide-rocket h-6 w-6 text-primary"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-xl">Deploy Application</h3>
              <p className="text-muted-foreground text-base">
                Quickly deploy your applications to the cloud with our streamlined deployment
                process and infrastructure templates.
              </p>
            </div>
            <div className="p-6 pt-0 flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    ✓
                  </span>
                  <span>One-click deployment</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    ✓
                  </span>
                  <span>Infrastructure as code templates</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    ✓
                  </span>
                  <span>Continuous integration support</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Button variant={'secondary'} className={' w-full justify-center'}>
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
                  className="lucide lucide-cloud-cog mr-2 h-4 w-4"
                >
                  <circle cx={12} cy={17} r={3} />
                  <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
                  <path d="m15.7 18.4-.9-.3" />
                  <path d="m9.2 15.9-.9-.3" />
                  <path d="m10.6 20.7.3-.9" />
                  <path d="m13.1 14.2.3-.9" />
                  <path d="m13.6 20.7-.4-1" />
                  <path d="m10.8 14.3-.4-1" />
                  <path d="m8.3 18.6 1-.4" />
                  <path d="m14.7 15.8 1-.4" />
                </svg>
                Deploy Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
