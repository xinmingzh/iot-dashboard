import * as requestFromServer from "./thingsCrud";
import {thingsSlice, callTypes} from "./thingsSlice";

const {actions} = thingsSlice;

export const fetchThings = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findThings(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.thingsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find things";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchThing = id => dispatch => {
  if (!id) {
    return dispatch(actions.thingFetched({ thingForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getThingById(id)
    .then(response => {
      const thing = response.data;
      dispatch(actions.thingFetched({ thingForEdit: thing }));
    })
    .catch(error => {
      error.clientMessage = "Can't find thing";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteThing = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteThing(id)
    .then(response => {
      dispatch(actions.thingDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete thing";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createThing = thingForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createThing(thingForCreation)
    .then(response => {
      const { thing } = response.data;
      dispatch(actions.thingCreated({ thing }));
    })
    .catch(error => {
      error.clientMessage = "Can't create thing";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateThing = thing => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateThing(thing)
    .then(() => {
      dispatch(actions.thingUpdated({ thing }));
    })
    .catch(error => {
      error.clientMessage = "Can't update thing";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateThingsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForThings(ids, status)
    .then(() => {
      dispatch(actions.thingsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update things status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteThings = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteThings(ids)
    .then(() => {
      dispatch(actions.thingsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete things";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
