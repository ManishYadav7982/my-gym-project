import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const SimilarExercises = ({ data }) => {
  return (
    <Box sx={{ mt: '40px' }} p="20px">
      <Typography variant="h5" fontWeight="bold" mb="20px">
        Similar Exercises
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap="20px">
        {data.slice(0, 6).map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
