import PropTypes from "prop-types";

import { Card, CardContent, Typography } from "@mui/material";

const MonthlyRewardsCard = ({ month, rewardPoints, transactionCount }) => {
  return (
    <Card sx={{ height: 90 }}>
      <CardContent sx={{ p: 1 }}>
        <Typography
          fontSize={12}
          sx={{
            fontSize: "16px",
            fontWeight: 600,
          }}
          fontWeight="bold"
        >
          {month}
        </Typography>

        <Typography
          fontSize={10}
          sx={{
            fontSize: "14px",
          }}
          fontWeight="bold"
        >
          Reward Points:{rewardPoints}
        </Typography>

        <Typography
          fontSize={10}
          sx={{
            fontSize: "14px",
          }}
          fontWeight="bold"
        >
          Transaction Count:{transactionCount}
        </Typography>
      </CardContent>
    </Card>
  );
};

MonthlyRewardsCard.propTypes = {
  month: PropTypes.string.isRequired,
  rewardPoints: PropTypes.number.isRequired,
  transactionCount: PropTypes.number.isRequired,
};

export default MonthlyRewardsCard;
