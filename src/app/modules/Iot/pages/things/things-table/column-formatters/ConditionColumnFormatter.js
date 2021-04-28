import React from "react";
import {
  ThingConditionCssClasses,
  ThingConditionTitles
} from "../../ThingsUIHelpers";

export const ConditionColumnFormatter = (cellContent, row) => (
  <>
    <span
      className={`badge badge-${
        ThingConditionCssClasses[row.condition]
      } badge-dot`}
    ></span>
    &nbsp;
    <span
      className={`font-bold font-${
        ThingConditionCssClasses[row.condition]
      }`}
    >
      {ThingConditionTitles[row.condition]}
    </span>
  </>
);
