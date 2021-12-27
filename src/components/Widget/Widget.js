import React from "react";
import style from "./Widget.module.css";
import { Button } from "..";
import { arrowRight } from "../../assets";

export const Widget = (props) => {
  const smallWidget = props.smallWidget;
  const largeWidget = props.largeWidget;
  const mediumWidget = props.mediumWidget;
  const historyWidget = props.history;
  const userWidget = props.userWidget;

  const classSmall = [style.containerSmall];
  //   for navigate the icon to right and the content to left
  if (props.rightIcon === true) {
    classSmall.push(style.rightIcon);
  }

  if (props.linearColor === true) {
    classSmall.push(style.linearColor);
  }

  return (
    <>
      {smallWidget && (
        <div className={classSmall.join(" ")}>
          <div className={style.iconContainer}>
            <img src={props.iconSrc} alt={props.altIcon} />
          </div>

          <div className={style.contentSmall}>
            <p>{props.label}</p>
            <p className={style.quantity}>{props.quantity}</p>
          </div>
        </div>
      )}

      {largeWidget && (
        <div className={style.containerLarge}>
          <div className={style.contentContainer}>
            <div className={style.contentText}>
              {props.header}
              <p>{props.desc}</p>
              <Button widget>{props.button}</Button>
            </div>

            <div className={style.imageLarge}>
              <img src={props.imgSrc} alt=" " />
            </div>
          </div>
        </div>
      )}

      {mediumWidget && (
        <div className={style.mediumContainer}>
          {historyWidget && (
            <div className={style.historyContainer}>
              <div className={style.headerHistory}>
                <h2>Riwayat</h2>
              </div>
              <div className={style.historyContentContainer}>
                <div className={style.historyContent}>
                  <div className={style.dividerContent}></div>
                  <p>{props.content}</p>
                </div>
              </div>

              <div className={style.buttonHistory}>
                <Button
                  detail
                  icon
                  iconRight
                  widthIcon={30}
                  iconSrc={arrowRight}
                >
                  Lihat Semua Riwayat
                </Button>
              </div>
            </div>
          )}
          {userWidget && (
            <div className={style.userWidgetContainer}>
              {/* Icon */}
              <div className={style.iconUserContainer}>
                <img src={props.iconSrc} alt="" />
              </div>
              {/* Content */}
              <div className={style.contentUserContainer}>
                <h3>{props.heading}</h3>
                <p className={style.contentUser}>{props.content}</p>
              </div>

              {/* Button */}
              <Button userButton>{props.buttonName}</Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

Widget.propsDefault = {
  smallWidget: false,
  largeWidget: false,
  rightIcon: false,
  linearColor: false,
  mediumWidget: false,
  history: false,
  userWidget: false,
};
