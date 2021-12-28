import { Button } from "..";
import style from "./CardForm.module.css";

const CardForm = ({ form, results }) => {
  return (
    <div className={style.container}>
      <div className={style.header__container}>Perhitungan</div>

      <div className={style.content__container}>
        <div className={style.content}>
          {form.map(({ name }) => {
            return (
              <div className={style.form__control}>
                <label htmlFor={name}>{name}</label>
                <input type="text" name={name} />
              </div>
            );
          })}

          <div className={style.button__container}>
            <Button primary>Cek Hasil</Button>
          </div>

          <div className={style.form__control}>
            <label htmlFor={results}>{results}</label>
            <input type="text" name={results} />
          </div>

          <div className={style.button__container}>
            <Button primary>Simpan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
