import React, { useState} from "react";
import LinkForm from "./Shortner/LinkForm";
import LinkCard from "./Shortner/LinkCard";
import "./App.css"

const shorted_Link = [
  {
    longURL:
      "https://www.google.com/search?q=shortly.com&amp;oq=sho&amp;aqs=chrome.1.69i57j69i59l2j69i61l3j69i65l2.2163j0j1&amp;sourceid=chrome&amp;ie=UTF-8",
    shortURL: "https://bit.ly/3R0Z4to",
  },
];

const Home = () => {
  const [shortedLink, setShortedLinks] = useState(shorted_Link);

  return (

      <div className="page-content App">
        <div className="link-container">
          <h1>Url Shortener</h1>
          <h4>Short links, big results</h4>
          <LinkForm setShortedLinks= {setShortedLinks}/>
        </div>
        <div className="list-container">
          <LinkCard shortedLink={shortedLink} />
        </div>
      </div>
  );
};

export default Home;