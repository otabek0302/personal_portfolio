import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { NotFoundImg} from '../assets'

const NotFound = () => {
  return (
    <Container maxWidth="xxl">
      <Stack py="120px" alignItems="center" gap="25px">
        <Typography variant='h2' color="white.white100">You Must be Here !</Typography>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ width: { xs: "50px", md: "150px" }, height: { xs: "200px", md: "400px" } }} >
          <img width="100%" height="auto" src={NotFoundImg} alt="Not Found" />
        </Box>
        <Box>
          <Button variant="main" href='/' >Go Home</Button>
        </Box>
      </Stack>
    </Container>
  )
}

export default NotFound