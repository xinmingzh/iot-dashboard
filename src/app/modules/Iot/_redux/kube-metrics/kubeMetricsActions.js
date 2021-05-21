import * as requestFromServer from "./kubeMetricsCrud";
import {kubeMetricsSlice, callTypes} from "./kubeMetricsSlice";

const {actions} = kubeMetricsSlice;

export const fetchKubeMetric = thingId => dispatch => {
  if (!thingId) {
    return dispatch(actions.kubeMetricFetched({ kubeMetric: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getThingKubeMetricsByThingId(thingId)
    .then(response => {
      const kubeMetric = response.data;
      dispatch(actions.kubeMetricFetched({ kubeMetric: kubeMetric }));
    })
    .catch(error => {
      error.clientMessage = "Can't find kubeMetric";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
