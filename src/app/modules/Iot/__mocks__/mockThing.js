import carTableMock from "./carTableMock";
import MockUtils from "./mock.utils";

export default function mockThings(mock) {
  mock.onPost("api/things").reply(({ data }) => {
    const { thing } = JSON.parse(data);
    const {
      model = "",
      manufacture = "",
      modelYear = 2000,
      mileage = 0,
      description = "",
      color = "Black",
      price = 1000,
      condition = 0,
      status = 0,
      VINCode = ""
    } = thing;

    const id = generateThingId();
    const newThing = {
      id,
      model,
      manufacture,
      modelYear,
      mileage,
      description,
      color,
      price,
      condition,
      status,
      VINCode
    };
    carTableMock.push(newThing);
    return [200, { thing: newThing }];
  });

  mock.onPost("api/things/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredThings = mockUtils.baseFilter(carTableMock, queryParams);
    return [200, filteredThings];
  });

  mock.onPost("api/things/deleteThings").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = carTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        carTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/things/updateStatusForThings").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    carTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/things\/\d+/).reply(config => {
    const id = config.url.match(/api\/things\/(\d+)/)[1];
    const thing = carTableMock.find(el => el.id === +id);
    if (!thing) {
      return [400];
    }

    return [200, thing];
  });

  mock.onPut(/api\/things\/\d+/).reply(config => {
    const id = config.url.match(/api\/things\/(\d+)/)[1];
    const { thing } = JSON.parse(config.data);
    const index = carTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    carTableMock[index] = { ...thing };
    return [200];
  });

  mock.onDelete(/api\/things\/\d+/).reply(config => {
    const id = config.url.match(/api\/things\/(\d+)/)[1];
    const index = carTableMock.findIndex(el => el.id === +id);
    carTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateThingId() {
  const ids = carTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}