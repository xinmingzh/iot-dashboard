import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ThingsPage } from "./things/ThingsPage";
import { ThingsEdit } from "./things/thing-edit/ThingsEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import InfoPage from "./InfoPage";

export default function IotPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from iot root URL to /things */
          <Redirect exact={true} from="/iot" to="/iot/things" />
        }
        <ContentRoute path="/iot/info" component={InfoPage} />
        <ContentRoute path="/iot/things/new" component={ThingsEdit} />
        <ContentRoute path="/iot/things/:id/edit" component={ThingsEdit} />
        <ContentRoute path="/iot/things" component={ThingsPage} />
      </Switch>
    </Suspense>
  );
}
