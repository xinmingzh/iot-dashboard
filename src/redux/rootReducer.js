import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {customersSlice} from "../app/modules/ECommerce/_redux/customers/customersSlice";
import {productsSlice} from "../app/modules/ECommerce/_redux/products/productsSlice";
import {remarksSlice} from "../app/modules/ECommerce/_redux/remarks/remarksSlice";
import {specificationsSlice} from "../app/modules/ECommerce/_redux/specifications/specificationsSlice";
import {thingsSlice} from "../app/modules/Iot/_redux/things/thingsSlice";
import {kubeMetricsSlice} from "../app/modules/Iot/_redux/kube-metrics/kubeMetricsSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  products: productsSlice.reducer,
  remarks: remarksSlice.reducer,
  specifications: specificationsSlice.reducer,
  things: thingsSlice.reducer,
  kubeMetrics: kubeMetricsSlice.reducer
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
