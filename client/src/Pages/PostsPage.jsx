import { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Pagination } from '@mui/material'

import { client } from '../client';
import Loader from '../Components/Loader';
import LazyImage from '../Components/LazyImage';

const PostsPage = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const query = '*[_type == "posts"]';

    client.fetch(query)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err))
  }, [])


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const postToShow = posts.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (!postToShow.length) return <Loader />
  return (
    <Container maxWidth="xxl" className="mt">
      <Typography textAlign="left" variant='h2' mb="50px" color="white.white100">Posts</Typography>
      <Grid container className='projectsList' gap={1} rowGap={3}>
        {
          postToShow.map((post) => (
            <Grid key={post?._id} component="a" href={`/posts/${post?._id}`} sx={{ minWidth: { xs: "290px", md: "380px" }, height: { xs: "450px", sm: "490px", md: "550px", lg: "670px" } }} item xs={6} md={3} className='projectsListItem' >
              <LazyImage style={{ borderRadius: "18px" }} width="100%" height="100%" item={post} alt={post?.title} />
            </Grid>
          ))
        }
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(posts.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Container>
  )
}

export default PostsPage