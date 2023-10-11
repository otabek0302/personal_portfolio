import { Avatar, Card, CardContent, CardHeader, Container, Grid, Rating, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { urlFor, client } from '../client';


const Clients = () => {
    const [feedback, setFeedback] = useState([])
    
    useEffect(() => {
        const query = '*[_type == "testimonials"]';

        client.fetch(query)
            .then((data) => setFeedback(data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Container maxWidth="xxl" sx={{ mt: "150px" }}>
            <Grid container rowGap={4} >
                <Grid item xs={12} >
                    <Stack alignItems="center" sx={{ px: { sm: "60px", lg: "120px" } }} >
                        <Typography variant='h2' color="white.white100"> Skyrocket your Software Engineering career 🚀 </Typography>
                        <Typography variant='h4' color="white.white30" ></Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} >
                    <Swiper effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper">
                        {
                            feedback.map((item) => (
                                <SwiperSlide key={item._id}>
                                    <Card className='clientCard'>
                                        <CardContent>
                                            <Rating name="read-only" color='red' value={Number(item.rating)} readOnly />
                                        </CardContent>
                                        <CardContent className='clientCardContent'>
                                            <Typography variant="p" color="white.white100" textAlign="left">
                                                {item.feedback}
                                            </Typography>
                                        </CardContent>
                                        <CardHeader
                                            avatar={<Avatar sx={{ width: 56, height: 56 }} variant="rounded" alt={item.name} src={urlFor(item.imageurl).url()} />}
                                            title={<Typography variant='h5' textAlign="left" color="white.white100">{item.name}</Typography>}
                                            subheader={<Typography variant='span' color="white.white30">{item.status}</Typography>}
                                        />
                                    </Card>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Clients