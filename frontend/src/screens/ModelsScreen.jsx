import React from "react";
import models from "../models";
import { Row, Col } from "react-bootstrap";
import Model from "../components/Model";

const ModelsScreen = ({ category }) => {
  const newModels = models.filter((m) => m.category === category);
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {newModels.map((model) => (
          <Col key={model._id} sm={12} md={6} lg={4} xl={3}>
            <Model model={model} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ModelsScreen;
