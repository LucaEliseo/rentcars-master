import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Trend = () => {
  return (
    <MDBContainer className="my-5">
      <h2 className="text-center mb-4">Trend del momento</h2>
      <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <MDBCol>
          <MDBCard>
            <MDBCardImage src="https://cdn2.rcstatic.com/images/car_images/web/fiat/500_lrg.jpg" alt="Car Model 1" position="top" />
            <MDBCardBody>
              <MDBCardTitle>Fiat 500</MDBCardTitle>
              <MDBCardText>"Icónica, elegante, compatta. La Fiat 500 incarna lo stile italiano con un'esperienza di guida divertente e dinamica."</MDBCardText>
              <MDBBtn color="primary">Visualizza l'offerta</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <MDBCardImage src="https://cdn2.rcstatic.com/images/car_images/web/jeep/renegade_lrg.jpg" alt="Car Model 2" position="top" />
            <MDBCardBody>
              <MDBCardTitle>Jeep Renegade</MDBCardTitle>
              <MDBCardText>"Avventurosa e versatile. La Jeep Renegade conquista con il suo carattere da fuoristrada, ideale per l'esplorazione urbana e oltre."</MDBCardText>
              <MDBBtn color="primary">Visualizza l'offerta</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <MDBCardImage src="https://cdn2.rcstatic.com/images/car_images/web/alfa_romeo/giulietta_lrg.jpg" alt="Car Model 3" position="top" />
            <MDBCardBody>
              <MDBCardTitle>Alfa Romeo Giulietta</MDBCardTitle>
              <MDBCardText>"Seduttiva e raffinata. La Giulietta incanta con il suo design italiano, trasformando ogni guida in un'esperienza emozionante."</MDBCardText>
              <MDBBtn color="primary">Visualizza l'offerta</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <MDBCardImage src="https://cdn2.rcstatic.com/images/car_images/web/volkswagen/golf_lrg.jpg" alt="Car Model 4" position="top" />
            <MDBCardBody>
              <MDBCardTitle>Volkswagen Golf</MDBCardTitle>
              <MDBCardText>"Iconica ed elegante. La Volkswagen Golf è la compagna perfetta per la guida quotidiana, con uno stile senza tempo."</MDBCardText>
              <MDBBtn color="primary">Visualizza l'offerta</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Trend;
