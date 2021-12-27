import React from "react";
import style from "./Form.module.css";

export const Form = (props) => {
  const hasIcon = props.hasIcon;

  return (
    <div className={style.container}>
      {hasIcon && (
        <div className={style.icon}>
          <img src={props.Icon} alt="" />
        </div>
      )}

      <input
        type={props.onType}
        className={style.input}
        placeholder={props.placeholder}
        ref={props.onRef}
      />
    </div>
  );
};

Form.defaultProps = {
  hasIcon: false,
};
