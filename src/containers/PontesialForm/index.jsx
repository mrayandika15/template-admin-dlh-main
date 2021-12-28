import { CardForm, Dropdown } from "../../components";
import style from "./PotensialForm.module.css";
import kecamatan from "../../utils/kecamatan";
import year from "../../utils/tahun";

const PotensialForm = () => {
  const dataForm = [
    {
      name: "Jumlah Penduduk",
    },
    {
      name: "Rasio Ekivalen",
    },
    {
      name: "Alfa",
    },
    {
      name: "Faktor Emisi Penduduk",
    },
  ];

  return (
    <div className={style.container}>
      <Dropdown option={kecamatan} name="kecamatan" form="kecamatan" />
      <Dropdown option={year} name="Tahun" form="Tahun" />

      <CardForm form={dataForm} results="Hasil" />
    </div>
  );
};

export default PotensialForm;
