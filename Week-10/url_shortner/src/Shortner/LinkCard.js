

import React from "react";

const LinkCard = ({shortedLink}) => {
console.log("shorted link", shortedLink)
  return (
    <div className="linklist-container">
      {shortedLink.map((link, ) => (
        <div className="shorted-link-card">
        <p>{link.longURL}</p>
        <p>{link.shortURL}</p>
        <i
          onClick={() => alert(link.shortURL)}
          className="las la-clipboard"
        ></i>
      </div>
      ))}

    </div>
  );
};

export default LinkCard;