import React from 'react';

const SongEdit = ({ artist, song }) => {

  const { id, name } = artist 
  const { title, body } = song
  const defaultTitle = title ? title : ""
  const defaultBody = body ? body : ""
  return (
    <>
      <h1>New Song from the Artist {name}</h1>
      <form action={`/artists/${id}/songs/${song.id}`} method="post">
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

export default SongEdit;