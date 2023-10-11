import React, { useEffect, useState } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

import { client } from '../client';
import Loader from './Loader'

const YotubeContent = () => {
    const [yotube, setYotube] = useState(null)
    useEffect(() => {
        const query = '*[_type == "youtube"]';

        client.fetch(query)
            .then((data) => setYotube(data[data.length - 1]))
            .catch((err) => console.log(err))
    }, [])
    if (!yotube) return <Loader />
    return (
        <Container maxWidth="xxl" className='customContainer'>
            <Stack alignItems="center" sx={{ px: { sm: "60px", lg: "120px" } }} >
                <Typography variant='h2' color="white.white100"> {yotube?.title} 🚀 </Typography>
                <Typography variant='p' color="white.white20" textAlign="center" sx={{ mb: { xs: "28px", lg: "60px" } }} >
                    {yotube?.description.length > 100 ? `${yotube?.description.substring(0, 100)}...` : yotube?.description}
                </Typography>
            </Stack>
            <Box sx={{ px: { xs: "0px", sm: "30px", lg: "60px" } }} >
                <Box sx={{ height: { xs: "180px", sm: "300px", md: "420px", lg: "500px", xl: "680px" } }} className="yotubeCard">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            </Box>
        </Container >
    )
}

export default YotubeContent