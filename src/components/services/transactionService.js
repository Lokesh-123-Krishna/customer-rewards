import {
  groupTransactionsByMonth,
  getMonthlyRewardTotals,
  sortTransactionsDescending,
} from "../utils/transactionUtils";

import { getRecentMonths, getMonthKey } from "../utils/dateUtils";

export const getCustomerMonthlyRewards = (transactions = []) => {
  return getMonthlyRewardTotals(transactions);
};

export const getCustomerMonthlyTransactions = (transactions = []) => {
  return groupTransactionsByMonth(transactions);
};

export const getRecentThreeMonthTransactions = (transactions = []) => {
  const recentMonths = getRecentMonths(3);

  const groupedTransactions = groupTransactionsByMonth(transactions);

  return recentMonths.reduce((result, month) => {
    result[month] = groupedTransactions[month] || [];

    return result;
  }, {});
};

export const getTransactionsByMonth = (transactions = [], selectedMonth) => {
  return transactions.filter(
    (transaction) => getMonthKey(transaction.date) === selectedMonth,
  );
};

export const getSortedTransactions = (transactions = []) => {
  return sortTransactionsDescending(transactions);
};
