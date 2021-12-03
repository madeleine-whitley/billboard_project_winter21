import React from 'react';

const ArtistEdit = ({ billboard, artist }) => {

  const { id } = billboard 
  const { name, rank } = artist
  const defaultTitle = name ? name : ""
  const defaultBody = rank ? rank : ""
  return (
    <>
      <h1>New Artist from the Billboard {name}</h1>
      <form action={`/billboards/${id}/artists/${artist.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <label>Title</label>
        <input 
          type="text"
          required 
          defaultValue={defaultTitle}
          name="topic[title]"
        />
        <label>Body</label>
        <textarea
          required 
          defaultValue={defaultBody}
          name="topic[body]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ArtistEdit;