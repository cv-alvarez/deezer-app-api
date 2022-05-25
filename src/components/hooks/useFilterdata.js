import {useState} from 'react'
import fetchJsonp from 'fetch-jsonp'
  export const useFilterdata = () => {
    const [artist, setArtist] = useState([])
    const [album, setAlbum] = useState([])
    const [song, setSong] = useState([])

    
    const getSong = (url)=>{
      fetchJsonp(url)
    .then(function(response) {
        return response.json();
      })
      .then(json => setSong(json.data))
     
 

    }
    const getArtist = (url)=>{
      fetchJsonp(url)
    .then(function(response) {
        return response.json();
      })
      .then(json => setArtist(json.data))
     
 

    }
    const getAlbum = (url)=>{
      fetchJsonp(url)
    .then(function(response) {
        return response.json();
      })
      .then(json => setAlbum(json.data))
     
 

    }


    


 
         
           
          
  return {
getAlbum,
getArtist,
getSong
,song,album,artist
 
  }
}
