import PropTypes from 'prop-types';

export const customerSummaryPropType =
  PropTypes.shape({
    customerId: PropTypes.string
      .isRequired,

    transactionCount:
      PropTypes.number.isRequired,

    totalSpent:
      PropTypes.number.isRequired,

    totalRewardPoints:
      PropTypes.number.isRequired,
  });

export const customerDetailPropType =
  PropTypes.shape({
    customerId: PropTypes.string
      .isRequired,

    transactionCount:
      PropTypes.number.isRequired,

    totalSpent:
      PropTypes.number.isRequired,

    totalRewards:
      PropTypes.number.isRequired,

    transactions:
      PropTypes.array.isRequired,
  });