import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { JavaScript, Html, Css, ReactJs, NextJs, Git, GitHub, Apple, Mac, NodeJs, Figma } from '../assets'

const Features = () => {
    return (
        <Container maxWidth="xxl" sx={{ mt: "150px" }}>
            <Stack className='featuresShadow' >
                <Typography variant='h2' maxWidth="100%" textAlign="right" color="white.white100"> My skills 🚀 </Typography>
                <Typography variant='h4' maxWidth="100%" textAlign="right" color="white.white30"></Typography>
            </Stack>
            <Stack alignItems="center" justifyContent="center">
                <Box className="featuresBox" display="flex">
                    <Box className="featuresBoxList">
                        <Paper elevation={3}>
                            <Link to="https://ru.wikipedia.org/wiki/MacOS" >
                                <img src={Mac} alt="Mac Os " />
                            </Link>
                            <Link to="https://www.apple.com/" >
                                <img src={Apple} alt="Apple " />
                            </Link>
                        </Paper>
                    </Box>
                    <Box className="featuresBoxList">
                        <Paper elevation={3}>
                            <Link to="https://react.dev/" >
                                <img src={ReactJs} alt="React " />
                            </Link>
                        </Paper>
                        <Paper elevation={3}>
                            <Link to="https://nextjs.org/" >
                                <img src={NextJs} alt="Next " />
                            </Link>
                        </Paper>
                    </Box>
                    <Box className="featuresBoxList">
                        <Paper elevation={3}>
                            <Link to="https://www.w3schools.com/html/" >
                                <img src={Html} alt="Html " />
                            </Link>
                        </Paper>
                        <Paper elevation={3}>
                            <Link to="https://www.w3schools.com/js/" >
                                <img src={JavaScript} alt="JavaScript " />
                            </Link>
                        </Paper>
                        <Paper elevation={3}>
                            <Link to="https://www.w3schools.com/css/" >
                                <img src={Css} alt="Css " />
                            </Link>
                        </Paper>
                    </Box>
                    <Box className="featuresBoxList">
                        <Paper elevation={3}>
                            <Link to="https://nodejs.org/en" >
                                <img src={NodeJs} alt="Node JS " />
                            </Link>
                        </Paper>
                        <Paper elevation={3}>
                            <Link to="https://www.figma.com/" >
                                <img src={Figma} alt="Figma " />
                            </Link>
                        </Paper>
                    </Box>
                    <Box className="featuresBoxList">
                        <Paper elevation={3}>
                            <Link to="https://git-scm.com/" >
                                <img src={Git} alt="Git " />
                            </Link>
                            <Link to="https://github.com/" >
                                <img src={GitHub} alt="Github " />
                            </Link>
                        </Paper>
                    </Box>
                </Box>
            </Stack>
        </Container>
    )
}

export default Features