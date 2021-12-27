import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  Home,
  NotFound,
  AuthView,
  BodPotensial,
  BodParsial,
  Datauser,
  SettingDashboard,
} from "../pages";

// pass your route here.

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    sidebarActive: true,
  },
  {
    path: "/Auth",
    component: AuthView,
    exact: false,
    sidebarActive: false,
  },
  {
    path: "/Data_BOD_Potensial",
    component: BodPotensial,
    exact: false,
    sidebarActive: true,
  },
  {
    path: "/Data_BOD_Parsial",
    component: BodParsial,
    exact: false,
    sidebarActive: true,
  },
  {
    path: "/Data_User",
    component: Datauser,
    exact: false,
    sidebarActive: true,
  },
  {
    path: "/Setting_Dashboard",
    component: SettingDashboard,
    exact: false,
    sidebarActive: true,
  },
];

function RouteWithSubRoutes(route) {
  return (
    <MainLayout sidebarActive={route.sidebarActive}>
      <Route
        {...route}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </MainLayout>
  );
}

export function RootRouterConfig() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
