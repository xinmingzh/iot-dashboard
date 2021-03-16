import axios from "axios";

export const THINGS_URL = "api/things";

// CREATE =>  POST: add a new thing to the server
export function createThing(thing) {
  return axios.post(THINGS_URL, { thing });
}

// READ
export function getAllThings() {
  return axios.get(THINGS_URL);
}

export function getThingById(thingId) {
  return axios.get(`${THINGS_URL}/${thingId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findThings(queryParams) {
  return axios.post(`${THINGS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateThing(thing) {
  return axios.put(`${THINGS_URL}/${thing.id}`, { thing });
}

// UPDATE Status
export function updateStatusForThings(ids, status) {
  return axios.post(`${THINGS_URL}/updateStatusForThings`, {
    ids,
    status
  });
}

// DELETE => delete the thing from the server
export function deleteThing(thingId) {
  return axios.delete(`${THINGS_URL}/${thingId}`);
}

// DELETE Things by ids
export function deleteThings(ids) {
  return axios.post(`${THINGS_URL}/deleteThings`, { ids });
}
