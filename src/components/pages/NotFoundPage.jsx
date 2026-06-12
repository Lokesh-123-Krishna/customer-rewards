import {
  Box,
  Button,
  Typography,
} from '@mui/material';

import {
  useNavigate,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import { ROUTES } from '../constants/routeConstants';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box
        textAlign="center"
        py={8}
      >
        <Typography
          variant="h3"
          gutterBottom
        >
          404
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
        >
          Page Not Found
        </Typography>

        <Button
          variant="contained"
          onClick={() =>
            navigate(
              ROUTES.DASHBOARD
            )
          }
        >
          Go To Dashboard
        </Button>
      </Box>
    </MainLayout>
  );
};

export default NotFoundPage;