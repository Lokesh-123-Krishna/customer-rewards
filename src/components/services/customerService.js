import {
  buildCustomerSummary,
  getCustomerTransactions,
} from '../utils/customerUtils';

import {
  calculateRewardPoints,
  calculateCustomerRewards,
} from '../utils/rewardUtils';

export const getDashboardCustomers =
  (transactions = []) => {
    return buildCustomerSummary(
      transactions
    );
  };

export const getCustomerById = (
  transactions = [],
  customerId
) => {
    const customerTransactions =
      getCustomerTransactions(
        transactions,
        customerId
      );

    if (
      customerTransactions.length === 0
    ) {
      return null;
    }

    const totalRewards =
      customerTransactions.reduce(
        (total, transaction) =>
          total +
          calculateRewardPoints(
            transaction.amount
          ),
        0
      );

    const totalSpent =
      customerTransactions.reduce(
        (total, transaction) =>
          total +
          Number(
            transaction.amount
          ),
        0
      );

    return {
      customerId,
      transactionCount:
        customerTransactions.length,
      totalSpent,
      totalRewards,
      transactions:
        customerTransactions,
    };
  };

export const searchCustomers = (
  customers = [],
  searchTerm = ''
) => {
  const normalizedSearchTerm =
    searchTerm
      .trim()
      .toLowerCase();

  if (!normalizedSearchTerm) {
    return customers;
  }

  return customers.filter(
    (customer) =>
      customer.customerId
        .toLowerCase()
        .includes(
          normalizedSearchTerm
        )
  );
};