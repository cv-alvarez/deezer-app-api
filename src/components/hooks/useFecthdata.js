import {useState,useEffect} from 'react'
import fetchJsonp from 'fetch-jsonp'
export const useFetchdata = (url) => {
    const [data, setData] = useState([])
    
    const getData = async()=>{
     await fetchJsonp(url)
    .then(function(response) {
        return response.json();
      })
      .then(json => setData(json.data))
     
 

    }

    useEffect(() => {
    getData()

  }, [url])

 
         
           
          
  return {
    data
  }
}
