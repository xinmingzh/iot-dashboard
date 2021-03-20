import React from "react";
import _ from "lodash";
import {FieldFeedbackLabel} from "./FieldFeedbackLabel";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control"];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  if (touched && !errors) {
    classes.push("is-valid");
  }

  return classes.join(" ");
};

export function Input({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>Enter {label}</label>}
      <input
        type={type}
        className={getFieldCSSClasses(
            _.get(touched, field.name),
            _.get(errors, field.name)
        )}
        {...field}
        {...props}
      />
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={_.get(errors, field.name)}
          touched={_.get(touched, field.name)}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
