import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AppLoader from "../common/AppLoader";
import ErrorState from "../common/ErrorState";
import EmptyState from "../common/EmptyState";

import CustomerSummary from "../customer/CustomerSummary";
import MonthlyRewardTabs from "../customer/MonthlyRewardTabs";
import TransactionTable from "../customer/TransactionTable";

import { useCustomers } from "../hooks/useCustomers";
import { getCustomerById } from "../services/customerService";
import { getCustomerMonthlyRewards } from "../services/rewardCalculatorService";
import { getTransactionsByMonth } from "../services/transactionService";

const CustomerDetailsPage = () => {
  const { customerId } = useParams();
  const { transactions, loading, error, refetch } = useCustomers();

  const [selectedMonth, setSelectedMonth] = useState("");

  const customer = useMemo(
    () => getCustomerById(transactions, customerId),
    [transactions, customerId]
  );

  const monthlyRewards = useMemo(
    () =>
      customer
        ? getCustomerMonthlyRewards(customer.transactions)
        : [],
    [customer]
  );

  useEffect(() => {
    if (monthlyRewards.length && !selectedMonth) {
      setSelectedMonth(monthlyRewards[0].month);
    }
  }, [monthlyRewards, selectedMonth]);

  const selectedMonthTransactions = useMemo(() => {
    if (!customer || !selectedMonth) {
      return [];
    }

    return getTransactionsByMonth(
      customer.transactions,
      selectedMonth
    );
  }, [customer, selectedMonth]);

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

  if (!customer) {
    return (
      <MainLayout>
        <EmptyState title="Customer Not Found" />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <CustomerSummary customer={customer} />

      <MonthlyRewardTabs
        transactions={customer.transactions}
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
      />

      <TransactionTable transactions={selectedMonthTransactions} />
    </MainLayout>
  );
};

export default CustomerDetailsPage;