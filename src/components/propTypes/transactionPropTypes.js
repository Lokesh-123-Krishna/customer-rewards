import PropTypes from 'prop-types';

export const transactionPropType =
  PropTypes.shape({
    customerId: PropTypes.string
      .isRequired,

    transactionId: PropTypes.string
      .isRequired,

    amount: PropTypes.number
      .isRequired,

    date: PropTypes.string
      .isRequired,

    rewardPoints:
      PropTypes.number,
  });

export const transactionListPropType =
  PropTypes.arrayOf(
    transactionPropType
  );