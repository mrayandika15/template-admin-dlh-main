import React from "react";
import style from "./Status.module.css";

export const Status = (props) => {
  const className = [];

  const processType = props.process;
  const finishType = props.finish;

  if (props.process === true) {
    className.push(style.processContainer);
  }

  if (props.finish === true) {
    className.push(style.finishContainer);
  }

  return (
    <div className={className}>
      {processType && <p>Process</p>}
      {finishType && <p>Finish</p>}
    </div>
  );
};

Status.defaultProps = {
  process: false,
  finish: false,
};
