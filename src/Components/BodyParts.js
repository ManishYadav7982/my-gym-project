import React from 'react';
import { Icon, Stack, Typography } from '@mui/material';

const BodyParts = ({ item, setBodyPart, BodyParts }) => {
  return (
    <Stack
      type="button"
      className="bodyPart-card"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: '4px solid #ff2625',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        console.log("Clicked:", item); // ✅ debug: check if item is clicked
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src="https://imgcdn.stablediffusionweb.com/2024/6/4/e70b27a6-671a-4ff7-8fe8-2be262f716fb.jpg"
        alt="dumbbell"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '10px',
        }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
