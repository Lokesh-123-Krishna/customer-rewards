import { useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

import { CUSTOMER_TABLE_COLUMNS } from "../constants/tableConstants";
import { buildCustomerRoute } from "../constants/routeConstants";
import { logCustomerSelection } from "../logger/logger";

const CustomerTable = ({ customers }) => {
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  const handleViewDetails = useCallback(
    (customerId) => {
      logCustomerSelection(customerId);
      navigate(buildCustomerRoute(customerId));
    },
    [navigate]
  );

  const columns = useMemo(
    () => [
      ...CUSTOMER_TABLE_COLUMNS,
      {
        field: "actions",
        headerName: "View Details",
        minWidth: 130,
        flex: 1,
        sortable: false,
        filterable: false,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => (
          <Button
            variant="contained"
            size="small"
            onClick={(event) => {
              event.stopPropagation();
              params.row.onViewDetails(params.row.customerId);
            }}
            sx={{
              fontSize: "13px",
              px: 1,
              py: 0,
              minWidth: "70px",
              minHeight: "24px",
              textTransform: "none",
            }}
          >
            View
          </Button>
        ),
      },
    ],
    []
  );

  const rows = useMemo(
    () =>
      customers.map((customer) => ({
        id: customer.customerId,
        ...customer,
        onViewDetails: handleViewDetails,
      })),
    [customers, handleViewDetails]
  );

  return (
    <Paper elevation={2} sx={{ height: 360, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableRowSelectionOnClick
        rowHeight={45}
        columnHeaderHeight={55}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 20]}
        sx={{
          fontSize: "14px",

          "& .MuiDataGrid-columnHeaders": {
            fontSize: "16px",
            fontWeight: "bold",
          },

          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
          },
        }}
      />
    </Paper>
  );
};

CustomerTable.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomerTable;