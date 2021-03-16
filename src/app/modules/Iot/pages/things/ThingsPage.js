import React from "react";
import { Route } from "react-router-dom";
import { ThingsLoadingDialog } from "./things-loading-dialog/ThingsLoadingDialog";
import { ThingDeleteDialog } from "./thing-delete-dialog/ThingDeleteDialog";
import { ThingsDeleteDialog } from "./things-delete-dialog/ThingsDeleteDialog";
import { ThingsFetchDialog } from "./things-fetch-dialog/ThingsFetchDialog";
import { ThingsUpdateStatusDialog } from "./things-update-status-dialog/ThingsUpdateStatusDialog";
import { ThingsCard } from "./ThingsCard";
import { ThingsUIProvider } from "./ThingsUIContext";

export function ThingsPage({ history }) {
  const thingsUIEvents = {
    newThingButtonClick: () => {
      history.push("/iot/things/new");
    },
    openEditThingPage: (id) => {
      history.push(`/iot/things/${id}/edit`);
    },
    openDeleteThingDialog: (id) => {
      history.push(`/iot/things/${id}/delete`);
    },
    openDeleteThingsDialog: () => {
      history.push(`/iot/things/deleteThings`);
    },
    openFetchThingsDialog: () => {
      history.push(`/iot/things/fetch`);
    },
    openUpdateThingsStatusDialog: () => {
      history.push("/iot/things/updateStatus");
    },
  };

  return (
    <ThingsUIProvider thingsUIEvents={thingsUIEvents}>
      <ThingsLoadingDialog />
      <Route path="/iot/things/deleteThings">
        {({ history, match }) => (
          <ThingsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/iot/things");
            }}
          />
        )}
      </Route>
      <Route path="/iot/things/:id/delete">
        {({ history, match }) => (
          <ThingDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/iot/things");
            }}
          />
        )}
      </Route>
      <Route path="/iot/things/fetch">
        {({ history, match }) => (
          <ThingsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/iot/things");
            }}
          />
        )}
      </Route>
      <Route path="/iot/things/updateStatus">
        {({ history, match }) => (
          <ThingsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/iot/things");
            }}
          />
        )}
      </Route>
      <ThingsCard />
    </ThingsUIProvider>
  );
}
