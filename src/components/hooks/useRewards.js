import { useMemo } from 'react';

import {
  calculateRewardPoints,
  calculateCustomerRewards,
} from '../utils/rewardUtils';

export const useRewards = (
  transactions
) => {
  return useMemo(() => {
    const customerRewards =
      calculateCustomerRewards(
        transactions
      );

    return {
      customerRewards,
      calculateRewardPoints,
    };
  }, [transactions]);
};