import React from "react";
import { Card, Button, Row, Col } from "antd";

const { Meta } = Card;

const Trend = () => {
  return (
    <div style={{ textAlign: "center", padding: "70px" }}>
      <h2 className="text-center mb-5">Trend del momento</h2>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={
              <img
                src="https://cdn2.rcstatic.com/images/car_images/web/fiat/500_lrg.jpg"
                alt="Car Model 1"
                style={{ height: "200px", objectFit: "contain" }}
              />
            }
          >
            <Meta
              title="Fiat 500"
              description="Iconica, elegante, compatta. La Fiat 500 incarna lo stile italiano con un'esperienza di guida divertente e dinamica."
            />
            <Button type="primary" block className="mt-3">
              Visualizza l'offerta
            </Button>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={
              <img
                src="https://cdn2.rcstatic.com/images/car_images/web/jeep/renegade_lrg.jpg"
                alt="Car Model 2"
                style={{ height: "200px", objectFit: "contain" }}
              />
            }
          >
            <Meta
              title="Jeep Renegade"
              description="Avventurosa e versatile. La Jeep Renegade conquista con il suo carattere da fuoristrada."
            />
            <Button type="primary" block className="mt-3">
              Visualizza l'offerta
            </Button>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={
              <img
                src="https://cdn2.rcstatic.com/images/car_images/web/alfa_romeo/giulietta_lrg.jpg"
                alt="Car Model 3"
                style={{ height: "200px", objectFit: "contain" }}
              />
            }
          >
            <Meta
              title="Alfa Romeo Giulietta"
              description="Seduttiva e raffinata. La Giulietta incanta con il suo design italiano, trasformando ogni guida emozionante."
            />
            <Button type="primary" block className="mt-3">
              Visualizza l'offerta
            </Button>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={
              <img
                src="https://cdn2.rcstatic.com/images/car_images/web/volkswagen/golf_lrg.jpg"
                alt="Car Model 4"
                style={{ height: "200px", objectFit: "contain" }}
              />
            }
          >
            <Meta
              title="Volkswagen Golf"
              description="Iconica ed elegante. La Volkswagen Golf è la compagna perfetta per la guida quotidiana, con uno stile senza tempo."
            />
            <Button type="primary" block className="mt-3">
              Visualizza l'offerta
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Trend;
