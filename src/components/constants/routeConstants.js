export const ROUTES = {
  DASHBOARD: '/',
  CUSTOMER_DETAILS: '/customer/:customerId',
};

export const ROUTE_LABELS = {
  DASHBOARD: 'Dashboard',
  CUSTOMER_DETAILS: 'Customer Details',
};

export const buildCustomerRoute = (
  customerId
) => `/customer/${customerId}`;