import React from 'react';

//controller index should match in
// the Filename, the component name
//props are properties passed into the component from the controller 
// and export name 
//const subs = ({props, keys}) =>
const Billboards = ({ billboards }) => {
  return (
    <>
      <h1>Billboards Page</h1>
      <a href="/billboards/new">Add Artist</a>
      { billboards.map( (billboard) => (
        <>
          <h3>{billboard.name}</h3>
          <a href={`/billboards/${billboard.id}`}>Show</a>
          <a href={`/billboards/${billboard.id}/edit`}>Edit</a>
          <a href={`/billboards/${billboard.id}`} data-method='delete'>
            Delete
          </a>
        </>
      )) }
    </>
  )
}

export default Billboards;