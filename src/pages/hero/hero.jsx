import React, { useEffect, useState } from 'react'
import './hero.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [DataHero, setDataHero] = useState([])
    const [data2, setData2] = useState({})
    const navigate = useNavigate() 
    async function getHero() {
        const response = await axios.get('https://thronesapi.com/api/v2/Characters')
        console.log(response.data);
        setDataHero(response.data)
    }
    useEffect(() => {
      getHero()
    }, [])

    const details = (id) => {
        navigate(`/hero/${id}`)
    }

    const getOneHero = async(id) => {
        const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`)
        setData2(response.data)
    }

  return (
    <div className='hero-wrap'>
     <div className='hero-list'>
     {DataHero.map((item,idx) => {
            return (
                <div
                key={idx} 
                className='item-list' 
                 onClick={() => getOneHero(item.id)} 
                >
                    
                    {item.fullName}
                    <div >
                        <img className='img' src= {item.imageUrl} alt="" />
                    </div>
                   
                </div>
            )
        })}
     </div>
     <div className='detailed-info'>
     <h2>{data2.fullName}</h2>
       <h3>{data2.family}</h3>
       <div>
        <img src={data2.imageUrl} alt={data2.name} />
       </div>
     </div>
    </div>
  )
}

export default Hero