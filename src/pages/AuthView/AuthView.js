import React from "react";

import { BannerAuth, ModalAuth } from "../../containers";
import { AuthLayout } from "../../layouts";

export default function AuthView() {
  return (
    <AuthLayout>
      <BannerAuth />
      <ModalAuth />
    </AuthLayout>
  );
}
