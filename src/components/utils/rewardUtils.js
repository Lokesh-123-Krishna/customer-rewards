import { REWARD_RULES } from "../constants/rewardConstants";

export const calculateRewardPoints = (amount) => {
  const transactionAmount = Number(amount);

  if (Number.isNaN(transactionAmount) || transactionAmount <= 0) {
    return 0;
  }

  const {
    LOWER_THRESHOLD,
    UPPER_THRESHOLD,
    LOWER_THRESHOLD_POINTS,
    UPPER_THRESHOLD_POINTS,
  } = REWARD_RULES;

  let rewardPoints = 0;

  if (transactionAmount > UPPER_THRESHOLD) {
    rewardPoints +=
      (transactionAmount - UPPER_THRESHOLD) * UPPER_THRESHOLD_POINTS;

    rewardPoints +=
      (UPPER_THRESHOLD - LOWER_THRESHOLD) * LOWER_THRESHOLD_POINTS;
  } else if (transactionAmount > LOWER_THRESHOLD) {
    rewardPoints +=
      (transactionAmount - LOWER_THRESHOLD) * LOWER_THRESHOLD_POINTS;
  }

  return Math.floor(rewardPoints);
};

export const calculateTransactionRewards = (transactions = []) => {
  return transactions.map((transaction) => ({
    ...transaction,
    rewardPoints: calculateRewardPoints(transaction.amount),
  }));
};

export const calculateTotalRewards = (transactions = []) => {
  return transactions.reduce(
    (total, transaction) => total + calculateRewardPoints(transaction.amount),
    0,
  );
};

export const calculateCustomerRewards = (transactions = []) => {
  return transactions.reduce(
    (total, transaction) => total + calculateRewardPoints(transaction.amount),
    0,
  );
};
