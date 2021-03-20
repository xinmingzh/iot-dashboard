export const ThingStatusCssClasses = ["success", "info", ""];
export const ThingStatusTitles = ["Selling", "Sold"];
export const ThingConditionCssClasses = ["success", "danger", ""];
export const ThingConditionTitles = ["New", "Used"];
export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "5", value: 5 },
  { text: "10", value: 10 },
  { text: "15", value: 15 }
];
export const initialFilter = {
  filter: {
    model: "",
    manufacture: "",
    VINCode: ""
  },
  sortOrder: "asc", // asc||desc
  sortField: "VINCode",
  pageNumber: 1,
  pageSize: 10
};
export const AVAILABLE_STORE_ID = [
  "",
  "kroger-1",
  "sobeys-1",
  "sobeys-2",
  "wakefern",
  "demo-1",
  "demo-2",
  "demo20"
];
export const AVAILABLE_PREDICTOR_IMAGE = [
  "",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_predictor_multi:v0.1",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_predictor_multi:v0.2"
];
export const AVAILABLE_BRS_IMAGE = [
  "",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_brs:v0.1",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_brs:v0.2"
];
export const AVAILABLE_DS_IMAGE = [
  "",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_ds:v0.1",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_ds:v0.2"
];
export const AVAILABLE_HORN_IMAGE = [
  "",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_horn:v0.1",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_horn:v0.2"
];
export const AVAILABLE_MODEL_SFTP_IMAGE = [
  "",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_model_sftp:v0.1",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_model_sftp:v0.2",
  "git.caperlab.com:5050/caper/monorepo/cart_cv_model_sftp:v0.3"
];
