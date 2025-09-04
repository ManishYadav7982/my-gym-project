import React from 'react'

import { Box, Button, Stack, Typography } from '@mui/material';
import herobanner from '../New folder/High Quality Fitness Images.jpeg';


const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
                FITFORGE CLUB
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Unleash Your <br />
                Inner Athlete
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={1.5}>
                Personalized workout plans, expert guidance.<br /> Your journey to peak fitness starts now.
            </Typography>
            <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#ff2625', padding: '10px' }}>
                Expore Exercises
            </Button >
            <Typography fontWeight={600} color="#ff2625" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} fontSize="200px">
                Exercise
            </Typography>
            <Box
                component="img"
                src={herobanner}
                alt="banner"
                sx={{
                    position: 'absolute',
                    right: 20,
                    top: -100,
                    width: { sm: '350px', md: '500px' }, // Responsive width
                    height: 'auto',
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, // hidden on xs/sm/md
                    zIndex: -1, // Behind content
                    borderRadius: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)', // Slight zoom on hover
                    },
                }}

            />

        </Box>
    )
}

export default HeroBanner
