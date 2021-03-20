// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../../../../../../_metronic/_partials/controls";
import {
  AVAILABLE_STORE_ID,
  AVAILABLE_BRS_IMAGE,
  AVAILABLE_DS_IMAGE, AVAILABLE_MODEL_SFTP_IMAGE, AVAILABLE_PREDICTOR_IMAGE, AVAILABLE_HORN_IMAGE,
} from "../ThingsUIHelpers";

// Validation schema
const ThingEditSchema = Yup.object().shape({
  store_id: Yup.string()
    .min(2, "Minimum 2 symbols")
    .max(10, "Maximum 10 symbols")
    .required("Store Id is required"),
  status: Yup.object().shape({
    NUM_CAMERAS: Yup.number()
      .min(0, "0 is minimum")
      .max(5, "5 is maximum")
      .required("NUM_CAMERAS is required")
  })
});

export function ThingEditForm({
  thing,
  btnRef,
  saveThing,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={thing}
        validationSchema={ThingEditSchema}
        onSubmit={(values) => {
          saveThing(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right">
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <Select name="store_id" label="Store ID">
                      {AVAILABLE_STORE_ID.map((store_id) => (
                        <option key={store_id} value={store_id}>
                          {store_id}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="form-group">
                    <Field
                      type="number"
                      name="status.NUM_CAMERAS"
                      component={Input}
                      placeholder="2"
                      label="NUM_CAMERAS"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="number"
                      name="status.CAM_FRAME_WIDTH"
                      component={Input}
                      placeholder="3088"
                      label="CAM_FRAME_WIDTH"
                    />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <Select name="status.MODEL_SFTP_IMAGE" label="MODEL_SFTP_IMAGE">
                      {AVAILABLE_MODEL_SFTP_IMAGE.map((image) => (
                        <option key={image} value={image}>
                          {image}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="form-group">
                    <Select name="status.BRS_IMAGE" label="BRS_IMAGE">
                      {AVAILABLE_BRS_IMAGE.map((image) => (
                        <option key={image} value={image}>
                          {image}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="form-group">
                    <Select name="status.DS_IMAGE" label="DS_IMAGE">
                      {AVAILABLE_DS_IMAGE.map((image) => (
                        <option key={image} value={image}>
                          {image}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="form-group">
                    <Select name="status.PREDICTOR_IMAGE" label="PREDICTOR_IMAGE">
                      {AVAILABLE_PREDICTOR_IMAGE.map((image) => (
                        <option key={image} value={image}>
                          {image}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="form-group">
                    <Select name="status.HORN_IMAGE" label="HORN_IMAGE">
                      {AVAILABLE_HORN_IMAGE.map((image) => (
                        <option key={image} value={image}>
                          {image}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
