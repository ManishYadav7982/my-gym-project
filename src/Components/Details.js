import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const Details = ({ exerciseDetail }) => {
  const { name, bodyPart, target, equipment, gifUrl } = exerciseDetail;

  return (
    <Box sx={{ mt: { lg: '50px', xs: '20px' } }} p="20px">
      <Typography variant="h4" fontWeight="bold" textTransform="capitalize" mb="20px">
        {name}
      </Typography>
      <img src={gifUrl} alt={name} loading="lazy" style={{ width: '100%', maxWidth: '500px' }} />
      <Stack spacing={2} mt={4}>
        <Typography><strong>Body Part:</strong> {bodyPart}</Typography>
        <Typography><strong>Target Muscle:</strong> {target}</Typography>
        <Typography><strong>Equipment:</strong> {equipment}</Typography>
      </Stack>
    </Box>
  );
};

export default Details;
