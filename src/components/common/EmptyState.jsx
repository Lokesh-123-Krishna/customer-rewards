import PropTypes from 'prop-types';

import {
  Box,
  Typography,
} from '@mui/material';

const EmptyState = ({
  title,
  description,
}) => {
  return (
    <Box
      textAlign="center"
      py={6}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string
    .isRequired,
  description:
    PropTypes.string,
};

EmptyState.defaultProps = {
  description: '',
};

export default EmptyState;