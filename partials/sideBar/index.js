import { useEffect, useState, useRef } from 'react';
// import {
//   Alerts,
//   AuditLog,
//   Databases,
//   Infra,
//   LogSvg,
//   Metrics,
//   Permission,
//   Services,
//   Settings,
//   SummaryIcon,
//   TracesIcon,
// } from '../svg/sidebar';

import Link from 'next/link';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ConfigDiff } from '../../svg/configDiff';
import { DeploymentSpace } from '../../svg/deploymentSpace';
// import CronJob from '../svg/sidebar/cronJob';
// import HelmPackageIcon from '../svg/sidebar/helm_package';
// import { Profile } from '../svg/sidebar/profile';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ showMobileBar }) {
  const router = useRouter();
  const searchParams = useParams();
  const pathname = usePathname();
  const [selectedView, setSelectedView] = useState('Null');
  const [value, setValue] = useState(0);
  const selectedTabRef = useRef(null); // Create a ref for the selected tab

  useEffect(() => {
    // Scroll the selected tab into view when the component mounts
    if (selectedTabRef.current) {
      selectedTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, []);

  //   const cloudOption = [
  //     {
  //       accessTo: 'all',
  //       link: `cloud-accounts/${searchParams['cloud-account-id']}/infrastructure`,
  //       text: 'Infrastructure',
  //       icon: Infra,
  //       current: true,
  //     },
  //     {
  //       accessTo: 'all',
  //       link: `cloud-accounts/${searchParams['cloud-account-id']}/audit-log`,
  //       text: 'Audit Log',
  //       icon: AuditLog,
  //     },
  //     {
  //       accessTo: 'all',
  //       link: `cloud-accounts/${searchParams['cloud-account-id']}/permissions`,
  //       text: 'Permissions',
  //       icon: Permission,
  //     },

  //     {
  //       accessTo: 'all',
  //       link: `cloud-accounts/${searchParams['cloud-account-id']}/settings`,
  //       text: 'Settings',
  //       icon: Settings,
  //     },
  //   ];

  const appOption = [
    {
      accessTo: 'all',
      link: `applications/${searchParams['application-id']}/deploymentSpace`,
      text: 'Deployment Space',
      icon: DeploymentSpace,
    },
    {
      accessTo: 'all',
      link: `applications/${searchParams['application-id']}/configDiff`,
      text: 'Config Diff',
      icon: ConfigDiff,
    },
    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/cron-jobs`,
    //   text: 'Cron Jobs',
    //   //   icon: CronJob,
    // },
    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/datastore`,
    //   text: 'Data Store',
    //   //   icon: Databases,
    // },
    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/helm-package`,
    //   text: 'Helm Package',
    //   //   icon: HelmPackageIcon,
    // },
    // {
    //   accessTo: 'all',
    //   heading: true,
    //   headingTitle: 'Observability',
    // },
    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/logs`,
    //   text: 'Logs',
    //   //   icon: LogSvg,
    // },
    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/traces`,
    //   text: 'Traces',
    //   //   icon: TracesIcon,
    // },
    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/metric`,
    //   text: 'Metrics',
    //   //   icon: Metrics,
    // },
    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/alerts`,
    //   text: 'Alerts',
    //   //   icon: Alerts,
    // },
    // {
    //   accessTo: 'all',
    //   heading: true,
    //   headingTitle: '',
    //   divider: true,
    // },
    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/audit-log`,
    //   text: 'Audit Log',
    //   //   icon: AuditLog,
    // },

    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/permissions`,
    //   text: 'Permissions',
    //   //   icon: Permission,
    // },

    // {
    //   accessTo: 'all',
    //   link: `applications/${searchParams['application-id']}/settings`,
    //   text: 'Settings',
    //   //   icon: Settings,
    // },
  ];
  //   const observabilityOption = [
  //     {
  //       accessTo: 'all',
  //       link: `observability`,
  //       text: 'Observability',
  //       icon: TracesIcon,
  //     },

  //     // {
  //     //   accessTo: 'all',
  //     //   link: `observability/integrations`,
  //     //   text: 'Integrations',
  //     //   icon: Settings,
  //     // },
  //   ];

  //   const settingsOption = [
  //     {
  //       accessTo: 'all',
  //       // link: `cloud-accounts/${searchParams['cloud-account-id']}/infrastructure`,
  //       text: 'Profile',
  //       icon: Profile,
  //       current: true,
  //     },
  //     {
  //       accessTo: 'all',
  //       // link: `cloud-accounts/${searchParams['cloud-account-id']}/audit-log`,
  //       text: 'Audit Log',
  //       icon: AuditLog,
  //     },
  //     {
  //       accessTo: 'all',
  //       // link: `cloud-accounts/${searchParams['cloud-account-id']}/permissions`,
  //       text: 'Permissions',
  //       icon: Permission,
  //     },

  //     {
  //       accessTo: 'all',
  //       // link: `cloud-accounts/${searchParams['cloud-account-id']}/settings`,
  //       text: 'Settings',
  //       icon: Settings,
  //     },
  //   ];

  const SideBarView = {
    // cloudView: cloudOption,
    appView: appOption,
    // observability: observabilityOption,
    // setting: settingsOption,
    Null: [],
  };

  useEffect(() => {
    if (
      searchParams['cloud-account-id'] !== undefined &&
      searchParams['application-id'] === undefined
    ) {
      setSelectedView('cloudView');
    } else if (
      searchParams['cloud-account-id'] === undefined &&
      searchParams['application-id'] !== undefined
    ) {
      setSelectedView('appView');
    }
    // else if (router.pathname.includes('observability')) {
    //   setSelectedView('observability');
    // } else if (router.pathname.includes('setting')) {
    //   setSelectedView('setting');
    // }
  }, [router]);

  useEffect(() => {
    const list = SideBarView[selectedView].map(function (ele) {
      return ele?.link?.split('/').pop();
    });

    let DashboardView = list.indexOf(pathname.split('/').pop());

    if (DashboardView === -1) {
      DashboardView =
        list.indexOf(pathname.split('/')?.[3]) !== -1 && pathname.split('/')?.[3]
          ? list.indexOf(pathname.split('/')?.[3])
          : 0;
    }

    setValue(DashboardView);
  }, [pathname, selectedView]);

  return showMobileBar ? (
    <div className="border-b border-gray-200 border-opacity-5 overflow-x-auto overflow-y-hidden md:hidden">
      <nav className="-mb flex items-center px-2 max-w-full" aria-label="Tabs">
        {SideBarView[selectedView].map((item, index) => {
          return (
            !item?.heading && (
              <Link
                key={index}
                href={`/${item?.link}`}
                className={classNames(
                  value === index
                    ? ' text-primary-500 bg-primary-selected rounded-md'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group flex items-center border-b-2 py-2 px-2 text-sm font-medium !p-[1rem]',
                )}
                aria-current={value === index ? 'page' : undefined}
                ref={value === index ? selectedTabRef : null}
              >
                <item.icon
                  className={classNames('mr-2 h-5 w-5 ')}
                  color="currentColor"
                  aria-hidden="true"
                />

                <span className="whitespace-nowrap">{item.text}</span>
              </Link>
            )
          );
        })}
      </nav>
    </div>
  ) : (
    <div className="md:flex grow flex-col gap-y-5 overflow-y-auto  p-8  border-t border-r border-gray-200 bg-white xs:hidden min-h-full   ">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {SideBarView[selectedView].map((item, index) => {
                return item?.heading ? (
                  item?.divider ? (
                    <div key={index} className="space-y-0 !mb-6 !mt-6">
                      <div className="border-b border-b-gray-200 border-opacity-30 "></div>
                      <div className="border-t border-t-gray-200 border-opacity-95"></div>
                    </div>
                  ) : (
                    <li key={index} className="text-left">
                      <div className="text-xs font-semibold leading-6 text-gray-400 mt-6 mb-0 p-2">
                        {item?.headingTitle}
                      </div>
                    </li>
                  )
                ) : (
                  <Link key={item.text} href={`/${item?.link}`} className="text-left">
                    <div
                      className={classNames(
                        value === index
                          ? 'bg-gray-50 text-primary-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-medium leading-6 cursor-pointer w-48 mb-4',
                      )}
                    >
                      <item.icon
                        className={classNames(
                          value === index
                            ? 'text-primary-600'
                            : 'text-gray-400 group-hover:text-primary-600',
                          'h-6 w-6 shrink-0',
                        )}
                        aria-hidden="true"
                        color="currentColor"
                      />

                      {item.text}
                    </div>
                  </Link>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
