import {
  calculateRewardPoints,
  calculateTotalRewards,
} from "../utils/rewardUtils";
import {
  groupTransactionsByMonth,
  getMonthlyRewardTotals,
} from "../utils/transactionUtils";

export const getTransactionRewardPoints = (amount) => {
  return calculateRewardPoints(amount);
};

export const getCustomerTotalRewards = (transactions = []) => {
  return calculateTotalRewards(transactions);
};

export const getTransactionsWithRewards = (transactions = []) => {
  return transactions.map((transaction) => ({
    ...transaction,
    rewardPoints: calculateRewardPoints(transaction.amount),
  }));
};

export const getCustomerMonthlyRewards = (transactions = []) => {
  return getMonthlyRewardTotals(transactions);
};

export const getCustomerMonthlyTransactions = (transactions = []) => {
  return groupTransactionsByMonth(transactions);
};
