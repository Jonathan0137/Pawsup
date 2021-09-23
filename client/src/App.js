import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [addingService, setAddingService] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [formErrors, setFormErrors] = useState({
    title: false,
    content: false,
  });

  useEffect(() => {
    axios
      .get("/api/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch(() => {}); // TODO: Handle errors
  }, []);

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));

    if (value) {
      setFormErrors((prev) => ({ ...prev, [key]: false }));
    }
  };

  const validateFormData = () => {
    const tempErrors = { title: false, content: false };

    if (formData.title.trim() === "") {
      tempErrors.title = true;
    }
    if (formData.content.trim() === "") {
      tempErrors.content = true;
    }

    setFormErrors(tempErrors);
    return !Object.values(tempErrors).some((hasError) => hasError);
  };

  const addService = (e) => {
    e.preventDefault();

    if (!validateFormData()) {
      return;
    }

    setAddingService(true);

    axios
      .post("/api/services", formData)
      .then((res) => {
        setServices((prev) => [...prev, res.data]);
        setFormData({ title: "", content: "" });
        setAddingService(false);
      })
      .catch(() => {}); // TODO: Handle errors
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      axios
        .delete(`/api/services/${id}`)
        .then((res) => {
          console.log(id);
          setServices((prev) => [
            ...prev.filter((service) => service.id !== id),
          ]);
        })
        .catch(() => {}); // TODO: Handle errors
    }
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* // TODO: Add loading animation */}
        <Image src="favicon.ico" rounded />
      </div>
    );
  }

  return (
    <div className="home">
      <Form onSubmit={addService} style={{ display: "flex" }}>
        <Form.Control
          value={formData.title}
          onChange={(e) => updateFormData("title", e.target.value)}
          isInvalid={formErrors.title}
          type="text"
          placeholder="Title"
        />
        <Form.Control
          value={formData.content}
          onChange={(e) => updateFormData("content", e.target.value)}
          isInvalid={formErrors.content}
          type="text"
          placeholder="Content"
        />
        <Button
          style={{ whiteSpace: "nowrap" }}
          type="submit"
          disabled={addingService}
        >
          Add new service
          {addingService && (
            <Spinner
              style={{ marginLeft: "0.5rem" }}
              animation="border"
              size="sm"
            />
          )}
        </Button>
      </Form>
      <Row style={{ justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
        {services.map(({ id, image, title, content }) => (
          <Card style={{ width: "18rem", padding: 0 }} key={id}>
            <Card.Img variant="bottom" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text
                className="card-text"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {content}
              </Card.Text>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Button disabled>See more</Button>
                <Button disabled>Edit</Button>
                <Button onClick={() => handleDelete(id)} variant="danger">
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default App;
