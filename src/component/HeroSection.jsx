import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link} from 'react-router-dom';

const HeroSection = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('fade-in');
  }, []);

  return (
    <section className={`hero-section ${animationClass}`}>
      <Container className="text-center">
        <Row>
          <Col>
            <h1>MASERATI GHIBLI</h1>
            <h3 className="mt-4">
              Esperienza di guida di lusso: Noleggia la nuova Maserati e scopri il piacere della potenza e dell'eleganza.
            </h3>
            <Link to="Marketplace">
           <MDBBtn color="primary" size="lg" className="mt-3">
              Esplora
            </MDBBtn>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="/assets/image/Maserati.png" alt="Maserati" className="img-fluid mt-5 mb-5" style={{ width: "600px" }} />
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default HeroSection;
