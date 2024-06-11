import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BookCard from '../component/BookCard';
import books from '../books.json';


function HomePage() {
  return (
    <Container>
      <Grid container spacing={2} mt={1}>
      {books.slice(0, 8).map((book) => (
        <Grid key={book.id} item xs={12} md={8} lg={3}>
          <BookCard book={book}/>
        </Grid>
      ))}
      </Grid>
      </Container>
  )
}

export default HomePage
