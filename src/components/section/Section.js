import React from 'react'
import Cardlist from '../cardlist/Cardlist'
import Tablelist from '../tablelist/Tablelist'
import styles from './section.module.css'

const Section = () => {
  return (
    <div className={styles.section}>
      <Cardlist 
      section="Nuevos álbumes recomendados"
      url="https://api.deezer.com/chart/0/albums&limit=30&output=jsonp"
      />
       <Cardlist 
      section="Playlist más populares"
      url="https://api.deezer.com/chart/0/playlists&limit=30&output=jsonp"
      />
      <Tablelist
       section="Canciones más populares"
       url="https://api.deezer.com/chart/0/tracks&limit=30&output=jsonp"
      />
    </div>
  )
}

export default Section