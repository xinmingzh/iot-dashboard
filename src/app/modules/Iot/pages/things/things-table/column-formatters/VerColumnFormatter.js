import React from "react";

export const VerColumnFormatter = (cellContent, row) => (
  <span
    className={`label label-lg label-light-success label-inline`}
  >
    {cellContent.split(":").slice(-1)}
  </span>
);
