/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function Testimonials() {
    return (
        <MDBContainer
            fluid
            className="py-5 shadow-sm"
            style={{ backgroundColor: "ghostwhite", color: "#000" }}
         X
        >
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8" className="text-center">
                    <h3 className="fw-bold mb-4">Cosa dicono di noi</h3>
                    <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                    Le testimonianze dei clienti sono un prezioso strumento per valutare l'esperienza e la soddisfazione degli utenti con un prodotto, un servizio o un'azienda. Attraverso queste testimonianze, è possibile ottenere un feedback autentico e concreto sulla qualità e l'affidabilità di ciò che viene offerto.
                    </p>
                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
                <MDBCol md="4" className="mb-4 mb-md-0">
                    <MDBCard>
                        <MDBCardBody className="py-4 mt-2">
                            <div className="d-flex justify-content-center mb-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                    className="rounded-circle shadow-1-strong"
                                    width="100"
                                    height="100"
                                />
                            </div>
                            <h5 className="font-weight-bold">Teresa May</h5>
                            <h6 className="font-weight-bold my-3">Vendita Toyota Yaris</h6>
                            <MDBTypography
                                listUnStyled
                                className="d-flex justify-content-center"
                            >
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star-half-alt" size="sm" color="info" />
                                </li>
                            </MDBTypography>
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                "Vendita senza stress, servizio impeccabile!"
                                </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4 mb-md-0">
                    <MDBCard>
                        <MDBCardBody className="py-4 mt-2">
                            <div className="d-flex justify-content-center mb-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                                    className="rounded-circle shadow-1-strong"
                                    width="100"
                                    height="100"
                                />
                            </div>
                            <h5 className="font-weight-bold">Kate Alisse</h5>
                            <h6 className="font-weight-bold my-3">
                              Noleggio a Lungo Termine BMW M3
                            </h6>
                            <MDBTypography
                                listUnStyled
                                className="d-flex justify-content-center"
                            >
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                            </MDBTypography>
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                "Servizio noleggio top, da provare!"
                                </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4 mb-md-0">
                    <MDBCard>
                        <MDBCardBody className="py-4 mt-2">
                            <div className="d-flex justify-content-center mb-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                    className="rounded-circle shadow-1-strong"
                                    width="100"
                                    height="100"
                                />
                            </div>
                            <h5 className="font-weight-bold">Alexa Horwitz</h5>
                            <h6 className="font-weight-bold my-3">
                                Nolegio Breve Termine Audi A1
                            </h6>
                            <MDBTypography
                                listUnStyled
                                className="d-flex justify-content-center"
                            >
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" color="info" />
                                </li>
                                <li>
                                    <MDBIcon far icon="star" size="sm" color="info" />
                                </li>
                            </MDBTypography>
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                "Trasparenza impeccabile, consigliato!"
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}