import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn, Telegram, YouTube } from '@mui/icons-material';
const Footer = () => {
  return (
    <Container maxWidth="xxl" className='customContainer'>
      <Box mt={6} display="flex" gap={2} justifyContent="center">
        <Typography component="a" href='https://www.instagram.com/otabek_03.02/' ><Instagram /></Typography>
        <Typography component="a" href='https://www.linkedin.com/in/otabek-amonov-2b97a8217/' ><LinkedIn /></Typography>
        <Typography component="a" href='https://t.me/otabek_0302/' ><Telegram /></Typography>
        <Typography component="a" href='https://github.com/otabek0302/' ><GitHub /></Typography>
        <Typography component="a" href='https://youtube.com/@otabek0302?si=iwKrFUYdfb6xhRLE' ><YouTube /></Typography>
      </Box>
      <Typography variant='p' color="white.white20" textAlign="center" maxWidth="100%" >Created by Amonov Otabek | Soon will be changed...</Typography>
      <Typography variant='p' color="white.white20" textAlign="center" maxWidth="100%" >{new Date().toDateString()}</Typography>
    </Container>
  );
};

export default Footer;
