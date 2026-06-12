import PropTypes from "prop-types";

import { Card, CardContent, Grid, Typography } from "@mui/material";

import { getDashboardMetrics } from "../services/dashboardService";

const DashboardSummaryCards = ({ customers }) => {
  const { totalCustomers, totalTransactions, totalRewards } =
    getDashboardMetrics(customers);

  const cards = [
    {
      title: "Total Customers",
      value: totalCustomers,
    },
    {
      title: "Total Transactions",
      value: totalTransactions,
    },
    {
      title: "Total Reward Points",
      value: totalRewards,
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      mb={2}
      sx={{
        mb: 2,
      }}
    >
      {cards.map((card) => (
        <Grid item xs={12} md={4} key={card.title}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                }}
                color="text.secondary"
              >
                {card.title}
              </Typography>

              <Typography
                variant="h8">
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

DashboardSummaryCards.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default DashboardSummaryCards;
