import { createContext, useContext, useMemo, useState } from "react";

const CustomerContext = createContext(null);

export const CustomerProvider = ({ children }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const value = useMemo(
    () => ({
      selectedCustomerId,
      setSelectedCustomerId,
    }),
    [selectedCustomerId],
  );

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error("useCustomerContext must be used within CustomerProvider");
  }

  return context;
};
