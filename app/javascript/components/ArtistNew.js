import React from 'react';

const ArtistNew = ({ billboard, artist }) => {

  const { id } = billboard 
  const { name, rank } = artist
  const defaultTitle = name ? name : ""
  const defaultBody = rank ? rank : ""
  return (
    <>
      <h1>New Artist from the Billboard</h1>
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