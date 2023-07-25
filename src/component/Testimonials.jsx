import React from "react";
import { Typography, Card, Row, Col, Rate } from "antd";

const { Title, Text } = Typography;

const Testimonials = () => {
  return (
    <div style={{ textAlign: "center", padding: "70px", backgroundColor: "#fff", color: "#000" }}>
      <h3 className="font-weight-bold mb-4">TESTIMONIANZE</h3>
      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
        Le testimonianze dei clienti sono un prezioso strumento per valutare l'esperienza e la soddisfazione degli utenti con un prodotto, un servizio o un'azienda. Attraverso queste testimonianze, è possibile ottenere un feedback autentico e concreto sulla qualità e l'affidabilità di ciò che viene offerto.
      </p>

      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                className="rounded-circle shadow-1-strong"
                width={100}
                height={100}
                alt="Teresa May"
              />
            </div>
            <Title level={5} className="font-weight-bold">Teresa May</Title>
            <Text className="font-weight-bold my-3">Vendita Toyota Yaris</Text><br />
            <Rate defaultValue={4.5} disabled style={{ marginBottom: "10px" }} /><br />
            <Text className="mb-2">
              <i className="fas fa-quote-left pe-2" />
              "Vendita senza stress, servizio impeccabile!"
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                className="rounded-circle shadow-1-strong"
                width={100}
                height={100}
                alt="Kate Alisse"
              />
            </div>
            <Title level={5} className="font-weight-bold">Kate Alisse</Title>
            <Text className="font-weight-bold my-3">Noleggio a Lungo Termine BMW M3</Text><br />
            <Rate defaultValue={5} disabled style={{ marginBottom: "10px" }} /><br />
            <Text className="mb-2">
              <i className="fas fa-quote-left pe-2" />
              "Servizio noleggio top, da provare!"
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                className="rounded-circle shadow-1-strong"
                width={100}
                height={100}
                alt="Alexa Horwitz"
              />
            </div>
            <Title level={5} className="font-weight-bold">Alexa Horwitz</Title>
            <Text className="font-weight-bold my-3">Nolegio Breve Termine Audi A1</Text> <br />
            <Rate defaultValue={4} disabled style={{ marginBottom: "10px" }} /> <br />
            <Text className="mb-2">
              <i className="fas fa-quote-left pe-2" />
              "Trasparenza impeccabile, consigliato!"
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
