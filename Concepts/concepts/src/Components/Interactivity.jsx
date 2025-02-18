import { useState } from "react";
import { sculptureList } from "./data.js";

export function handleNextClick() {
  //for looping through the images
  const [index, setIndex] = useState(0);

  //pointer which checks if we reach end of list
  //imagine it as a index
  const hasNext = index < sculptureList.length - 1;

  if (hasNext) {
    setIndex(index + 1);
  } else {
    setIndex(0);
  }
}

export default function Gallery({index}) {
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  //index of the image
  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}> Next</button>

      <h2>
        <i> {sculpture.name} </i>
        by {sculpture.artist}
      </h2>

      <h3>
        {" "}
        ({index + 1} of {sculptureList.length} )
      </h3>

      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>

      {showMore && <p> {sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
