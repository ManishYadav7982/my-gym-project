import React, { useState } from 'react';
import { Box, Typography, Stack, Divider, Button } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleInstructions = () => {
    setShowFull((prev) => !prev);
  };

  const shortInstructions = exercise.instructions?.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        p: 3,
        maxWidth: 600,
        margin: 'auto',
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        color="primary"
        sx={{ textTransform: 'uppercase' }}
      >
        {exercise.name}
      </Typography>

      <Stack spacing={1}>
        <Typography><strong>Type:</strong> {exercise.type}</Typography>
        <Typography><strong>Muscle Group:</strong> {exercise.muscle}</Typography>
        <Typography><strong>Equipment:</strong> {exercise.equipment}</Typography>
        <Typography><strong>Difficulty:</strong> {exercise.difficulty}</Typography>

        {exercise.instructions && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography>
              <strong>Instructions:</strong>{' '}
              {showFull ? exercise.instructions : shortInstructions}
            </Typography>
            <Button onClick={toggleInstructions} size="small">
              {showFull ? 'Show Less' : 'Show More'}
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseCard;
