import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import SearchFilter from '../../components/searchfilter/SearchFilter'
import Table from '../../components/table/Table'
import format  from 'format-duration';
import './searchpage.css'
import { useFilterdata } from '../../components/hooks/useFilterdata'

const Searchpage = () => {
  const [search, setSearch] = useState('')
  const {getAlbum,
        getArtist,
        getSong,
        song,
        album,
        artist} = useFilterdata()
  useEffect(() => {
     /*cuando llamo a solo un api concatenando track álbum 
     y artist muestra la informacion y no sale error al buscar,
     pero al hacer eso estaría mapeando el mismo artista por cada cancion,
     y lo mismo con los álbumes, por eso hice 3 apis,y funciona correctamente,
     busca normal, pero cuando actualiza muy rapido los api se crashea la página,.
     si escribes lento todo ok.
     no es por el texto, ya que he copiado y pegado una canción y de esa forma si funciona,
     de igual forma pienso que por el momento esto muestra mejor la data.
     */

    getArtist(`https://api.deezer.com/search/artist?q=${search}?&output=jsonp`)
      
    getSong(`https://api.deezer.com/search/track?q=${search}?&output=jsonp`)
    getAlbum(`https://api.deezer.com/search/album?q=${search}?&output=jsonp`)

 

  }, [search]);

  const handleChange = () => {
    return (e) => setSearch(e.target.value);
  };

  const filterSong = song.filter((value) => {
    return (
      value.title.toLowerCase().includes(search.toLowerCase().trim())
      
      
    )
  
  })
  const filterAlbum = album.filter((value) => {
    return (
      value.title.toLowerCase().includes(search.toLowerCase().trim())
      
      
    )
  
  })
  const filterArtist = artist.filter((value) => {
    return (
      value.name.toLowerCase().includes(search.toLowerCase().trim())
      
      
    )
  
  })



 

  return (
    <div className="searchpage">
<SearchFilter onChange={handleChange()} placeholder="Buscar por Canción, Álbum o Artista"/>
{filterSong.length>0?
 <div className="container">
   <div className="table-responsive">
  

  <table className="table">
    <thead>
          <tr>
          <th scope="col"></th>
          <th scope="col">Canción</th>
          <th scope="col">Artista</th>
          <th scope="col">Álbum</th>
          <th scope="col">Duración</th>
          <th scope="col"></th>

          
          </tr>
    </thead>
{    filterSong.map(value =>(
  
  <Table
       artist={value.artist.name}
       album={value.album.title}
       img={value.album.cover_small}
       song={value.title} 
       id={value.artist.id}
      duration={format(1000* value.duration)}
      play={value.preview}
      key={value.id}
  
       />))}
      


  </table> 
  </div>
  
  {filterAlbum.length>0?
<div className="row justify-content-left px-5">
<p>Álbumes</p>
  

{  filterAlbum.map(value =>(
  <div className="col-auto" key={value.id} >
  <Card name={value.title} img={value.cover} />
  </div>
))
}
</div>

:null}
  {filterArtist.length>0?
<div className="row justify-content-left px-5">
<p>Artistas</p>
  

{  filterArtist.map(value =>(
  <div className="col-auto" key={value.id}
  >
  <Card name={value.name} img={value.picture} />
  </div>
))
}
</div>

:null}
 </div>

:null}
      


















      





    </div>
  )
}
export default Searchpage