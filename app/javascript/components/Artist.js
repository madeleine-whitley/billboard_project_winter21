import React from 'react';

const Artist = ({ billboard, artist }) => {

  const { id } = billboard
  const { name, rank } = artist
  return (
    <>
      <h1>Artist: {title}</h1>
      <h1>Billboard: {name}</h1>
      <p>
        {body}
      </p>
      <a href={`/billboards/${id}`}>Show page of {name}</a>
    </>
  )
}

export default Artist;