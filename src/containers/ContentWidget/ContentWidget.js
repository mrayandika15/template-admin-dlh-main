import React from "react";
import { Widget } from "../../components";
import style from "./ContentWidget.module.css";
import { chartWidget, onePeople } from "../../assets";

export const ContentWidget = () => {
  return (
    <div className={style.container}>
      <div className={style.section__container}>
        <div className={style.large__content}>
          <Widget
            largeWidget
            header="Data Beban Pencemaran BOD Potensial"
            desc="Masukan Data BOD dengan Klik Button di bawah ini !"
            imgSrc={chartWidget}
            button="Masukan Data"
          />
        </div>

        <div className={style.medium__content}>
          <Widget mediumWidget history content="raka" />
        </div>
      </div>
      <div className={style.section__container}>
        <div className={style.large__content}>
          <Widget
            largeWidget
            header="Data Beban Pencemaran BOD Aktual"
            desc="Masukan Data Pengolahan Air !"
            imgSrc={chartWidget}
            button="Masukan Data"
          />
        </div>
        <div className={style.medium__content}>
          <Widget
            mediumWidget
            userWidget
            iconSrc={onePeople}
            heading="Raka"
            content="Content"
            buttonName="selengkapnya"
          />
        </div>
      </div>
    </div>
  );
};
