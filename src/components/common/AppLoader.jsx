import { Box, CircularProgress, Typography } from "@mui/material";

import { LOADING_MESSAGE } from "../constants/appConstants";

const AppLoader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="300px"
      gap={2}
    >
      <CircularProgress />

      <Typography variant="body1">{LOADING_MESSAGE}</Typography>
    </Box>
  );
};

export default AppLoader;
