
import React,{useState,useEffect} from "react";
import axios from "axios";
import "./tempstyle.css";

const Tempapp = ()=>{
    const [city,setcity]=useState();
    const [search,setsearch]=useState("delhi");

    useEffect(()=>{
         const fetchApi= async()=>{
             const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cbe0136f9161eb5d645e0f7f777a6c11`
             const response =await fetch(url);
             const resjson=await response.json();
            console.log(resjson.main);
             setcity(resjson.main);
           // console.log(resjson);
         };

         fetchApi();
    } ,[search])
      return (
          <>
          <h1> Temperature App</h1>
          <div className="temp">
              <input type="search" className="inpsearch" onChange={(event)=>{
                     setsearch(event.target.value);
              }} ></input>
          </div>
        {!city ? (
             <p>No Data Found</p>
        ) :(
            <div className="information">
                <h1>City: {search}</h1>
                <h1>Temp: {city.temp}</h1> 
                <h1>Max Temp: {city.temp_max}</h1> 
                <h1>Min Teamp: {city.temp_min}</h1> 
          </div> 
        )}
          </>
      )
}
export default Tempapp;
