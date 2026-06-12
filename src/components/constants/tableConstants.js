export const CUSTOMER_TABLE_COLUMNS = [
  {
    field: 'customerId',
    headerName: 'Customer ID',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'transactionCount',
    headerName: 'Transactions',
    minWidth: 140,
    flex: 1,
  },
  {
    field: 'totalSpent',
    headerName: 'Total Spent ($)',
    minWidth: 160,
    flex: 1,
  },
  {
    field: 'totalRewardPoints',
    headerName: 'Reward Points',
    minWidth: 160,
    flex: 1,
  },
];

export const TRANSACTION_TABLE_COLUMNS = [
  {
    field: 'transactionId',
    headerName: 'Transaction ID',
  },
  {
    field: 'date',
    headerName: 'Date',
  },
  {
    field: 'amount',
    headerName: 'Amount ($)',
  },
  {
    field: 'rewardPoints',
    headerName: 'Reward Points',
  },
];

export const MONTH_COLUMNS = [
  'January',
  'February',
  'March',
];