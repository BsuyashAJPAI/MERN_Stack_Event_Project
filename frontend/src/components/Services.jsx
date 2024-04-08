import React from 'react'

const Services = () => {
  const services =[
    {
      id:1 , 
      url:'/birthday.jpeg' ,
      titel:"Birthday Planing" ,
    },
    {
      id:2 , 
      url:'/anniversary.jpg' ,
      titel:"Anniversary Planning" ,
    },
    {
      id:3 , 
      url:'/campingtrip.jpg' ,
      titel:"Camping Trip Planing" ,
    },
    {
      id:4 , 
      url:'/gamenight.jpeg' ,
      titel: "Game Night Planing",
    },
    {
      id:5 , 
      url:'/partyplaning.jpg' ,
      titel:"Party Planning" ,
    },
    {
      id:6 , 
      url:'/weddingplanning.jpg' ,
      titel:"Wedding Planing" ,
    }
  ]
  return <>
  
  <div className="services container">
    <h2>OUR SERVICES</h2>
    <div className="banner">
      {
        services.map(element=>{
          return(
            <div className="item" key={element.id}>
              <h3>{element.titel}</h3>
              <img src={element.url} alt={element.titel} />
            </div>
          )
        })
      }
    </div>
  </div>

  </>
}

export default Services