import PropTypes from "prop-types";
import { Button, Box } from "@mui/material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { customerDetailPropType } from "../propTypes/customerPropTypes";
import { useNavigate } from "react-router-dom";

const CustomerSummary = ({ customer }) => {
  const summaryItems = [
    {
      label: "Customer ID",
      value: customer.customerId,
    },
    {
      label: "Transactions",
      value: customer.transactionCount,
    },
    {
      label: "Total Spent",
      value: `$${customer.totalSpent.toFixed(2)}`,
    },
    {
      label: "Reward Points",
      value: customer.totalRewards,
    },
  ];

  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/");
  };

  return (
    <Grid container spacing={6} mb={3}>
      <Box mb={2}>
        <Button
          variant="outlined"
          onClick={handleBackToDashboard}
          startIcon={<ArrowBackIcon />}
        >
          Back to Dashboard
        </Button>
      </Box>
      {summaryItems.map((item) => (
        <Grid
          item
          xs={12}
          sx={{
            mb: 4,
          }}
          md={3}
          key={item.label}
        >
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                }}
                color="text.secondary"
              >
                {item.label}
              </Typography>

              <Typography
                variant="h8"
              >
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

CustomerSummary.propTypes = {
  customer: customerDetailPropType.isRequired,
};

export default CustomerSummary;
