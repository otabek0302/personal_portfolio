import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <Container maxWidth="xxl" className='customContainer'>
            <Stack className="footerContent" alignItems="center">
                <Typography variant='h2' color="white.white100">Have A Project In Mind? Let's Get Start.</Typography>
                <Typography variant='h5' color="white.white30">You're looking for a solid partner for the project having in your mind. Connect with us to make your work easier.</Typography>
                <Button sx={{ mt: { xs: "30px", md: "80px" } }} variant='outlined' className='linearGradientWord' href='/contact' >Let's work togather 🤝 </Button>
            </Stack>
        </Container>
    )
}

export default Contact