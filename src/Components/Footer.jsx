import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/logo5.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#eeeeec">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography
          sx={{
            variant: {
              sm: "h4",
              xs: "none",
            },
            mt: {
              sm: "10px",
              xs: "5px",
            },
            pb: {
              sm: "20px",
              xs: "30px",
            },
          }}
        >
          Made by <a href="https://github.com/anjany06">Anjany Pandey</a> with
          Love🩶🖤
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
