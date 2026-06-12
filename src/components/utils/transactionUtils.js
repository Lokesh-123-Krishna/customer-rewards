// src/utils/transactionUtils.js

import { getMonthKey } from "./dateUtils";
import { calculateRewardPoints } from "./rewardUtils";

export const groupTransactionsByMonth = (transactions = []) => {
  return transactions.reduce((monthMap, transaction) => {
    const monthKey = getMonthKey(transaction.date);

    if (!monthMap[monthKey]) {
      monthMap[monthKey] = [];
    }

    monthMap[monthKey].push({
      ...transaction,
      rewardPoints: calculateRewardPoints(transaction.amount),
    });

    return monthMap;
  }, {});
};

export const getMonthlyRewardTotals = (transactions = []) => {
  const monthlyGroups = groupTransactionsByMonth(transactions);

  return Object.entries(monthlyGroups).map(([month, monthTransactions]) => ({
    month,
    rewardPoints: monthTransactions.reduce(
      (total, transaction) => total + transaction.rewardPoints,
      0,
    ),
    transactionCount: monthTransactions.length,
  }));
};

export const sortTransactionsDescending = (transactions = []) => {
  return [...transactions].sort(
    (firstTransaction, secondTransaction) =>
      new Date(secondTransaction.date) - new Date(firstTransaction.date),
  );
};
