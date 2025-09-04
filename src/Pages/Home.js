import React, { useState } from 'react';
import { Box } from '@mui/material';


import HeroBanner from '../Components/HeroBanner';
import SearchExercise from '../Components/SearchExercise';
import Exercise from '../Components/Exercise';

const Home = () => {
  const [bodyParts, setBodyParts] = useState(['all']);
  const [exercises, setExercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('all'); 

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
        selectedBodyPart={selectedBodyPart}             //  Pass to SearchExercise
        setSelectedBodyPart={setSelectedBodyPart}
      />
      <Exercise
        exercises={exercises}
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}            //  Pass to Exercise
      />
    </Box>
  );
};

export default Home;
