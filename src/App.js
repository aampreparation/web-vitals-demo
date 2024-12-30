import bgImage1 from "./images/bgImage_1920.webp";
import bgImage from "./images/bgImage.jpeg";
import Fishing from "./images/Fishing.jpeg";
import KiteSurfing from "./images/Kite_Surfing.jpeg";
import Safari from "./images/Safari.jpeg";
import SightSeeing from "./images/Sight_Seeing.jpeg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [heavyData, setHeavyData] = useState(null);

  useEffect(() => {
    const fetchHeavyData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/2"
      );
      const result = await response.json();
      setTimeout(() => {
        setHeavyData(result);
      }, 500); // Simulate a delay of 500ms
    };

    fetchHeavyData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={bgImage}
          className=""
          alt="fishing"
          width="100%"
          height="380px"
          fetchPriority="high"
        />
        <div className="robo-text">Below listed data is available</div>
        {data ? (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {heavyData ? (
          <div className="carousel">
            <div className="slides">
              <img src={Fishing} fetchPriority="high" alt="Fishing"></img>
              <img src={KiteSurfing} alt="Kite"></img>
              <img src={Safari} alt="Safari"></img>
              <img src={SightSeeing} alt="Sight"></img>
            </div>
            <div className="dots">
              <span className="dot" data-index="0"></span>
              <span className="dot" data-index="1"></span>
              <span className="dot" data-index="2"></span>
              <span className="dot" data-index="3"></span>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
