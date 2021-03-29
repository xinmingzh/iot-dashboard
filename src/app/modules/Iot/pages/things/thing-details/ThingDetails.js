/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, {useEffect, useState} from "react";
import {useSubheader} from "../../../../../../_metronic/layout";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import * as actions from "../../../_redux/things/thingsActions";
import {Card, CardHeader, CardHeaderToolbar, ModalProgressBar} from "../../../../../../_metronic/_partials/controls";

export function ThingDetails({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const subheader = useSubheader();

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
    </Card>
  );
}