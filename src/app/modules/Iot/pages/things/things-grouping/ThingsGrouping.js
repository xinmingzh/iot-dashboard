import React, { useMemo } from "react";
import { useThingsUIContext } from "../ThingsUIContext";

export function ThingsGrouping() {
  // Things UI Context
  const thingsUIContext = useThingsUIContext();
  const thingsUIProps = useMemo(() => {
    return {
      ids: thingsUIContext.ids,
      setIds: thingsUIContext.setIds,
      openDeleteThingsDialog: thingsUIContext.openDeleteThingsDialog,
      openFetchThingsDialog: thingsUIContext.openFetchThingsDialog,
      openUpdateThingsStatusDialog:
        thingsUIContext.openUpdateThingsStatusDialog,
    };
  }, [thingsUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="-font-bold font-danger-">
                <span>
                  Selected records count: <b>{thingsUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={thingsUIProps.openDeleteThingsDialog}
              >
                <i className="fa fa-trash"></i> Delete All
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={thingsUIProps.openFetchThingsDialog}
              >
                <i className="fa fa-stream"></i> Fetch Selected
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={thingsUIProps.openUpdateThingsStatusDialog}
              >
                <i className="fa fa-sync-alt"></i> Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
