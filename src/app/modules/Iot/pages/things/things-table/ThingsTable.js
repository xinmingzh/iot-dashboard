// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/things/thingsActions";
import * as uiHelpers from "../ThingsUIHelpers";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useThingsUIContext } from "../ThingsUIContext";

export function ThingsTable() {
  // Things UI Context
  const thingsUIContext = useThingsUIContext();
  const thingsUIProps = useMemo(() => {
    return {
      ids: thingsUIContext.ids,
      setIds: thingsUIContext.setIds,
      queryParams: thingsUIContext.queryParams,
      setQueryParams: thingsUIContext.setQueryParams,
      openEditThingPage: thingsUIContext.openEditThingPage,
      openThingDetailsPage: thingsUIContext.openThingDetailsPage,
      openDeleteThingDialog: thingsUIContext.openDeleteThingDialog,
    };
  }, [thingsUIContext]);

  // Getting current state of things list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.things }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  // Things Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    thingsUIProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchThings(thingsUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thingsUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "id",
      text: "THING ID",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.LinkColumnFormatter,
      formatExtraData: {
        onClick: thingsUIProps.openThingDetailsPage
      },
    },
    {
      dataField: "store_id",
      text: "Store ID",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "updated",
      text: "Last Online",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "status.MODEL_SFTP_IMAGE",
      text: "Model",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.VerColumnFormatter,
    },
    {
      dataField: "status.PREDICTOR_IMAGE",
      text: "Pred",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.VerColumnFormatter,
    },
    {
      dataField: "status.DS_IMAGE",
      text: "DS",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.VerColumnFormatter,
    },
    {
      dataField: "status.BRS_IMAGE",
      text: "BRS",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.VerColumnFormatter,
    },
    {
      dataField: "status.HORN_IMAGE",
      text: "Horn",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.VerColumnFormatter,
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditThingPage: thingsUIProps.openEditThingPage,
        openDeleteThingDialog: thingsUIProps.openDeleteThingDialog,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: thingsUIProps.queryParams.pageSize,
    page: thingsUIProps.queryParams.pageNumber,
  };
  return (
    <>
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={listLoading}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                wrapperClasses="table-responsive"
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                bordered={false}
                remote
                keyField="id"
                data={entities === null ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  thingsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: thingsUIProps.ids,
                  setIds: thingsUIProps.setIds,
                })}
                {...paginationTableProps}
              >
                <PleaseWaitMessage entities={entities} />
                <NoRecordsFoundMessage entities={entities} />
              </BootstrapTable>
            </Pagination>
          );
        }}
      </PaginationProvider>
    </>
  );
}
