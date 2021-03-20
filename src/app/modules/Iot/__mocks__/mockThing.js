import thingTableMock from "./thingTableMock";
import MockUtils from "./mock.utils";
import { v4 as uuidv4 } from "uuid";

export default function mockThings(mock) {
  mock.onPost("api/things").reply(({ data }) => {
    const { thing } = JSON.parse(data);
    const {
      id = uuidv4(),
      store_id = "",
      updated = (new Date()).toDateString(),
      created = (new Date()).toDateString(),
      status = {
        PREDICTOR_IMAGE: "",
        DS_IMAGE: "",
        BRS_IMAGE: "",
        HORN_IMAGE: "",
        NUM_CAMERAS: 0,
        CAM_FRAME_WIDTH: 0,
        CAM_FRAME_HEIGHT: 0,
        DS_INPUT_WIDTH: 0,
        DS_INPUT_HEIGHT: 0,
        TIMEOUT: -1,
        updated: (new Date()).toDateString()
      }
    } = thing;

    const newThing = {
      id,
      store_id,
      updated,
      created,
      status
    };
    thingTableMock.push(newThing);
    return [200, { thing: newThing }];
  });

  mock.onPost("api/things/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredThings = mockUtils.baseFilter(thingTableMock, queryParams);
    return [200, filteredThings];
  });

  mock.onPost("api/things/deleteThings").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = thingTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        thingTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/things/updateStatusForThings").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    thingTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/things\/\d+/).reply(config => {
    const id = config.url.match(/api\/things\/(\d+)/)[1];
    const thing = thingTableMock.find(el => el.id === id);
    if (!thing) {
      return [400];
    }

    return [200, thing];
  });

  mock.onPut(/api\/things\/\d+/).reply(config => {
    const id = config.url.match(/api\/things\/(\d+)/)[1];
    const { thing } = JSON.parse(config.data);
    const index = thingTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    thingTableMock[index] = { ...thing };
    return [200];
  });

  mock.onDelete(/api\/things\/\d+/).reply(config => {
    const id = config.url.match(/api\/things\/(\d+)/)[1];
    const index = thingTableMock.findIndex(el => el.id === +id);
    thingTableMock.splice(index, 1);
    if (!(index === -1)) {
      return [400];
    }

    return [200];
  });
}
