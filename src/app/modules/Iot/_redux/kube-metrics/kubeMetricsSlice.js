import {createSlice} from "@reduxjs/toolkit";

const initialKubeMetricsState = {
  listLoading: false,
  actionsLoading: false,
  kubeMetric: {
    id: undefined,
    updated: undefined,
    nodeMetricList: undefined,
    podMetricList: undefined,
    deploymentList: undefined,
    podList: undefined
  },
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const kubeMetricsSlice = createSlice({
  name: "kubeMetrics",
  initialState: initialKubeMetricsState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      state.kubeMetric = initialKubeMetricsState.kubeMetric
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // getKubeMetricById
    kubeMetricFetched: (state, action) => {
      state.actionsLoading = false;
      state.kubeMetric = action.payload.kubeMetric;
      state.error = null;
    }
  }
});
