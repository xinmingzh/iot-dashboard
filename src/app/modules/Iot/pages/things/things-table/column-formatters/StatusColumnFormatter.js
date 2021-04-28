import React from "react";
import {
  ThingStatusCssClasses,
  ThingStatusTitles
} from "../../ThingsUIHelpers";

export const StatusColumnFormatter = (cellContent, row) => (
  <span
    className={`label label-lg label-light-${
      ThingStatusCssClasses[row.status]
    } label-inline`}
  >
    {ThingStatusTitles[row.status]}
  </span>
);
