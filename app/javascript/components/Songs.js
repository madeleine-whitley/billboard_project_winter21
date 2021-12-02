import React from 'react';

const Songs = ({ artist, songs }) => {

  const { id, name } = artist
  // const id = sub.id
  // const name = sub.name
  const url = `/artists/${id}/songs/`
  return(
    <>
      <h1>All Songs from {name}</h1>
      <a href={`/artists/${id}/songs/new`}>Add New Song</a>
      {/* topics = [{ title: 'adfadf', body: 'dasfasdf', id: 1}, { title: 'adfadf', body: 'dasfasdf', id: 2}] */}
      { songs.map( (song) => (
        <>
          <h3>{song.title}</h3>
          <a href={`${url}${song.id}`}>Show</a>
          <a href={`${url}${song.id}/edit`}>Edit</a>
          <a href={`${url}${song.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Songs;