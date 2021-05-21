import kubeMetricTableMock from "./kubeMetricTableMock";

export default function mockKubeMetrics(mock) {
  mock.onGet(/api\/kubeMetrics\/\S+/).reply(config => {
    const id = config.url.match(/api\/kubeMetrics\/(\S+)/)[1];
    const kubeMetric = kubeMetricTableMock.find(el => el.id === id);
    if (!kubeMetric) {
      return [400];
    }
    return [200, kubeMetric];
  });
}
