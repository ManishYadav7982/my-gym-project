import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        backgroundColor: '#f4f4f4',
        padding: '20px 0',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} FITFORGE - All Rights Reserved
      </Typography>
      <Typography variant="caption" color="textSecondary">
        Built with ❤️ by Manish Yadav
      </Typography>
    </Box>
  );
};

export default Footer;
