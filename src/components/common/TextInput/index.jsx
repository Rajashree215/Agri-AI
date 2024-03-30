import { TextField, Typography } from "@mui/material";
import React from "react";

export default function TextInput({
  variant,
  type,
  value,
  name,
  label,
  labelvariant,
  className,
  size,
  fullWidth,
  width,
  placeholder,
  borderRadius,
  onChange,
  maxLength,
  disabled,
}) {
  return (
    <>
      <label htmlFor="" className={className}>
        <Typography variant={labelvariant}>{label}</Typography>
      </label>
      <TextField
        value={value}
        style={{width:width}}
        variant={variant}
        type={type}
        name={name}
        className={className}
        size={size}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        fullWidth={fullWidth}
        InputProps={{
          sx:{borderRadius:borderRadius},
          maxLength:{maxLength}
        }}
      />
    </>
  );
}
