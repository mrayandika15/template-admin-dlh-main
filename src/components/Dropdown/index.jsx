import style from "./Dropdown.module.css";

const Dropdown = ({ name, form, option }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <label for={name}>Kecamatan</label>
        <select name={name} form={form}>
          {option.map(({ values, name }) => {
            return <option value={values}>{name}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
