import React from "react";
import { FormControl, TextField } from "@mui/material";
import { useJumboForm } from "../../hooks";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const JumboInput = ({
  fieldName,
  formControl = true,
  onChange,
  defaultValue,
  fullWidth,
  className,
  ...restProps
}) => {
  const { errors, setValue, control } = useJumboForm();

  React.useEffect(() => {
    setValue(fieldName, defaultValue);
  }, [fieldName, setValue, defaultValue]);

  const inputField = (
    <Controller
      control={control}
      name={fieldName}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <TextField
            inputRef={field.ref}
            onChange={field.onChange}
            error={!!errors[fieldName]}
            helperText={
              !!errors && errors.hasOwnProperty(fieldName)
                ? errors[fieldName]?.message
                : ""
            }
            value={field.value === undefined ? "" : field.value}
            {...restProps}
          />
        );
      }}
    />
  );

  if (formControl) {
    return (
      <FormControl className={className} fullWidth={fullWidth}>
        {inputField}
      </FormControl>
    );
  }

  return inputField;
};

export { JumboInput };

JumboInput.propTypes = {
  fieldName: PropTypes.string,
  formControl: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};
