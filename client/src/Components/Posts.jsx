import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from "react-router-dom"

import { urlFor, client } from '../client';
import Loader from './Loader';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const query = '*[_type == "posts"]';

        client.fetch(query)
            .then((data) => setPosts(data))
            .catch((err) => console.log(err))
    }, [])

    if (!posts.length) return <Loader />

    const lastPosts = posts.slice(-2)
    return (
        <Container maxWidth="xxl" className='customContainer' >
            <Grid container sx={{ flexDirection: { xs: "column-reverse", md: "row" } }} >
                <Grid item xs={12} md={7} sx={{ mt: { xs: "30px", lg: "0px" } }}>
                    <Grid container className='projectsList'>
                        {lastPosts.length && (
                            <>
                                <Grid sx={{ mt: { xs: "24px", sm: "24px", lg: "44px", }, height: { xs: "250px", sm: "350px", md: "450px", lg: "600px" } }} item xs={6} sm={5} md={6} className='projectsListItem' >
                                    <Link to={`/posts/${lastPosts[0]._id}`}>
                                        <img style={{ borderRadius: "18px" }} width="100%" height="100%" src={urlFor(lastPosts[0].imageUrl).url()} alt="Img" />
                                    </Link>
                                </Grid>
                                <Grid sx={{ ml: { xs: "-80px", sm: "-100px", lg: "-150px", }, height: { xs: "250px", sm: "350px", md: "450px", lg: "600px" } }} item xs={6} sm={5} md={6} className='projectsListItem' >
                                    <Link to={`/posts/${lastPosts[1]._id}`}>
                                        <img style={{ borderRadius: "18px" }} width="100%" height="100%" src={urlFor(lastPosts[1]?.imageUrl).url()} alt="Img" />
                                    </Link>
                                </Grid>
                            </>
                        )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack sx={{ p: { xs: "0px", lg: "30px" }, px: { sm: "30px", lg: "60px" }, gap: { xs: "10px", lg: "25px" } }} >
                        <Typography color="white.white100" variant='h2' sx={{ textAlign: { xs: "center", md: "justify" }, }}>Project title and some additional information 🚀 </Typography>
                        <Typography color="white.white30" variant='h4'></Typography>
                        <Typography color="white.white20" variant='p' sx={{ textAlign: { xs: "center", md: "justify" }, }}>
                            Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution?
                        </Typography>
                        <Box display="flex" justifyContent="center">
                            <Button variant='main' href='/posts'>View More</Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Posts