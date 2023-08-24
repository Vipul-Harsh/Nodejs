import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ImageCard.css"
const ImageCard = (props) => {
  return (
    <div className="ImageCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.imgsrc}

        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.desc}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImageCard;
