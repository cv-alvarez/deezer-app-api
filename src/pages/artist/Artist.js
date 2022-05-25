import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useFetchdata } from '../../components/hooks/useFecthdata';


const Artist = () => {
  const {id}=useParams()

  const {data} = useFetchdata(`https://api.deezer.com/artist/${id}/top?&output=jsonp`)
 
  return (

<div>
{data.map(d=>(

<p style={{color: 'black'}}>{d.title}</p>
))}


</div>
  
 
  )
}

export default Artist