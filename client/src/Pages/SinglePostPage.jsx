import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { urlFor, client } from '../client';
import Loader from '../Components/Loader';

const SinglePostPage = () => {
    const [post, setPost] = useState(null)
    const id = window.location.pathname.split('/').pop()

    useEffect(() => {
        client.getDocument(id)
            .then((data) => setPost(data))
            .catch((err) => console.log(err))
    }, [id])


    if (!post) return <Loader />
    return (
        <Container maxWidth="xxl" className='mt'>
            <Typography variant='h2' textAlign="left" color="white.white100">{post?.title} <Typography variant='span' color="white.white20">{new Date(post?._createdAt).toDateString()}</Typography></Typography>
            <Typography my="20px" variant='p' color="white.white30">{post?.description}</Typography>
            <Grid container className='projectsList' gap="10px">
                {
                    post.images.length && (
                        post?.images.map((item, i) => (
                            <Grid key={i} sx={{ minWidth: { xs: "350px" }, height: { xs: "530px" } }} item xs={5} sm={2} className='projectsListItem' >
                                <img style={{ borderRadius: "18px" }} width="100%" height="100%" src={urlFor(item).url()} alt="Alt" />
                            </Grid>
                        ))
                    )
                }
            </Grid>
        </Container>
    )
}

export default SinglePostPage