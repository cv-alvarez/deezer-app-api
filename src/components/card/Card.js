import React from 'react'
import styles from './card.module.css'




const Card = ({name,img}) => {


  return (
    <div className={`card ${styles.card}`} >
      <img src={img} className="card-img-top " alt={name}/>
        <div className={`${styles.cardbody} card-body`} >
        

           <p className={styles.p}>{name}</p>
           
         


        </div>

    </div>
  )
}

export default Card