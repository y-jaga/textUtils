import React from "react";

export default function Alert(props) {
  const capitalizeFirstChar = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalizeFirstChar(props.alert.type)}</strong>
        <strong> : {props.alert.msg}</strong>
      </div>
    )
  );
}
