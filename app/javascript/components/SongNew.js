import React from 'react';

const SongNew = ({ artist, song }) => {

  const { id, name } = artist 
  const { title, body } = song
  const defaultTitle = title ? title : ""
  const defaultBody = body ? body : ""
  return (
    <>
      <h1>New Song from the Artist {name}</h1>
      <form action={`/artists/${id}/songs/new`} method="post">
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

export default SongNew;