import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { ThingStatusCssClasses } from "../ThingsUIHelpers";
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

export function ThingsFetchDialog({ show, onHide }) {
  // Things UI Context
  const thingsUIContext = useThingsUIContext();
  const thingsUIProps = useMemo(() => {
    return {
      ids: thingsUIContext.ids,
      queryParams: thingsUIContext.queryParams,
    };
  }, [thingsUIContext]);

  // Things Redux state
  const { things } = useSelector(
    (state) => ({
      things: selectedThings(state.things.entities, thingsUIProps.ids),
    }),
    shallowEqual
  );

  // if there weren't selected ids we should close modal
  useEffect(() => {
    if (!thingsUIProps.ids || thingsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thingsUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Fetch selected elements
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      <Modal.Footer>
        <div>
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
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
