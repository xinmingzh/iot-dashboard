/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, {useEffect, useState} from "react";
import {useSubheader} from "../../../../../../_metronic/layout";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import * as actions from "../../../_redux/things/thingsActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  ModalProgressBar
} from "../../../../../../_metronic/_partials/controls";
import {KubeMetrics} from "../thing-kube-metrics/kubeMetrics";

export function ThingDetails({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const subheader = useSubheader();

  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const {actionsLoading, thingForEdit} = useSelector(
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
    let _title = "Thing";
    if (thingForEdit) {
      _title = `Thing ${thingForEdit.id} - ${thingForEdit.store_id}`;
    }

    setTitle(_title);
    subheader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thingForEdit, id])


  const editThing = () => {
    history.push(`/iot/things/'${thingForEdit.id}'/edit`);
  };

  const deleteThing = () => {
    history.push(`/iot/things/'${thingForEdit.id}'/delete`);
  };

  const backToThingsList = () => {
    history.push(`/iot/things`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar/>}
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
          <button
            type="button"
            className="btn btn-light ml-2"
            onClick={editThing}
          >
            Edit
          </button>
          {`  `}
          <button
            type="button"
            className="btn btn-primary ml-2"
            onClick={deleteThing}
          >
            Delete
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
                <li className="nav-item" onClick={() => setTab("kubeMetrics")}>
                  <a
                      className={`nav-link ${tab === "kubeMetrics" && "active"}`}
                      data-toggle="tab"
                      role="button"
                      aria-selected={(tab === "kubeMetrics").toString()}
                  >
                    Kube Metrics
                  </a>
                </li>
              </>
          )}
        </ul>
        <div className="mt-5">
          {tab === "basic" && (
              <p>Thing Info HERE</p>
          )}
          {tab === "kubeMetrics" && id && (
              <KubeMetrics thingId={id}/>
          )}
        </div>
      </CardBody>
    </Card>
  );
}