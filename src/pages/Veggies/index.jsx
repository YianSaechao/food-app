import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Veggies = () => {
    const [veggies, setVeggies] = useState([]);


    useEffect(()=>{
    axios({
        method: "GET",
        url: "/server/veggies"
    }).then((res)=>{
        console.log(res.data);
        setVeggies(res.data)
    })

},[])
    return (
    <div>Show all fruits:
    {veggies.map((veggie) => {
        return <div key={veggie._id}>{veggie.name}</div>
        })}
    </div>
  )
}

export default Veggies