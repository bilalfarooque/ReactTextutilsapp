import React from "react";

function Alert(props) {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Success!</h4>
      <p>
      {props.alert.msg}
      </p>
    </div>
  );
}

export default Alert;
