import React from 'react';

const Song = ({ artist, song }) => {

  const { id, name } = artist
  const { title, body } = song
  return (
    <>
      <h1>Song: {title}</h1>
      <h1>Artist: {name}</h1>
      <p>
        {body}
      </p>
      <a href={`/artists/${id}`}>Show page of {name}</a>
    </>
  )
}

export default Song;