import PropTypes from "prop-types";

import { Paper } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { getTransactionsWithRewards } from "../services/rewardCalculatorService";

const columns = [
  {
    field: "transactionId",
    headerName: "Transaction ID",
    flex: 1,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
  },
];

const TransactionTable = ({ transactions }) => {
  const rows = getTransactionsWithRewards(transactions).map((transaction) => ({
    id: transaction.transactionId,
    ...transaction,
  }));

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: 250,
      }}
    >
      <DataGrid
        sx={{
          fontSize: "14px",

          "& .MuiDataGrid-columnHeaders": {
            fontSize: "16px",
            fontWeight: "bold",
          },

          "& .MuiDataGrid-cell": {
            py: 0.5,
          },

          "& .MuiTablePagination-root": {
            fontSize: "16px",
          },
        }}
        rowHeight={45}
        columnHeaderHeight={60}
        disableColumnMenu
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
      />
    </Paper>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionTable;
