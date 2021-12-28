import React from "react";
import { Widget } from "../../components";
import style from "./BannerWidget.module.css";
import { peopleIcon, titikPantau, pencerahan, chartIcon } from "../../assets";

const BannerWidget = () => {
  return (
    <div className={style.container}>
      <Widget
        smallWidget
        iconSrc={peopleIcon}
        label="Karyawan"
        quantity="321"
      />

      <Widget
        smallWidget
        rightIcon
        iconSrc={titikPantau}
        label="Titik Pantau"
        quantity="43"
      />

      <Widget
        smallWidget
        rightIcon
        iconSrc={pencerahan}
        label="Perusahaan"
        quantity="45"
      />

      <Widget
        smallWidget
        rightIcon
        linearColor
        iconSrc={chartIcon}
        label="Total BOD"
        quantity="65"
      />
    </div>
  );
};

export default BannerWidget;
