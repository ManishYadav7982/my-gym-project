import React  , {useEffect , useState}from 'react'
import Pagination from '@mui/material';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { exercisesOptions, fetchData } from '../Utils/FetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyParts';
const Exercise = ({ exercises, setExercises, selectedBodyPart }) => {
 useEffect(() => {
  const fetchExercises = async () => {
    let exercisesData = [];

    if (selectedBodyPart && selectedBodyPart !== 'all') {
      exercisesData = await fetchData(
        `https://api.api-ninjas.com/v1/exercises?muscle=${selectedBodyPart.toLowerCase()}`,
        exercisesOptions
      );
    } else {
      exercisesData = await fetchData(
        `https://api.api-ninjas.com/v1/exercises?muscle=chest`,
        exercisesOptions
      );
    }

    setExercises(exercisesData);
  };

  fetchExercises();
}, [selectedBodyPart]);

                             

  return (
    <Box id = 'exercises' sx={{ mt: { lg: '110px', xs: '70px' } }} p="20px"> 
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exercises.length ? (
          exercises.map((exercise, index) => (
            <ExerciseCard  key={index} exercise={exercise} />
            
          )
        ) ): (
          <Typography variant="h6" color="#ff2625">
            No exercises found
          </Typography>
        )}

      </Stack>
      

    </Box>
  )
}

export default Exercise
