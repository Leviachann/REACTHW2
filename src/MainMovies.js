import React from 'react';
import './Movies.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const Movies = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map(movie => (
        <Card  className='cardd moviecard movie-card ' key={movie.id}>
          <CardImg top width="100%" src={movie.image} alt={movie.name} />
          <CardBody >
            <CardTitle className='title'>{movie.name}</CardTitle>
            <CardSubtitle className='genre'>{movie.genre}</CardSubtitle>
            <CardText className='desc'>{movie.description}</CardText>
            <CardText className='desc'>Director: {movie.director}</CardText>
            <CardText className='desc'>Price: {movie.price}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}; 

export default Movies;