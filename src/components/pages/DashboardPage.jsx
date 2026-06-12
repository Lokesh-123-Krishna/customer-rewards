import MainLayout from "../layouts/MainLayout";

import AppLoader from "../common/AppLoader";
import ErrorState from "../common/ErrorState";

import DashboardSummaryCards from "../dashboard/DashboardSummaryCards";
import CustomerTable from "../dashboard/CustomerTable";

import { useCustomers } from "../hooks/useCustomers";

import { getDashboardCustomers } from "../services/customerService";

const DashboardPage = () => {
  const { transactions, loading, error, refetch } = useCustomers();

  if (loading) {
    return (
      <MainLayout>
        <AppLoader />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <ErrorState message={error} onRetry={refetch} />
      </MainLayout>
    );
  }

  const customers = getDashboardCustomers(transactions);
  
  return (
    <MainLayout>
      <DashboardSummaryCards customers={customers} />

      <CustomerTable customers={customers} />
    </MainLayout>
  );
};

export default DashboardPage;
