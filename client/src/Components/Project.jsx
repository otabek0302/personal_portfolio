import { GitHub, Visibility } from '@mui/icons-material'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { urlFor, client } from '../client';
import Loader from './Loader';

const Project = () => {
    const [project, setProject] = useState(null)

    useEffect(() => {
        const query = '*[_type == "projects"]';

        client.fetch(query)
            .then((data) => setProject(data[data.length - 1]))
            .catch((err) => console.log(err))
    }, [])
    if (!project) return <Loader />
    return (
        <Container maxWidth="xxl" className='customContainer customPoject' >
            <Stack alignItems="center">
                <Typography variant='h2' color="white.white100">Look at My Last Project</Typography>
                <Button sx={{ my: { xs: "6px", lg: "10px" } }} variant='outlined' href='/projects' >{project?.category}</Button>
                <Typography variant='p' color="white.white20" textAlign="center" sx={{ mb: { xs: "28px", lg: "60px" } }} >{project?.description?.length > 100 ? `${project?.description.substring(0, 200)}...` : project?.description}</Typography>
            </Stack>
            <Box className="projectContent" sx={{ p: { xs: "8px", lg: "12px" } }} >
                <Link to={`/projects/${project?._id}`}>
                    <Box className="projectScreen" sx={{ height: { xs: "220px", sm: "374px", md: "484px", lg: "634px", xl: "734px" } }}>
                        <img src={urlFor(project?.imageUrl).url()} width="100%" height="auto" alt={project?.title} />
                    </Box>
                </Link>
                <Stack direction="row" sx={{ p: { xs: "8px 12px 6px", lg: "12px 20px 8px" } }} >
                    <Box width="100%" >
                        <Link to={`/projects/${project?._id}`}>
                            <Typography variant='h5' color="white.white30" textAlign="left" className='short'>{project?.title}</Typography>
                        </Link>
                        <Box display="flex" justifyContent="end" gap={1}>
                            {project.github && (
                                <Button variant="contained" href={project.github} endIcon={<GitHub sx={{ width: '18px' }} />}>
                                    Get Code
                                </Button>
                            )}
                            {project.visitlink && (
                                <Button variant="contained" href={project.visitlink} endIcon={<Visibility sx={{ width: '18px' }} />}>
                                    Visit Site
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Stack>
            </Box>

        </Container >
    )
}

export default Project