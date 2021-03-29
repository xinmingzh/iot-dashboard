/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../_redux/things/thingsActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { ThingEditForm } from "./ThingEditForm";
import { Specifications } from "../thing-specifications/Specifications";
import { SpecificationsUIProvider } from "../thing-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import { RemarksUIProvider } from "../thing-remarks/RemarksUIContext";
import { Remarks } from "../thing-remarks/Remarks";

const initThing = {
  id: undefined,
  store_id: "",
  updated: undefined,
  created: undefined,
  status: {
    PREDICTOR_IMAGE: "",
    DS_IMAGE: "",
    BRS_IMAGE: "",
    HORN_IMAGE: "",
    MODEL_SFTP_IMAGE: "",
    NUM_CAMERAS: 2,
    CAM_FRAME_WIDTH: 3088,
    CAM_FRAME_HEIGHT: 2064,
    DS_INPUT_WIDTH: 608,
    DS_INPUT_HEIGHT: 608,
    TIMEOUT: -1,
    updated: undefined
  }
};

export function ThingsEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const subheader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, thingForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.things.actionsLoading,
      thingForEdit: state.things.thingForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchThing(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Thing";
    if (thingForEdit && id) {
      _title = `Edit thing ${thingForEdit.id} - ${thingForEdit.store_id}`;
    }

    setTitle(_title);
    subheader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thingForEdit, id]);

  const saveThing = (values) => {
    if (!id) {
      dispatch(actions.createThing(values)).then(() => backToThingsList());
    } else {
      dispatch(actions.updateThing(values)).then(() => backToThingsList());
    }
  };

  const btnRef = useRef();  
  const saveThingClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToThingsList = () => {
    history.push(`/iot/things`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToThingsList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
            Back
          </button>
          {`  `}
          <button className="btn btn-light ml-2">
            <i className="fa fa-redo"></i>
            Reset
          </button>
          {`  `}
          <button
            type="submit"
            className="btn btn-primary ml-2"
            onClick={saveThingClick}
          >
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <ul className="nav nav-tabs nav-tabs-line " role="tablist">
          <li className="nav-item" onClick={() => setTab("basic")}>
            <a
              className={`nav-link ${tab === "basic" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "basic").toString()}
            >
              Basic info
            </a>
          </li>
          {id && (
            <>
              {" "}
              <li className="nav-item" onClick={() => setTab("remarks")}>
                <a
                  className={`nav-link ${tab === "remarks" && "active"}`}
                  data-toggle="tab"
                  role="button"
                  aria-selected={(tab === "remarks").toString()}
                >
                  Thing remarks
                </a>
              </li>
              <li className="nav-item" onClick={() => setTab("specs")}>
                <a
                  className={`nav-link ${tab === "specs" && "active"}`}
                  data-toggle="tab"
                  role="tab"
                  aria-selected={(tab === "specs").toString()}
                >
                  Thing specifications
                </a>
              </li>
            </>
          )}
        </ul>
        <div className="mt-5">
          {tab === "basic" && (
            <ThingEditForm
              actionsLoading={actionsLoading}
              thing={thingForEdit || initThing}
              btnRef={btnRef}
              saveThing={saveThing}
            />
          )}
          {tab === "remarks" && id && (
            <RemarksUIProvider currentThingId={id}>
              <Remarks />
            </RemarksUIProvider>
          )}
          {tab === "specs" && id && (
            <SpecificationsUIProvider currentThingId={id}>
              <Specifications />
            </SpecificationsUIProvider>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
