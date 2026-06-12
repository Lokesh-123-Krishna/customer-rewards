export const getDashboardMetrics = (
  customers = []
) => {
  return customers.reduce(
    (metrics, customer) => {
      metrics.totalCustomers += 1;

      metrics.totalTransactions +=
        customer.transactionCount;

      metrics.totalRewards +=
        customer.totalRewardPoints;

      return metrics;
    },
    {
      totalCustomers: 0,
      totalTransactions: 0,
      totalRewards: 0,
    }
  );
};