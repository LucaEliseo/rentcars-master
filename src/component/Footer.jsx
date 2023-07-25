import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Collegati con noi sui social network:</span>
        </div>

        <div>
          <a href='https://www.facebook.it' target='__blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://www.twitter.it'  target='__blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.google.it' target='__blank'  className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.it' target='__blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.it' target='__blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://www.github.it' target='__blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Rent Cars
              </h6>
              <p>
              Rent Car: Il tuo partner di fiducia per il noleggio e la vendita di veicoli. Rent Car ti offre la possibilità di noleggiare e vendere veicoli in modo semplice e conveniente.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Servizi</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Noleggio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vendita Auto
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Dove ci troviamo
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Condizioni</h6>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ Noleggio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ Vendita Auto
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cookies
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Termini e Condizioni
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contatti</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Riviera di Chiaia, 122 , Napoli NA

              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                rentalcars@nassistenza.it
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 081 98 756 44
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 081 89 090 22
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'white' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         -  RENTCARS
        </a>
      </div>
    </MDBFooter>
  );
}