import React from "react";
import style from "./Card.module.css";

export const Card = (props) => {
  const className = [style.card];

  if (props.smallCard === true) {
    className.push(style.smallCard);
  }

  if (props.mediumCard === true) {
    className.push(style.mediumCard);
  }

  if (props.largeCard === true) {
    className.push(style.largeCard);
  }

  return <div className={className.join(" ")}>{props.children}</div>;
};

Card.propsDefault = {
  smallCard: false,
  mediumCard: false,
  largeCard: false,
};
