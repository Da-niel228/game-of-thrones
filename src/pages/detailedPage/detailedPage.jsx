import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailedPage = () => {
    const {id} = useParams()
    const [data, setData] = useState([])

    const getOneHero = async() => {
        const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`)
        setData(response.data)
    } 

  
useEffect(() => {
    getOneHero()
},[])

  return (
    <div>
        <h2>{data.fullName}</h2>
       <h3>{data.family}</h3>
       <div>
        <img src={data.imageUrl} alt={data.name} />
       </div>
    </div>
  )
}

export default DetailedPage