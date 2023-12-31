import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { GitHub, Instagram, LinkedIn, Telegram, YouTube } from '@mui/icons-material';
import { me1, me2, me3, me4, me5 } from '../assets';


const Hero = () => {
    return (
        <Container maxWidth="xxl" className='customContainer'>
            <Grid container className='heroContent'>
                <Grid item xs={12} md={6} sx={{ pl: { xs: "0px", md: "30px" } }} className='heroContentLeft'>
                    <Typography color="white.white30" variant='p'>Hi  &#128406;  there I am</Typography>
                    <Typography sx={{ my: { xs: "8px", lg: "40px" } }} color="white.white100" variant='h2' textAlign="left" >Amonov Otabek</Typography>
                    <Typography mb={0.7} color="white.white30" variant='h5' textAlign="left" >Nice to meet you.</Typography>
                    <Typography maxWidth={500} color="white.white20" variant='p' sx={{ textAlign: { xs: "justify", md: "left" } }} >
                        I started learning to code 2 years ago and faced many problems getting into programming. But I really loved coding, so I kept going and didn't give up.
                        Thanks to Allax, I've achieved significant strides in programming, life, and school. I grasped an important lesson during challenging moments: starting from scratch is okay because each new beginning is a chance to learn.
                    </Typography>
                    <br />  
                    <Typography maxWidth={500} color="white.white20" variant='p' sx={{ textAlign: { xs: "justify", md: "left" } }}>
                        I'm a new web developer with limited experience. In my free time, I enjoy recording  YouTube videos to my blog and I love to learn new things about 3D web development. Additionally, I'm a final-year student at HIT (Holon Institute of Technology), aiming to graduate with strong achievements.
                    </Typography>
                    <Box mt={6} display="flex" gap={2}>
                        <Typography component="a" href='https://www.instagram.com/otabek_03.02/' ><Instagram /></Typography>
                        <Typography component="a" href='https://www.linkedin.com/in/otabek-amonov-2b97a8217/' ><LinkedIn /></Typography>
                        <Typography component="a" href='https://t.me/otabek_0302/' ><Telegram /></Typography>
                        <Typography component="a" href='https://github.com/otabek0302/' ><GitHub /></Typography>
                        <Typography component="a" href='https://youtube.com/@otabek0302?si=iwKrFUYdfb6xhRLE' ><YouTube /></Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className='heroContentRight' sx={{ display: { xs: "none", md: "block" } }} >
                    <Box className='heroGalleryItem' sx={{ width: { md: "110px", lg: "140px" }, bottom: { md: "15%", lg: "-5%" }, right: "19%" }} ><img src={me1} alt="" /> </Box>
                    <Box className='heroGalleryItem' sx={{ width: { md: "100px", lg: "130px" }, top: { md: "1%", lg: "-10%" }, left: "14%" }} ><img src={me2} alt="" /> </Box>
                    <Box className='heroGalleryItem' sx={{ width: { md: "160px", lg: "200px" }, top: { md: "15%", lg: "10%" }, left: "30%" }} ><img src={me3} alt="" /> </Box>
                    <Box className='heroGalleryItem' sx={{ width: { md: "130px", lg: "160px" }, top: { md: "-6%", lg: "-10%" }, right: "12%" }} ><img src={me4} alt="" /> </Box>
                    <Box className='heroGalleryItem' sx={{ width: { md: "120px", lg: "150px" }, bottom: { md: "15%", lg: "5%" }, left: "10%" }} ><img src={me5} alt="" /> </Box>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Hero