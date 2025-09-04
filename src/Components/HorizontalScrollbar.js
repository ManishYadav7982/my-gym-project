import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyParts';


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', padding: '20px' }}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollbar;
