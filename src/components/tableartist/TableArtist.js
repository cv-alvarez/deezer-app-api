import React from 'react'

const TableArtist = (artist,img) => {
  return (
    <div className="tableArtist">

<tbody>
    <tr>
    <th scope="row">
<button onClick={()=>onPlay}><img src={img} alt=""/></button>
    </th>
      <th scope="row">{song}</th>
     


    </tr>
  </tbody>

    </div>
  )
}

export default TableArtist