/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/things/thingsActions";
import { useThingsUIContext } from "../ThingsUIContext";

export function ThingsDeleteDialog({ show, onHide }) {
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
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.things.actionsLoading }),
    shallowEqual
  );

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  // if there weren't selected things we should close modal
  useEffect(() => {
    if (!thingsUIProps.ids || thingsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thingsUIProps.ids]);

  const deleteThings = () => {
    // server request for deleting thing by seleted ids
    dispatch(actions.deleteThings(thingsUIProps.ids)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchThings(thingsUIProps.queryParams)).then(() => {
        // clear selections list
        thingsUIProps.setIds([]);
        // closing delete modal
        onHide();
      });
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Things Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete selected things?</span>
        )}
        {isLoading && <span>Things are deleting...</span>}
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
            onClick={deleteThings}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
