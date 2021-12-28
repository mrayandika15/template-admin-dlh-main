import { Navbar, PotensialForm } from "../../containers";
import { DashboardLayout } from "../../layouts";

const InputPotensial = () => {
  return (
    <DashboardLayout>
      <Navbar header="Data Bod Potensial" />
      <PotensialForm />
    </DashboardLayout>
  );
};

export default InputPotensial;
