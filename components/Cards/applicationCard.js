import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { formatTime } from '../../utlis/helperFunc';

const ApplicationCard = ({
  data,
  view,
  //   handleLogsOpen,
  //   handleRetryStatus,
  //   putToRetryNameSpace,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (data?.id) {
      router.prefetch(`/applications/${data?.id}`);
    }
  }, [data?.id, router]);

  //   const handleRetry = (e, id) => {
  //     e.stopPropagation();
  //     handleRetryStatus(id);
  //   };

  //   const latestLog = (e, data) => {
  //     e.stopPropagation();
  //     handleLogsOpen(data);
  //   };

  const handleRedirect = () => {
    router.push(`/applications/${data?.id}/deploymentSpace`);
  };

  return (
    <div
      className={`relative w-[330px] ${view === 'navBar' ? 'h-[146px]' : 'h-[146px]'} p-6 ${
        view === 'navBar' ? 'px-6 py-4' : 'px-5 py-5'
      } cursor-pointer rounded-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-shadow`}
      onClick={handleRedirect}
    >
      <div className="flex items-center mb-5 gap-2">
        <h3 className="text-lg font-medium text-gray-600">{data?.name}</h3>

        {/* {view !== 'navBar' && (
          <div className="">
            <Tooltip title={`Status: ${data?.status}`} className={{ root: 'flex' }} arrow>
              {REFRESH_STATUS?.includes(data?.status) ? (
                <DotWithProgress color={colourCode[data?.status]} />
              ) : (
                <span
                  className={`status-rounded`}
                  style={{
                    backgroundColor: colourCode[data?.status],
                  }}
                />
              )}
            </Tooltip>
          </div>
        )} */}

        {/* {data?.retry && (
          <div className="ml-2">
            <IconButton
              disabled={putToRetryNameSpace?.isLoading}
              onClick={(e) => handleRetry(e, data?.id)}
            >
              <RefreshIcon />
            </IconButton>
          </div>
        )} */}

        {/* {view !== 'navBar' && REFRESH_STATUS?.includes(data?.status) && (
          <div className="ml-auto">
            <Tooltip title={'Logs'} arrow>
              <IconButton onClick={(e) => latestLog(e, data)}>
                <LogSvg height={16} width={16} />
              </IconButton>
            </Tooltip>
          </div>
        )} */}
      </div>

      <div className="flex justify-between mb-5">
        {/* <div className="flex items-center">
          <p className="text-xs text-gray-500 font-medium">{data?.providerName}</p>
          <p className="text-xs text-gray-500 font-light ">&nbsp;Cluster</p>
        </div> */}

        <div className="flex items-center">
          {data?.services !== 0 && (
            <p className="text-xs text-gray-500 font-medium">{data?.environments?.length}</p>
          )}
          <p className="text-xs text-gray-500 font-light ">
            &nbsp;
            {data?.environments?.length === 1
              ? 'Environment'
              : data?.environments?.length > 1
                ? 'Environments'
                : ' '}
          </p>
        </div>
      </div>

      <div className="text-xs text-gray-400 ">
        Updated At{' '}
        {/* <span className="text-gray-900">
          {item?.updatedByIdentifier || item?.createdByIdentifier}
        </span> */}
        <span className="text-xs text-gray-500">{formatTime(data?.updatedAt)}</span>
      </div>
      {/* <p className="text-xs text-gray-500">
        <span>{formatTime(data?.updatedAt)}</span>
      </p> */}
    </div>
  );
};

export default ApplicationCard;
