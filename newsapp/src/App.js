import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import axios from "axios";
import './App.css';
//const{Meta}=Card;
function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=4c250882d56f4d90bf9887e909a7a510`
      )
      setNews(response.data.articles);
    };
    loadNews();
  }, []);
  console.log(news);
  return (
    <div className="App">
      {
        news.map((currentElement)=>{
          return(
              <div className="first">
              <p className="TitleClass">{currentElement.title}</p>
              <img src={currentElement.urlToImage} alt="ham image hai" className="imgClass"></img>
              <p className="descripClass">{currentElement.description}</p>
              <button className="readmoreClass">
                <a href={currentElement.url} target="_blank">Read More</a>
              </button>
              </div>
          
          )
        })
      }
    </div>
  );
}

export default App;
