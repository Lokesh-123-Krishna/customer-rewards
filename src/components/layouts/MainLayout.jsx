import PropTypes from "prop-types";

import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

import { APP_NAME } from "../constants/appConstants";

const MainLayout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            minHeight: "65px !important",
            px: 2,
          }}
        >
          <Typography variant="h6" component="div">
            {APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="xl"
        style={{marginTop: "20px", marginBottom: "20px" }}
        sx={{
          mt: 4,
          mb: 4,
        }}
      >
        <Box>{children}</Box>
      </Container>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
