import {
  getCustomerMonthlyRewards,
} from '../services/transactionService';

describe(
  'Transaction Service Tests',
  () => {
    const transactions = [
      {
        customerId: 'CUSTOMER001',
        transactionId: 'TRXNID001',
        amount: 120,
        date: '2026-04-10',
      },
      {
        customerId: 'CUSTOMER001',
        transactionId: 'TRXNID002',
        amount: 75,
        date: '2026-05-10',
      },
      {
        customerId: 'CUSTOMER001',
        transactionId: 'TRXNID003',
        amount: 150,
        date: '2026-06-10',
      },
    ];

    test(
      'should group transactions by month',
      () => {
        const result =
          getCustomerMonthlyRewards(
            transactions
          );

        expect(
          result.length
        ).toBe(3);
      }
    );

    test(
      'should calculate monthly rewards',
      () => {
        const result =
          getCustomerMonthlyRewards(
            transactions
          );

        expect(
          result[0]
            .rewardPoints
        ).toBeGreaterThan(0);
      }
    );

    test(
      'should return empty array when transactions are empty',
      () => {
        expect(
          getCustomerMonthlyRewards(
            []
          )
        ).toEqual([]);
      }
    );
  }
);