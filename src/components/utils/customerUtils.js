import { calculateRewardPoints } from "./rewardUtils";

export const groupTransactionsByCustomer = (transactions = []) => {
  return transactions.reduce((customerMap, transaction) => {
    const { customerId } = transaction;

    if (!customerMap[customerId]) {
      customerMap[customerId] = [];
    }

    customerMap[customerId].push(transaction);

    return customerMap;
  }, {});
};

export const buildCustomerSummary = (transactions = []) => {
  const groupedCustomers = groupTransactionsByCustomer(transactions);

  return Object.entries(groupedCustomers).map(
    ([customerId, customerTransactions]) => {
      const totalSpent = customerTransactions.reduce(
        (total, transaction) => total + Number(transaction.amount || 0),
        0,
      );

      const totalRewardPoints = customerTransactions.reduce(
        (total, transaction) =>
          total + calculateRewardPoints(transaction.amount),
        0,
      );

      return {
        customerId,
        transactionCount: customerTransactions.length,
        totalSpent,
        totalRewardPoints,
      };
    },
  );
};

export const getCustomerTransactions = (transactions = [], customerId) => {
  return transactions.filter(
    (transaction) => transaction.customerId === customerId,
  );
};
