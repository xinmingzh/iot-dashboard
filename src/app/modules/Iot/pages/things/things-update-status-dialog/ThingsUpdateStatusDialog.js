import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ThingStatusCssClasses } from "../ThingsUIHelpers";
import * as actions from "../../../_redux/things/thingsActions";
import { useThingsUIContext } from "../ThingsUIContext";

const selectedThings = (entities, ids) => {
  const _things = [];
  ids.forEach((id) => {
    const thing = entities.find((el) => el.id === id);
    if (thing) {
      _things.push(thing);
    }
  });
  return _things;
};

export function ThingsUpdateStatusDialog({ show, onHide }) {
  // Things UI Context
  const thingsUIContext = useThingsUIContext();
  const thingsUIProps = useMemo(() => {
    return {
      ids: thingsUIContext.ids,
      setIds: thingsUIContext.setIds,
      queryParams: thingsUIContext.queryParams,
    };
  }, [thingsUIContext]);

  // Things Redux state
  const { things, isLoading } = useSelector(
    (state) => ({
      things: selectedThings(state.things.entities, thingsUIProps.ids),
      isLoading: state.things.actionsLoading,
    }),
    shallowEqual
  );

  // if there weren't selected things we should close modal
  useEffect(() => {
    if (thingsUIProps.ids || thingsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thingsUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for updateing thing by ids
    dispatch(actions.updateThingsStatus(thingsUIProps.ids, status)).then(
      () => {
        // refresh list after deletion
        dispatch(actions.fetchThings(thingsUIProps.queryParams)).then(
          () => {
            // clear selections list
            thingsUIProps.setIds([]);
            // closing delete modal
            onHide();
          }
        );
      }
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status has been updated for selected things
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block cursor-default">
        {isLoading && (
          <div className="overlay-layer bg-transparent">
            <div className="spinner spinner-lg spinner-warning" />
          </div>
        )}
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {things.map((thing) => (
              <div className="list-timeline-item mb-3" key={thing.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${
                      ThingStatusCssClasses[thing.status]
                    } label-inline`}
                    style={{ width: "60px" }}
                  >
                    ID: {thing.id}
                  </span>{" "}
                  <span className="ml-5">
                    {thing.manufacture}, {thing.model}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className={`form-control ${ThingStatusCssClasses[status]}`}
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Selling</option>
            <option value="1">Sold</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
            Update Status
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
