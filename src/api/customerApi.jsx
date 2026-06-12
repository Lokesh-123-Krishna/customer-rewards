import { API_DELAY_MS } from "../components/constants/appConstants";
import {
  logApiRequest,
  logApiSuccess,
  logApiFailure,
} from "../components/logger/logger";

const TRANSACTIONS_API_URL = "/data/transaction.json";

export const fetchTransactions = async () => {
  logApiRequest(TRANSACTIONS_API_URL);

  try {
    await new Promise((resolve) => setTimeout(resolve, API_DELAY_MS));

    const response = await fetch(TRANSACTIONS_API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch transactions. Status: ${response.status}`,
      );
    }

    const transactions = await response.json();

    logApiSuccess(TRANSACTIONS_API_URL, {
      recordsFetched: transactions?.length || 0,
    });

    return transactions;
  } catch (error) {
    logApiFailure(TRANSACTIONS_API_URL, error);

    throw error;
  }
};
