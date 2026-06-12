import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import CustomerDetailsPage from "../pages/CustomerDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

import { ROUTES } from "../constants/routeConstants";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />

        <Route
          path={ROUTES.CUSTOMER_DETAILS}
          element={<CustomerDetailsPage />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
