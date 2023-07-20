import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem, MDBInput } from "mdb-react-ui-kit";

const PAGE_SIZE = 8; // Numero di auto per pagina

const HeaderMarketplace = () => {
  return (
    <div className="text-center mb-5">
      <h1 className="header-title ">SCOPRI I NOSTRI PARTNER</h1>
      <div className="logo-row mt-4 me-3">
        <img src="https://seeklogo.com/images/T/toyota-logo-239F6C9C1A-seeklogo.com.png" alt="Toyota" />
        <img src="https://seeklogo.com/images/R/Renault-logo-7FDCE9358D-seeklogo.com.png" alt="Renault" />
        <img src="https://seeklogo.com/images/F/Ford-logo-836834C6CC-seeklogo.com.png" alt="Ford" />
        <img src="https://seeklogo.com/images/F/FIAT_2007-logo-D66246C2CB-seeklogo.com.png" alt="Fiat" />
        <img src="https://seeklogo.com/images/M/Mercedes-Benz-logo-BD677D0B15-seeklogo.com.png" alt="Mercedes" />
        <img src="https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png" alt="BMW" />
        <img src="https://seeklogo.com/images/O/opel-new-logo-D9A5129C2D-seeklogo.com.png" alt="Opel" />
        <img src="https://seeklogo.com/images/J/Jeep-logo-95D59945A7-seeklogo.com.png" alt="Jeep" />
      </div>
    </div>
  );
};

const CarSelection  = ({ cars, onCarSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchCriteria, setSearchCriteria] = useState({
    modello: "",
    anno: "",
    prezzo: "",
  });

  const totalCars = cars.length;
  const totalPages = Math.ceil(totalCars / PAGE_SIZE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearchInputChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria((prevCriteria) => ({ ...prevCriteria, [name]: value }));
  };

  const filteredCars = cars.filter((car) => {
    const { modello, anno, prezzo } = searchCriteria;

    return (
      car.modello.toLowerCase().includes(modello.toLowerCase()) &&
      car.anno.toString().includes(anno) &&
      (prezzo === "" || car.prezzo <= parseFloat(prezzo))
    );
  });

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, totalCars);
  const displayedCars = filteredCars.slice(startIndex, endIndex);

  return (
    <MDBContainer className="Cntfetch">
      <MDBRow className="my-5">
        <MDBCol md="12" className="mb-4">
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex">
              <MDBInput
                className="me-2 "
                type="text"
                label="Cerca per modello"
                name="modello"
                value={searchCriteria.modello}
                onChange={handleSearchInputChange}
              />
              <MDBInput
                className="me-2"
                type="text"
                label="Cerca per anno"
                name="anno"
                value={searchCriteria.anno}
                onChange={handleSearchInputChange}
              />
              <MDBInput
                className="me-2"
                type="text"
                label="Cerca per prezzo (massimo)"
                name="prezzo"
                value={searchCriteria.prezzo}
                onChange={handleSearchInputChange}
              />
            </div>
            <MDBBtn color="secondary" onClick={() => setSearchCriteria({ modello: "", anno: "", prezzo: "" })}>
              Reset
            </MDBBtn>
          </div>
        </MDBCol>
        {displayedCars.map((car) => (
          <MDBCol key={car.id} sm="6" lg="3" className="mb-4">
            <div className="card h-100">
              <img src={car.img} className="card-img-top" alt={car.modello} />
              <div className="card-body">
                <h5 className="card-title">{car.modello}</h5>
                <p className="card-text">Anno: {car.anno}</p>
                <p className="card-text">{car.info.join(" | ")}</p>
                <p className="card-text">Prezzo: {car.prezzo} €/mese</p>
                <MDBBtn color="primary" onClick={() => onCarSelect(car)} size="sm">
                  Scegli questa auto
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div className="d-flex justify-content-between">
            <MDBBtn color="primary" disabled={currentPage === 1} onClick={handlePrevPage} className="mb-3">
              Pagina precedente
            </MDBBtn>{" "}
            <MDBBtn color="primary" disabled={currentPage === totalPages} onClick={handleNextPage} className="mb-3">
              Pagina successiva
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const CartSummary = ({ selectedCar }) => {
  return (
    <MDBContainer>
      <MDBRow className="my-5">
        <MDBCol>
          <h2 className="mb-3"> Riepilogo dell'ordine</h2>
          {selectedCar ? (
            <div className="card">
              <img src={selectedCar.img} className="card-img-top" alt={selectedCar.modello} />
              <div className="card-body">
                <h5 className="card-title">{selectedCar.modello}</h5>
                <p className="card-text">Anno: {selectedCar.anno}</p>
                <p className="card-text">{selectedCar.info.join(" | ")}</p>
                <p className="card-text">Prezzo: {selectedCar.prezzo} €</p>
              </div>
            </div>
          ) : (
            <p>Nessuna auto selezionata</p>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const CarBooking = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [duration, setDuration] = useState("");
  const [bookingStatus, setBookingStatus] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/rent");
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Errore nell'ottenere i dati delle auto:", error);
      }
    };

    fetchCars();
  }, []);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleBookingSubmit = () => {
    // Simulazione della prenotazione
    if (selectedCar && fullName && email && phoneNumber && duration) {
      setBookingStatus("Prenotazione completata! Riceverai una email di conferma.");
    } else {
      setBookingStatus("Si prega di compilare tutti i campi richiesti.");
    }
  };

  return (
    <MDBContainer>
      <HeaderMarketplace/>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a href="/">Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Prenota Veicolo</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <h1 className="text-center my-5">Scegli un'auto e prenota</h1>
      <MDBRow>
        <MDBCol md="8">
          <CarSelection cars={cars} onCarSelect={handleCarSelect} />
        </MDBCol>
        <MDBCol md="4">
          <CartSummary selectedCar={selectedCar} />
          <MDBInput className="mb-2" label="Nome e Cognome" value={fullName} onChange={handleFullNameChange} size="sm" />
          <MDBInput className="mb-2" label="Indirizzo email" type="email" value={email} onChange={handleEmailChange} size="sm" />
          <MDBInput className="mb-2" label="Numero di telefono" value={phoneNumber} onChange={handlePhoneNumberChange} size="sm" />
          <div className="mb-2">
            <select className="form-select" value={duration} onChange={handleDurationChange}>
              <option value="6">6 mesi</option>
              <option value="12">12 mesi</option>
              <option value="24">24 mesi</option>
              <option value="36">36 mesi</option>
              <option value="48">48 mesi</option>
            </select>
          </div>
          <div className="d-flex justify-content-end">
            <MDBBtn className="mt-3" color="primary" onClick={handleBookingSubmit} size="sm">
              Prenota
            </MDBBtn>
          </div>
          {bookingStatus && <p className="mt-3">{bookingStatus}</p>}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CarBooking;
