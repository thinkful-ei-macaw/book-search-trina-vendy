import React from "react";


function Book(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <p><img alt="book" src={props.image} /></p>
    </div>
  );
}



export default Book;
