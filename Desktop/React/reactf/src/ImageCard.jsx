import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ImageCard.css"

const ImageCard = (props) => {
const [count, setcount] = useState(100);
const Handle=()=>{
setcount(count+1);
     console.log(count);
    console.log("Butten clicked")
};
  return (
    <div className="ImageCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.imgsrc}

        />
        <Card.Body className="btn">
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text className="title">
           {props.desc}
          </Card.Text>
          <Button onClick={Handle} variant="primary" className="btn-it">Binge Watch</Button>{count}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImageCard;
