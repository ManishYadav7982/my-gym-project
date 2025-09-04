import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exercisesOptions, youtubeOptions, fetchData } from '../Utils/FetchData';
import Details from '../Components/Details';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';

const Work = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);

  const { id } = useParams(); // 🆔 Exercise ID from URL

  useEffect(() => {
    const fetchExerciseData = async () => {
      // 1️⃣ Get exercise details
      const exerciseUrl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
      const detailData = await fetchData(exerciseUrl, exercisesOptions);
      setExerciseDetail(detailData);

      // 2️⃣ Get YouTube videos
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com/search?query=${detailData.name}`;
      const youtubeData = await fetchData(youtubeSearchUrl, youtubeOptions);
      setExerciseVideos(youtubeData.contents);

      // 3️⃣ Get similar exercises
      const similarUrl = `https://exercisedb.p.rapidapi.com/exercises/target/${detailData.target}`;
      const similarData = await fetchData(similarUrl, exercisesOptions);
      setSimilarExercises(similarData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos videos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises data={similarExercises} />
    </Box>
  );
};

export default Work;
