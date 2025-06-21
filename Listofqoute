import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function Listofqoute() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes?limit=10")
      .then((res) => res.json())
      .then((data) => setData(data.quotes));
  }, []);

  return (
    <div>
      <h1>the Page Contain Only 10 Qoutes its Engarage You</h1>
      {data.map((value, index) => (
        <h2 key={index}>{value.quote}</h2>
      ))}
    </div>
  );
}

export default Listofqoute;
