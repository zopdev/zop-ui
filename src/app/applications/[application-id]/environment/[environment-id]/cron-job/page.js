'use client';

import React, { useContext } from 'react';
import HeadingComponent from '../../../../../../../components/HeaderComponents';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import CustomLinearProgress from '../../../../../../../components/Loaders/LinearLoader';
import Table from '../../../../../../../components/Table/table';
import ErrorComponent from '../../../../../../../components/ErrorComponent';
import { calculateAge } from '../../../../../../../utlis/helperFunc';
import BreadCrumbComp from '../../../../../../../components/BreadCrumb';
import { useParams } from 'next/navigation';
import { AppContext } from '../../../../../../../libs/context';
import useCronJobList from '../../../../../../../hooks/cronJob/getCronJobList';
import CronJobDetails from '../../../../../../../partials/cronJob/cronJobDetails';

const headers = [
  { key: 'name', label: 'Name', align: 'left' },
  { key: 'schedule', label: 'Schedule', align: 'left' },
  { key: 'suspend', label: 'Suspend', align: 'left' },
  { key: 'active', label: 'Active', align: 'left' },
  {
    key: 'last_schedule',
    label: 'Last Schedule',
    align: 'left',
  },
  { key: 'age', label: 'Age', align: 'left' },
];

// const data = {
//   data: {
//     cronjob: [
//       {
//         metadata: {
//           name: 'update-notifications',
//           namespace: 'eazyupdates-stg',
//           uid: 'f48a5e6e-933b-4403-9f1b-308707809429',
//           resourceVersion: '281389803',
//           generation: 200,
//           creationTimestamp: '2024-06-17T11:36:23Z',
//           labels: {
//             app: 'update-notifications',
//             'app.kubernetes.io/managed-by': 'Helm',
//             'k8slens-edit-resource-version': 'v1',
//           },
//           annotations: {
//             'configmap.reloader.stakater.com/reload': 'update-notifications',
//             'meta.helm.sh/release-name': 'update-notifications',
//             'meta.helm.sh/release-namespace': 'eazyupdates-stg',
//           },
//           selfLink: '/apis/batch/v1/namespaces/eazyupdates-stg/cronjobs/update-notifications',
//         },
//         status: {
//           lastScheduleTime: '2024-12-24T08:00:00Z',
//           lastSuccessfulTime: '2024-12-24T08:01:45Z',
//         },
//         spec: {
//           schedule: '0 * * * 2-6',
//           concurrencyPolicy: 'Replace',
//           suspend: false,
//           jobTemplate: {
//             metadata: {
//               creationTimestamp: null,
//             },
//             spec: {
//               backoffLimit: 2,
//               template: {
//                 metadata: {
//                   name: 'update-notifications',
//                   creationTimestamp: null,
//                   labels: {
//                     app: 'update-notifications',
//                   },
//                 },
//                 spec: {
//                   volumes: [
//                     {
//                       name: 'app-secrets',
//                       csi: {
//                         driver: 'secrets-store.csi.k8s.io',
//                         readOnly: true,
//                         volumeAttributes: {
//                           secretProviderClass: 'update-notifications-secrets-application',
//                         },
//                       },
//                     },
//                   ],
//                   containers: [
//                     {
//                       name: 'update-notifications',
//                       image:
//                         'us-central1-docker.pkg.dev/raramuri-tech/kops-dev/update-notifications:d7622f4a7bc83665bd2d018565fea0301a3f7288',
//                       ports: [
//                         {
//                           name: 'metrics-port',
//                           containerPort: 2121,
//                           protocol: 'TCP',
//                         },
//                       ],
//                       envFrom: [
//                         {
//                           configMapRef: {
//                             name: 'update-notifications-infra',
//                           },
//                         },
//                         {
//                           configMapRef: {
//                             name: 'eazyupdates-stg',
//                           },
//                         },
//                         {
//                           configMapRef: {
//                             name: 'update-notifications',
//                           },
//                         },
//                         {
//                           secretRef: {
//                             name: 'update-notifications-application-secrets',
//                           },
//                         },
//                       ],
//                       env: [
//                         {
//                           name: 'APP_NAME',
//                           value: 'update-notifications',
//                         },
//                         {
//                           name: 'DB_ENABLE_SSL',
//                           value: 'false',
//                         },
//                         {
//                           name: 'REMOTE_LOG_URL',
//                           value:
//                             'https://overrides-api.kops.dev/logLevel/2c0f2fb3-24b6-4a42-a97c-835168b67de4',
//                         },
//                         {
//                           name: 'ROCKET_ENV',
//                           value: 'stage',
//                         },
//                         {
//                           name: 'TRACER_EXPORTER',
//                           value: 'ZIPKIN',
//                         },
//                         {
//                           name: 'TRACER_URL',
//                           value:
//                             'https://tempo-distributor.f9e15c7a-7fc2-4630-aaa5-c7b234d411d0.kops.dev/api/v2/spans',
//                         },
//                         {
//                           name: 'TRACE_EXPORTER',
//                           value: 'zipkin',
//                         },
//                       ],
//                       resources: {
//                         limits: {
//                           cpu: '500m',
//                           memory: '512M',
//                         },
//                         requests: {
//                           cpu: '100m',
//                           memory: '128M',
//                         },
//                       },
//                       volumeMounts: [
//                         {
//                           name: 'app-secrets',
//                           readOnly: true,
//                           mountPath: '/mnt/secrets-store',
//                         },
//                       ],
//                       terminationMessagePath: '/dev/termination-log',
//                       terminationMessagePolicy: 'File',
//                       imagePullPolicy: 'IfNotPresent',
//                     },
//                   ],
//                   restartPolicy: 'Never',
//                   terminationGracePeriodSeconds: 30,
//                   dnsPolicy: 'ClusterFirst',
//                   serviceAccountName: 'secrets-account',
//                   serviceAccount: 'secrets-account',
//                   securityContext: {},
//                   schedulerName: 'default-scheduler',
//                 },
//               },
//             },
//           },
//           successfulJobsHistoryLimit: 2,
//           failedJobsHistoryLimit: 1,
//         },
//       },
//     ],
//   },
// };

const CronJobs = () => {
  const { cronJob, loading, error } = useCronJobList();
  // const loading = false;
  // const error = false;
  const { appData } = useContext(AppContext);
  const params = useParams();

  const data = appData?.APPLICATION_DATA?.data?.filter(
    (item) => item.id === Number(params?.['application-id']),
  )?.[0];

  const bodyData = cronJob?.data?.cronjobs?.map((item) => {
    return {
      name: item.metadata.name,
      schedule: item.spec.schedule,
      suspend: item.spec.suspend.toString(),
      active: 0,
      last_schedule: calculateAge(item.status.active.lastScheduleTime),
      age: calculateAge(item.metadata.creationTimestamp),
    };
  });

  const breadcrumbList = [
    { name: 'Applications', link: '/applications' },
    {
      name: appData?.APPLICATION_DATA?.isSuccess ? data?.name : 'loading...',
      link: `/applications/${params?.['application-id']}/environment`,
    },
    {
      name: cronJob?.metadata?.environmentName ? cronJob?.metadata?.environmentName : 'loading...',
      link: `/applications/${params?.['application-id']}/environment/${params?.['environment-id']}/services`,
    },
    {
      name: 'Cron Jobs',
      link: `#`,
      disable: true,
    },
  ];

  return (
    <>
      <BreadCrumbComp breadcrumbList={breadcrumbList} />
      <HeadingComponent
        title={'Cron Jobs'}
        actions={
          <Link
            // href={`${pathname}/addEnvironment`}
            href={'#'}
            className={`inline-flex items-center gap-x-1.5 rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'}
            
          `}
          >
            {<PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />}
            Add Cron Job
          </Link>
        }
      />
      <CustomLinearProgress isLoading={loading} />
      <div>
        {!error && (
          <Table headers={headers} data={bodyData} action={true} renderComponent={CronJobDetails} />
        )}
      </div>

      {error && (
        <ErrorComponent errorText={error || 'Something went wrong !'} className={' !p-2'} />
      )}
    </>
  );
};

export default CronJobs;
