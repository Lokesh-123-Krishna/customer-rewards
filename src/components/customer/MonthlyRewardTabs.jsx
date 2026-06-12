import { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";

import { getCustomerMonthlyRewards } from "../services/rewardCalculatorService";
import { getTransactionsByMonth } from "../services/transactionService";

import MonthlyRewardsCard from "../customer/MonthlyRewardsCard";

const MonthlyRewardTabs = ({
  transactions,
  selectedMonth,
  onMonthChange,
}) => {
  const monthlyRewards = useMemo(
    () => getCustomerMonthlyRewards(transactions),
    [transactions]
  );

  const selectedMonthData = monthlyRewards.find(
    (reward) => reward.month === selectedMonth
  );

  const selectedIndex = monthlyRewards.findIndex(
    (reward) => reward.month === selectedMonth
  );

  const handleTabChange = (event, newValue) => {
    onMonthChange(monthlyRewards[newValue].month);
  };

  if (!monthlyRewards.length) {
    return null;
  }

  return (
    <>
      <Tabs
        value={selectedIndex === -1 ? 0 : selectedIndex}
        onChange={handleTabChange}
        sx={{ mb: 2 }}
      >
        {monthlyRewards.map((reward) => (
          <Tab key={reward.month} label={reward.month} />
        ))}
      </Tabs>

      {selectedMonthData && (
        <Box mb={3}>
          <MonthlyRewardsCard
            month={selectedMonthData.month}
            rewardPoints={selectedMonthData.rewardPoints}
            transactionCount={selectedMonthData.transactionCount}
          />
        </Box>
      )}
    </>
  );
};

MonthlyRewardTabs.propTypes = {
  transactions: PropTypes.array.isRequired,
  selectedMonth: PropTypes.string.isRequired,
  onMonthChange: PropTypes.func.isRequired,
};

export default MonthlyRewardTabs;