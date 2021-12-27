import React from "react";
import { ContentWidget, Navbar } from "../../containers";
import { Bannerwidget } from "../../containers/Bannerwidget/Bannerwidget";
// Layout
import { HomeLayout, DashboardLayout } from "../../layouts";

// icon

const Home = () => {
  return (
    <HomeLayout>
      <DashboardLayout>
        <Navbar header="Welcome to DLH Cimahi" />
        <Bannerwidget />
        <ContentWidget />
      </DashboardLayout>
    </HomeLayout>
  );
};

export default Home;
