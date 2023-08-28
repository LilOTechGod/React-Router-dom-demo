import React from 'react'
import {useParams, Link} from 'react-router-dom';

export const ProductDetails = () => {
    const params = useParams();


  return (
    <>
        <h1>Product details</h1>
        <p>{params.id}</p>
        <p><Link to='..' relative='path'>Back</Link></p>
    </>
  )
}
