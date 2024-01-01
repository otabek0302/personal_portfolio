import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material'

import Loader from '../Components/Loader';
import LazyImage from '../Components/LazyImage';
import { client } from '../client';

const ProjectsPage = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query)
      .then((data) => setProjects(data))
      .catch((err) => console.log(err))
  }, [])

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const projectsToShow = projects.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (!projects.length) return <Loader />

  return (
    <Container maxWidth="xxl" className="mt">
      <Typography mb="50px" variant='h2' color="white.white100" textAlign="left">Most Popular Resources</Typography>
      {
        projectsToShow.map((item) => (
          <Grid key={item._id} container mb="25px">
            <Grid item xs={12} md={7} className='projectsListItem'>
              <Link to={`/projects/${item?._id}`}>
                <Box sx={{ height: { sx: "200px", md: "400px" } }} borderRadius="24px" overflow="hidden" >
                  <LazyImage width="100%" height="100%" style={{ objectFit: "cover" }} item={item} alt={item?.title} />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} md={5} p="28px">
              <Typography color="white.white20" variant='span' textAlign="left" >{new Date(item?._createdAt).toDateString()}</Typography>
              <Link to={`/projects/${item?._id}`}>
                <Typography mt="5px" color="white.white100" variant='h5' textAlign="left" >{item?.title}</Typography>
              </Link>
              <Typography my={2} color="white.white30" variant='p' textAlign="left" className='long' >{item?.description}</Typography>
              <Box display="flex" gap={1}>
                <Button variant='contained' href={item?.github} >Get Code</Button>
                <Button variant='outlined' href={item?.visitlink}>Visit Website</Button>
              </Box>
            </Grid>
          </Grid>
        ))
      }
      <Box display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(projects.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Container>
  )
}

export default ProjectsPage
