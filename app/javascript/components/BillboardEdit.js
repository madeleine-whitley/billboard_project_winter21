import React from 'react';

const BillboardEdit = ({ billboard }) => {

  // attr that your obj 
  const { name, id } = billboard
  // in case there are error it saves the user input
  // one per attr
  const defaultName = name ? name : ""
  return (
    <>
      <h1>Create Edit Billboard</h1>
      <form action={`/billboards/${id}`} method="post">
        <input type='hidden' name='_method' value="patch" />
        <input
          type="text"
          placeholder="Billboard name"
          required
          // these next ones are a must
          defaultValue={defaultName}
          name="billboard[name]"
        />
        <button type="submit">Update Billboard</button>
      </form>
      <a href="/billboards">Back to Billboards</a>
    </>
  )
}

export default BillboardEdit;