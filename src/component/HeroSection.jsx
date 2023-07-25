import React, { useEffect, useState } from 'react';
import { Typography, Button, Row, Col, Image } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const HeroSection = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('fade-in');
  }, []);

  return (
    <section className={`hero-section ${animationClass}`} style={{ padding: '20px 0' }}>
      <Row justify="center" align="middle" style={{ minHeight: 'calc(80vh - 100px)' }}>
        <Col xs={20} sm={16} md={12} lg={8} style={{ textAlign: 'center' }}>
          <Title level={1}>MASERATI GHIBLI</Title>
          <Text className="mt-3" style={{ fontSize: '1.25rem' }}>
            Esperienza di guida di lusso: Noleggia la nuova Maserati e scopri il piacere della potenza e dell'eleganza.
          </Text>
          <Link to="Marketplace">
            <Button type="primary" size="large" className="mt-3" style={{ display: 'block', margin: '0 auto' }}>
              Esplora
            </Button>
          </Link>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} style={{ textAlign: 'center' }}>
          <Image src="/assets/image/Maserati.png" alt="Maserati" className="img-fluid mt-5 mb-5" style={{ width: "600px" }} />
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
