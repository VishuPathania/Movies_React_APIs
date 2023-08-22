import React from 'react';

const MoviesList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <div>{movie.openingText}</div>
          <div>{movie.releaseDate}</div>
          <button onClick={() => props.onDeleteMovie(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
