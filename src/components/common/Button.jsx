import React from "react";
import PT from "prop-types";

const types = {
  normal: "btn",
  outline: "btn-outline",
  sweet: "btn-sweet",
  light: "btn-light",
  gradient: "btn-gradient",
};

const Button = ({
  children,
  color = "primary",
  rounded,
  ring,
  shadow,
  material,
  type = "normal",
  loading,
  block,
}) => {
  return (
    <button
      className={`btn ${`${types[type]}-${color}`}${
        !!rounded ? " rounded" : ""
      }${!!ring ? ` btn-ring-${color}` : ""}${
        !!shadow ? ` btn-shadow-${color}` : ""
      }${!!material ? ` btn-material` : ""}${!!loading ? ` btn-loading` : ""}${
        !!block ? ` w-full` : ""
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PT.oneOf([
    "primary",
    "dark",
    "warning",
    "danger",
    "success",
    "teal",
    "violet",
  ]),
  type: PT.oneOf(["normal", "sweet", "outline", "light", "gradient"]),
  rounded: PT.bool,
  ring: PT.bool,
  shadow: PT.bool,
  material: PT.bool,
  loading: PT.bool,
  block: PT.bool,
};

export default Button;
