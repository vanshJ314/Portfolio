import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function BlogssCards(props) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blogs/${props.id}`);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleReadMore}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogssCards;
