import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Model = ({ model }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/${model.category}/${model._id}`}>
        <Card.Img src={model.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/${model.category}/${model._id}`}>
          <Card.Title as="div">
            <h4>{model.name}</h4>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Model;
