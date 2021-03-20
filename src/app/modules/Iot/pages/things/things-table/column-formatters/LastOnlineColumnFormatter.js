import React from "react";

export const LastOnlineColumnFormatter = (cellContent, row) => (
  <span
    className={`label label-lg label-light-success label-inline`}
  >
    {cellContent.toDate().toTimestamp()}
  </span>
);
