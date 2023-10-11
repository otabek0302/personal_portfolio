import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { urlFor, client } from '../client';
import Loader from '../Components/Loader';

const SingleProjectPage = () => {
  const [project, setProject] = useState(null)
  const id = window.location.pathname.split('/').pop()

  useEffect(() => {
    client.getDocument(id)
      .then((data) => setProject(data))
      .catch((err) => console.log(err))
  }, [id])

  if (!project) return <Loader />

  return (
    <Container maxWidth="xxl" className='mt'>
      <Box sx={{ height: { xs: "181px", sm: "280px", md: "400px", lg: "500px", xl: "681px" } }} className="singleProjectBanner" >
        <img width="100%" height="auto" src={urlFor(project?.imageUrl).url()} alt={project?.title} />
      </Box>
      <Grid container mt="50px" p="25px">
        <Grid item xs={12} md={6} sx={{ mb: { xs: "40px", md: "0px" } }}>
          <Typography variant="h5" textAlign="left" color="white.white100">{project?.title}</Typography>
          <Typography variant="p" my="20px" textAlign="left" color="white.white30">{project?.description}</Typography>
          <Box display="flex" gap={1} alignItems="center">
            <Typography variant='p' textAlign="left" color="white.white100">Tools:</Typography>
            {
              project?.tools.map((tool, i) => (
                <Typography key={i} variant='span' textAlign="left" color="white.white30">{tool}</Typography>
              ))
            }
          </Box>
          <Box display="flex" gap={1} mt="40px">
            <Button variant='contained' href={project?.github} >Get Code</Button>
            <Button variant='outlined' href={project?.visitlink}>Visit Website</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box px="25px" bgcolor="white.white10">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="singleProjectSwiper"
            >
              {project.images.length && (
                project.images.map((item, i) => (
                  <SwiperSlide className='singleProjectSwiper-slide' key={i}>
                    <img width="100%" height="100%" style={{ objectFit: "cover" }} src={urlFor(item).url()} alt="" />
                  </SwiperSlide>
                ))
              )
              }
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SingleProjectPage