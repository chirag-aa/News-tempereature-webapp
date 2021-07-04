
import React,{useState,useEffect} from "react";
import axios from "axios";
import "./tempstyle.css";

const Tempapp = ()=>{
    const [city,setcity]=useState();
    const [search,setsearch]=useState("Enter City");

    useEffect(()=>{
         const fetchApi= async()=>{
             const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cbe0136f9161eb5d645e0f7f777a6c11`
             const response =await axios.get(url);
            //  const resjson=await response.json();
             console.log(response.data.main);
             setcity(response.data.main);
         };

         fetchApi();
    } ,[search])
      return (
          <>
          <h1> THE WALL NEWS</h1>
          <div className="temp">
              <input type="search" className="inpsearch" onChange={(event)=>{
                     setsearch(event.target.value);
              }} ></input>
          </div>

          <div className="information">
                <h1>{search}</h1>
                <h1>{city.temp}</h1> 
                <h1>{city.temp_max}</h1> 
                <h1>{city.temp_min}</h1> 
          </div>
          </>
      )
}
export default Tempapp;