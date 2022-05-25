import React from 'react'
import { useFetchdata } from '../hooks/useFecthdata';
import Table from '../table/Table';
import format  from 'format-duration';
import 'react-jinke-music-player/assets/index.css'

import styles from './tablelist.module.css'
const Tablelist = ({section,url}) => {
  
      
      const {data} = useFetchdata(url)
  return (
  

<div className="container py-5">
<h1 className={`${styles.title} py-5`}>{section}</h1>
<div className="table-responsive">
  

<table className="table ">
  <thead>
    <tr>
    <th scope="col">
        
    </th>

      <th scope="col">Artista</th>
      <th scope="col">Álbum</th>
      <th scope="col">Canción</th>
      <th scope="col">Duración</th>
      <th scope="col">
        preview song
    </th>
    </tr>
  </thead>
  {
    data.map(d=>(
    <Table key={d.id} id={d.artist.id} img={d.album.cover_small} artist={d.artist.name} album={d.album.title} song={d.title} duration={format(1000* d.duration)} play={d.preview}/>
    ))
  }
</table> 
</div>
</div>


)
}

export default Tablelist