import React from 'react';

const Artists = ({ billboard, artists }) => {

  const { id, name} = billboard
  // const id = sub.id
  // const name = sub.name
  const url = `/billboards/${id}/artists/`
  return(
    <>
      <h1>All Artists from {name}</h1>
      <a href={`/billboards/${id}/artists/new`}>Add New Artist</a>
      { artists.map( (artist) => (
        <>
          <h3>{artist.name}</h3>
          <a href={`${url}${artist.id}`}>Show</a>
          <a href={`${url}${artist.id}/edit`}>Edit</a>
          <a href={`${url}${artist.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Artists;