import React from 'react';

const ArtistNew = ({ billboard, artist }) => {

  const { id, name } = billboard 
  const { title, body } = artist
  const defaultTitle = title ? title : ""
  const defaultBody = body ? body : ""
  return (
    <>
      <h1>New Artist from the Billboard {name}</h1>
      <form action={`/billboards/${id}/artists`} method="post">
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

export default ArtistNew;