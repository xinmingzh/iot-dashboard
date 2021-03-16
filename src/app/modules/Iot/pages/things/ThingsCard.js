import React, {useMemo} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { ThingsFilter } from "./things-filter/ThingsFilter";
import { ThingsTable } from "./things-table/ThingsTable";
import { ThingsGrouping } from "./things-grouping/ThingsGrouping";
import { useThingsUIContext } from "./ThingsUIContext";

export function ThingsCard() {
  const thingsUIContext = useThingsUIContext();
  const thingsUIProps = useMemo(() => {
    return {
      ids: thingsUIContext.ids,
      queryParams: thingsUIContext.queryParams,
      setQueryParams: thingsUIContext.setQueryParams,
      newThingButtonClick: thingsUIContext.newThingButtonClick,
      openDeleteThingsDialog: thingsUIContext.openDeleteThingsDialog,
      openEditThingPage: thingsUIContext.openEditThingPage,
      openUpdateThingsStatusDialog:
        thingsUIContext.openUpdateThingsStatusDialog,
      openFetchThingsDialog: thingsUIContext.openFetchThingsDialog,
    };
  }, [thingsUIContext]);

  return (
    <Card>
      <CardHeader title="Things list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={thingsUIProps.newThingButtonClick}
          >
            New Thing
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <ThingsFilter />
        {thingsUIProps.ids.length > 0 && (
          <>
            <ThingsGrouping />
          </>
        )}
        <ThingsTable />
      </CardBody>
    </Card>
  );
}
