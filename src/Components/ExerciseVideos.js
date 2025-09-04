import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const ExerciseVideos = ({ videos, name }) => {
  if (!videos.length) return null;

  return (
    <Box sx={{ mt: '40px' }} p="20px">
      <Typography variant="h5" fontWeight="bold" mb="20px">
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap="20px">
        {videos.slice(0, 4).map((item, idx) => (
          <a
            key={idx}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ width: '300px' }}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{ borderRadius: '12px', width: '100%' }}
            />
            <Typography variant="subtitle1" fontWeight="bold" mt="8px">
              {item.video.title}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
