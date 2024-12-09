import React from 'react';
import { formatTime } from '../../utlis/helperFunc';
import {
  PROVIDER_ICON_MAPPER,
  //   REFRESH_STATUS,
  //   colourCode,
} from '../../constant';
// import DotWithProgress from "../Loader/DotWithProgression";
// import { LogSvg } from "../../svg/sidebar/logs";
// import IconButton from "../FormComponent/IconButton";
// import RefreshIcon from "../../svg/refresh";
// import Tooltip from "../FormComponent/toolTip";
// import { useRouter } from "next/router";

const CloudAccountCard = ({
  item,
  view,
  //   handleLogsOpen,
  //   handleRetryStatus,
  //   putToProvider,
}) => {
  //   const router = useRouter();

  //   useEffect(() => {
  //     if (item?.id) {
  //       router.prefetch(`/cloud-accounts/${item.id}/infrastructure`);
  //     }
  //   }, [item?.id, router]);

  //   const handleRetry = (e, id) => {
  //     e.stopPropagation();
  //     handleRetryStatus(id);
  //   };

  //   const latestLog = (e, data) => {
  //     e.stopPropagation();
  //     handleLogsOpen(data);
  //   };

  //   const handleRedirect = () => {
  //     router.push(`/cloud-accounts/${item?.id}/infrastructure`);
  //   };

  return (
    <div
      className={`cursor-pointer break-words rounded-md transition duration-200 ease-in-out px-6 py-5 hover:bg-gray-50 hover:shadow-lg ${
        view === 'navBar' ? 'w-[330px] h-[146px]' : 'w-[330px] h-[166px]'
      } border border-gray-200`}
      //   onClick={handleRedirect}
    >
      <div className="flex items-center gap-2 mb-5">
        {PROVIDER_ICON_MAPPER?.[item?.provider]}
        <span className="text-base font-medium text-gray-600">{item?.name}</span>
        {/* {view === "cloudAccount" && (
          <Tooltip
            title={`Status: ${item?.status}`}
            className={{ root: "flex" }}
            arrow
          >
            <div>
              {REFRESH_STATUS?.includes(item?.status) ? (
                <DotWithProgress color={colourCode[item?.status]} />
              ) : (
                <>
                  <span
                    className={`status-rounded`}
                    style={{
                      backgroundColor: colourCode[item?.status],
                    }}
                  />
                </>
              )}
            </div>
          </Tooltip>
        )} */}
        {/* {item?.retry && (
          <Tooltip title={item?.retryTooltip || "Retry"} arrow>
            <div className="ml-auto">
              <IconButton
                disabled={putToProvider?.isLoading}
                onClick={(e) => handleRetry(e, item?.id)}
              >
                <RefreshIcon />
              </IconButton>
            </div>
          </Tooltip>
        )} */}
        {/* {view === "cloudAccount" &&
          REFRESH_STATUS?.includes(item?.status) &&
          item?.clusterId?.defaultId && (
            <div className="ml-auto">
              <Tooltip title={"Logs"} arrow>
                <IconButton onClick={(e) => latestLog(e, item)}>
                  <LogSvg height={16} width={16} />
                </IconButton>
              </Tooltip>
            </div>
          )} */}
      </div>

      <div className="flex items-center justify-between mb-5">
        <span className="text-sm text-gray-500">{item?.providerId}</span>
        {/* <span className="text-xs ">
          <span className="text-gray-500">
            {item?.svcGroup === 1
              ? `1 App`
              : item?.svcGroup > 1
              ? `${item?.svcGroup} Apps`
              : ""}
          </span>
        </span> */}
      </div>

      <div className="text-xs text-gray-400 ">
        Updated At{' '}
        {/* <span className="text-gray-900">
          {item?.updatedByIdentifier || item?.createdByIdentifier}
        </span> */}
        <span className="text-xs text-gray-500">{formatTime(item?.updatedAt)}</span>
      </div>

      {/* <div className="text-xs text-gray-500">
        <span>{formatTime(item?.updatedAt)}</span>
      </div> */}
    </div>
  );
};

export default CloudAccountCard;
