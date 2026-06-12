const getTimestamp = () => new Date().toISOString();

const buildLogMessage = (level, message, metadata = {}) => ({
  timestamp: getTimestamp(),
  level,
  message,
  ...metadata,
});

export const logInfo = (message, metadata = {}) => {
  console.info(
    buildLogMessage('INFO', message, metadata)
  );
};

export const logError = (message, error = {}, metadata = {}) => {
  console.error(
    buildLogMessage('ERROR', message, {
      error,
      ...metadata,
    })
  );
};

export const logApiRequest = (
  endpoint,
  metadata = {}
) => {
  console.info(
    buildLogMessage('API_REQUEST', 'API Request Initiated', {
      endpoint,
      ...metadata,
    })
  );
};

export const logApiSuccess = (
  endpoint,
  metadata = {}
) => {
  console.info(
    buildLogMessage('API_SUCCESS', 'API Request Successful', {
      endpoint,
      ...metadata,
    })
  );
};

export const logApiFailure = (
  endpoint,
  error = {},
  metadata = {}
) => {
  console.error(
    buildLogMessage('API_FAILURE', 'API Request Failed', {
      endpoint,
      error,
      ...metadata,
    })
  );
};

export const logRewardCalculation = (
  transactionId,
  amount,
  rewardPoints
) => {
  console.info(
    buildLogMessage(
      'REWARD_CALCULATION',
      'Reward Points Calculated',
      {
        transactionId,
        amount,
        rewardPoints,
      }
    )
  );
};

export const logNavigation = (
  route,
  metadata = {}
) => {
  console.info(
    buildLogMessage(
      'NAVIGATION',
      'Route Navigation',
      {
        route,
        ...metadata,
      }
    )
  );
};

export const logCustomerSelection = (
  customerId,
  metadata = {}
) => {
  console.info(
    buildLogMessage(
      'CUSTOMER_SELECTION',
      'Customer Selected',
      {
        customerId,
        ...metadata,
      }
    )
  );
};