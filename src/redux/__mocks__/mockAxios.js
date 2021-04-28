import MockAdapter from "axios-mock-adapter";
import mockAuth from "../../app/modules/Auth/__mocks__/mockAuth";
import mockCustomers from "../../app/modules/ECommerce/__mocks__/mockCustomer";
import mockProducts from "../../app/modules/ECommerce/__mocks__/mockProduct";
import mockRemarks from "../../app/modules/ECommerce/__mocks__/mockRemark";
import mockSpecifications from "../../app/modules/ECommerce/__mocks__/mockSpecification";
import mockThings from "../../app/modules/Iot/__mocks__/mockThing";
import mockKubeMetrics from "../../app/modules/Iot/__mocks__/mockKubeMetrics";

export default function mockAxios(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });

  mockAuth(mock);
  mockCustomers(mock);
  mockProducts(mock);
  mockThings(mock);
  mockKubeMetrics(mock);
  mockRemarks(mock);
  mockSpecifications(mock);

  return mock;
}
