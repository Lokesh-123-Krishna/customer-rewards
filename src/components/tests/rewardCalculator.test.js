import {
  calculateRewardPoints,
} from '../utils/rewardUtils';

describe(
  'Reward Calculation Tests',
  () => {
    test(
      'should calculate rewards for amount greater than 100',
      () => {
        expect(
          calculateRewardPoints(120)
        ).toBe(90);
      }
    );

    test(
      'should calculate rewards for amount between 50 and 100',
      () => {
        expect(
          calculateRewardPoints(75)
        ).toBe(25);
      }
    );

    test(
      'should calculate rewards for amount 200',
      () => {
        expect(
          calculateRewardPoints(200)
        ).toBe(250);
      }
    );

    test(
      'should calculate rewards for fractional amount',
      () => {
        expect(
          calculateRewardPoints(120.5)
        ).toBe(91);
      }
    );

    test(
      'should return 0 for amount less than 50',
      () => {
        expect(
          calculateRewardPoints(40)
        ).toBe(0);
      }
    );

    test(
      'should return 0 for zero amount',
      () => {
        expect(
          calculateRewardPoints(0)
        ).toBe(0);
      }
    );

    test(
      'should return 0 for negative amount',
      () => {
        expect(
          calculateRewardPoints(-20)
        ).toBe(0);
      }
    );

    test(
      'should return 0 for null',
      () => {
        expect(
          calculateRewardPoints(null)
        ).toBe(0);
      }
    );

    test(
      'should return 0 for undefined',
      () => {
        expect(
          calculateRewardPoints(undefined)
        ).toBe(0);
      }
    );
  }
);