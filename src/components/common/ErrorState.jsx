import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Typography,
} from '@mui/material';

const ErrorState = ({
  message,
  onRetry,
}) => {
  return (
    <Box
      textAlign="center"
      py={6}
    >
      <Typography
        variant="h6"
        color="error"
        gutterBottom
      >
        {message}
      </Typography>

      <Button
        variant="contained"
        onClick={onRetry}
      >
        Retry
      </Button>
    </Box>
  );
};

ErrorState.propTypes = {
  message: PropTypes.string
    .isRequired,
  onRetry: PropTypes.func
    .isRequired,
};

export default ErrorState;