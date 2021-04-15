import React from "react";
import { Link } from "react-router-dom";
import models from "../models";

const ModelScreen = ({ match }) => {
  const model = models.find((m) => m._id === match.params.id);
  return (
    <>
      <Link to={`/${match.params.category}`}>
        <button className="btn btn-sm btn-dark">Back</button>
      </Link>
      <div>{model.name}</div>
    </>
  );
};

export default ModelScreen;
