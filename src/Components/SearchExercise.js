import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Stack , InputBase, IconButton } from '@mui/material';
import { exercisesOptions, fetchData } from '../Utils/FetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import ExerciseCard from './ExerciseCard';
import SearchIcon from "@mui/icons-material/Search";


const SearchExercise = ({ setExercises, bodyParts, setBodyParts, selectedBodyPart, setSelectedBodyPart }) => {
  const [search, setSearch] = useState('');


  // Valid muscle groups supported by API Ninjas
  const availableMuscles = [
    'chest', 'biceps', 'triceps', 'abs', 'back',
    'shoulders', 'legs', 'glutes', 'calves', 'forearms'
  ];

  //  Load muscle groups into horizontal scrollbar
  useEffect(() => {
    setBodyParts(['all', ...availableMuscles]);
  }, []);

  //  Handle Search Button
  const handleSearch = async () => {
    if (search) {
      const keyword = search.toLowerCase();

      if (availableMuscles.includes(keyword)) {
        const exercisesData = await fetchData(
          `https://api.api-ninjas.com/v1/exercises?muscle=${keyword}`,
          exercisesOptions
        );

        setExercises(exercisesData);
      } else {
        alert("Please enter a valid muscle group (e.g., chest, triceps, abs)");
      }

      setSearch('');
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>


<Box
  sx={{
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "40px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    px: 2,
    width: { xs: "100%", sm: "100%", md: "600px", lg: "800px" },
  }}
>
  <InputBase
    sx={{
      flex: 1,
      fontWeight: 700,
      fontSize: { xs: "14px", sm: "15px", md: "16px" },
      px: 1,
    }}
    placeholder="Search by muscle group (e.g., chest)"
    value={search}
    onChange={(e) => setSearch(e.target.value.toLowerCase())}
  />

  <IconButton
    onClick={handleSearch}
    sx={{
      bgcolor: "#ff2625",
      color: "#fff",
      borderRadius: "40px",
      px: { xs: 2, md: 3 },
      py: 1,
      "&:hover": { bgcolor: "#e61e1e" },
    }}
  >
    <SearchIcon sx={{ mr: { lg: 1, xs: 0 } }} />
    {/* Only show text on large screens */}
    <Typography
      sx={{
        display: { xs: "none", sm: "none", md: "none", lg: "inline" },
        fontWeight: 600,
      }}
    >
      Search
    </Typography>
  </IconButton>
</Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={selectedBodyPart}
          setBodyPart={setSelectedBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercise;

