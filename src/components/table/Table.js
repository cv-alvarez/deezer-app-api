import React from 'react'
import { Link } from 'react-router-dom'
  import './table.css'
const Table = ({artist,album,song,duration,play,img,id}) => {
  const onPlay = () => {
  if(  play.length>0 ) 
  return play.play()
  }
  return (
    
<tbody>
    <tr>
    <th scope="row">
<button onClick={()=>onPlay}><img src={img} alt=""/></button>
    </th>
    <th scope="row"><Link to={`/artist/${id}`} className="link">{artist}</Link></th>
    <th scope="row">{album}</th>

      <th scope="row">{song}</th>
      <th scope="row">{duration}</th>
      <th><audio src={play} type="audio/mpeg" controls></audio></th>


    </tr>
  </tbody>
        
  )
}

export default Table