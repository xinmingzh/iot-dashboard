import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./ThingsUIHelpers";

const ThingsUIContext = createContext();

export function useThingsUIContext() {
  return useContext(ThingsUIContext);
}

export const ThingsUIConsumer = ThingsUIContext.Consumer;

export function ThingsUIProvider({ thingsUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    newThingButtonClick: thingsUIEvents.newThingButtonClick,
    openEditThingPage: thingsUIEvents.openEditThingPage,
    openDeleteThingDialog: thingsUIEvents.openDeleteThingDialog,
    openDeleteThingsDialog: thingsUIEvents.openDeleteThingsDialog,
    openFetchThingsDialog: thingsUIEvents.openFetchThingsDialog,
    openUpdateThingsStatusDialog:
      thingsUIEvents.openUpdateThingsStatusDialog,
  };

  return (
    <ThingsUIContext.Provider value={value}>
      {children}
    </ThingsUIContext.Provider>
  );
}
