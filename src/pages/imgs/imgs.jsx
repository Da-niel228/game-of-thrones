import React, { useState } from 'react'
import axios from 'axios';
import './imgs.css';
import { Button } from '@mui/material';

const GetImgs = () => {
   
     const [Dataimg, setDataImg] = useState([])
    const GetResponse = async() => {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1')
        console.log();
       
        setDataImg(response.data)
      }
     /*  console.log(Dataimg); */
     
  return (
    <div>
         <a href="/hero"><input type="button" value="Игра Престолов" /></a>
        <Button variant="contained" color="success" onClick={GetResponse}>Получить кису</Button>
        {Dataimg.map((item, idx) => {
            return(
                <div key={idx}>
                   
                    <img className='img' src={item.url} alt="" />
                </div>
            )
        })}
    </div>
  )
}

export default GetImgs