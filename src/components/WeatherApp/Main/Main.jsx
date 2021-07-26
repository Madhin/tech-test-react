import React, {useEffect, useState} from 'react'
import Card from '../Card/Card';



const Main = () => {
  const [apiData, setApiData] = useState();
  let [state, setState] = useState("London");

  
  
  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e1025f91fa1b482b90794645212607&q=${state}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
        setApiData(data)
      })
    }, [state])

    const changeCountry = () => {
      if (state === "London") {
      setState("Rome")
      } else if (state === "Rome") {
        setState("Bristol")
      } else if (state === "Bristol") {
        setState("London")
    } }

  return (
    <div>
      {apiData&& 
      <h1>{apiData.location.name}</h1>}
      {apiData && 
      <p>{apiData.current.temp_c} degrees celsius</p>}
      {apiData && 
      <img src = {apiData.current.condition.icon} alt = "temp image" />}
      {apiData && 
      <p>Humidity: {apiData.current.humidity}</p>}
      <button onClick = {changeCountry}>Toggle area</button>
      
  </div>
  )
}

export default Main
