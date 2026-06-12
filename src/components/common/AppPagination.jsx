import PropTypes from "prop-types";

import { Box, Pagination } from "@mui/material";

const AppPagination = ({ page, count, onChange }) => {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Pagination
        page={page}
        count={count}
        onChange={onChange}
        color="primary"
      />
    </Box>
  );
};

AppPagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AppPagination;
