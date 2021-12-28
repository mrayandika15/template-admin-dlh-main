import React from "react";
import { ContentWidget, Navbar, BannerWidget } from "../../containers";
// Layout
import { HomeLayout, DashboardLayout } from "../../layouts";

// icon

export default function Home() {
  return (
    <HomeLayout>
      <DashboardLayout>
        <Navbar header="Welcome to DLH Cimahi" />
        <BannerWidget />
        <ContentWidget />
      </DashboardLayout>
    </HomeLayout>
  );
}
