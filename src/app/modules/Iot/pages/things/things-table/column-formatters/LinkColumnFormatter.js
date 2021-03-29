/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

export const LinkColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  { onClick }
) => (
  <a onClick={() => onClick(cellContent)}>{cellContent}</a>
);
