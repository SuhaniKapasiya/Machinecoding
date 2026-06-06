import React, { useEffect, useState } from "react";
import "./AutoComplete.css";

const AutoComplete = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResult , setShowResult] = useState (false);

  const fetchData = async() => {
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();

    setResult(json?.recipes);
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div className="autocomplete-container">
      <h1>🔍 AutoComplete Search Bar</h1>

      <input
        type="text"
        value={input}
        className="search-input"
        onChange={(e) => setInput(e.target.value)}
        onFocus={()=>setShowResult(true)}
        onBlur={()=>setShowResult(false)}
      />

     
      {showResult && (
        <div className="result-container">
          {result.map((r) => (
            <span className="result" key={r.id}>
              {r.name}
            </span>
          ))}
        </div>  
      )}

    </div>
  );
};

export default AutoComplete;
