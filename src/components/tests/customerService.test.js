import {
  getDashboardCustomers,
} from '../services/customerService';

describe(
  'Customer Service Tests',
  () => {
    const transactions = [
      {
        customerId: 'CUSTOMER001',
        transactionId: 'TRXNID001',
        amount: 120,
        date: '2026-06-01',
      },
      {
        customerId: 'CUSTOMER001',
        transactionId: 'TRXNID002',
        amount: 80,
        date: '2026-06-05',
      },
      {
        customerId: 'CUSTOMER002',
        transactionId: 'TRXNID003',
        amount: 200,
        date: '2026-06-10',
      },
    ];

    test(
      'should group customers correctly',
      () => {
        const result =
          getDashboardCustomers(
            transactions
          );

        expect(
          result.length
        ).toBe(2);
      }
    );

    test(
      'should calculate transaction count',
      () => {
        const result =
          getDashboardCustomers(
            transactions
          );

        expect(
          result[0]
            .transactionCount
        ).toBe(2);
      }
    );

    test(
      'should return empty array for no transactions',
      () => {
        expect(
          getDashboardCustomers([])
        ).toEqual([]);
      }
    );
  }
);