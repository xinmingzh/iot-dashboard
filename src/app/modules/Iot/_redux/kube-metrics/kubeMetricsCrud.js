import axios from "axios";

export const KUBEMETRICS_URL = "api/kubeMetrics";

// READ
// Server should return filtered kubeMetrics by thingId
export function getThingKubeMetricsByThingId(thingId) {
  return axios.get(`${KUBEMETRICS_URL}/${thingId}`);
}
