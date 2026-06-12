import { useCallback, useEffect, useState } from "react";

import { fetchTransactions } from "../../api/customerApi";

export const useCustomers = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTransactions = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchTransactions();

      setTransactions(response);
    } catch (err) {
      setError(err?.message || "Unable to load transactions");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  return {
    transactions,
    loading,
    error,
    refetch: loadTransactions,
  };
};
