import React, { useState, useEffect } from "react";
import { Select, Button, Input, Card, Row, Col, Breadcrumb, Divider } from "antd";
import { SearchOutlined, ReloadOutlined, DollarCircleOutlined, CarOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const { Option } = Select;
const PAGE_SIZE = 8;

const cities = [
  {
    name: "Rome",
    airports: ["Aeroporto di Fiumicino - Leonardo da Vinci", "Aeroporto di Ciampino"],
  },
  {
    name: "Milan",
    airports: ["Aeroporto di Milano Malpensa", "Aeroporto di Milano Linate"],
  },
  {
    name: "Naples",
    airports: ["Aeroporto di Napoli Capodichino"],
  },
  {
    name: "Venice",
    airports: ["Aeroporto di Venezia Marco Polo", "Aeroporto di Treviso Antonio Canova"],
  },
];

const CarSelection = ({ cars, onCarSelect }) => {
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

  const handleSearchInputChange = (name, value) => {
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
    <div className="car-selection p-5">
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Input.Search
          className="car-input"
          placeholder="Cerca per modello"
          onChange={(e) => handleSearchInputChange("modello", e.target.value)}
          suffix={null} // Rimuove l'icona di ricerca
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Input.Search
          className="car-input"
          placeholder="Cerca per anno"
          onChange={(e) => handleSearchInputChange("anno", e.target.value)}
          suffix={null} // Rimuove l'icona di ricerca
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Input.Search
          className="car-input"
          placeholder="Cerca per prezzo (massimo)"
          onChange={(e) => handleSearchInputChange("prezzo", e.target.value)}
          suffix={null} // Rimuove l'icona di ricerca
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Button
          type="primary"
          onClick={() => setSearchCriteria({ modello: "", anno: "", prezzo: "" })}
          style={{ width: "100%" }}
        >
          Reset
        </Button>
        </Col>
        {displayedCars.map((car) => (
          <Col key={car.id} xs={24} sm={12} lg={8} xl={6} className="mb-4">
            <Card
              hoverable
              cover={<img src={car.img} className="card-img-top" alt={car.modello} />}
              className="car-card mt-5"
            >
              <Card.Meta title={car.modello} description={`Anno: ${car.anno}`} />
              <Divider />
              <p>{car.info.join(" | ")}</p>
              <p>
                <DollarCircleOutlined /> {car.prezzo} €/mese
              </p>
              <Button onClick={() => onCarSelect(car)} size="small" icon={<CarOutlined />}>
                Scegli questa auto
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Row justify="center">
        <Col>
          <div className="pagination-container mt-5">
            <Button
              disabled={currentPage === 1}
              onClick={handlePrevPage}
              className="pagination-button "
            >
              Pagina precedente
            </Button>
            <Button
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
              className="pagination-button mx-3 "
            >
              Pagina successiva
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const CartSummary = ({ selectedCar }) => {
  return (
    <div className="cart-summary">
      <h2 className="mb-5 mt-5 text-center">Riepilogo dell'ordine</h2>
      {selectedCar ? (
        <Card 
        className="p-5 mb-5"
          hoverable
          cover={<img src={selectedCar.img} className="card-img-top" alt={selectedCar.modello} />}
        >
          <Card.Meta title={selectedCar.modello} description={`Anno: ${selectedCar.anno}`} />
          <Divider />
          <p>{selectedCar.info.join(" | ")}</p>
          <p>
            <DollarCircleOutlined /> {selectedCar.prezzo} €
          </p>
        </Card>
      ) : (
        <p className="text-center mb-5">Nessuna auto selezionata</p>
      )}
    </div>
  );
};

const CarBooking = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAirport, setSelectedAirport] = useState("");
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

  const handleDurationChange = (value) => {
    setDuration(value);
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
    setSelectedAirport("");
  };

  const handleAirportChange = (value) => {
    setSelectedAirport(value);
  };

  const handleBookingSubmit = () => {
    if (
      selectedCar &&
      fullName &&
      email &&
      phoneNumber &&
      duration &&
      selectedCity &&
      selectedAirport
    ) {
      setBookingStatus("Prenotazione completata! Riceverai una email di conferma.");
    } else {
      setBookingStatus("Si prega di compilare tutti i campi richiesti.");
    }
  };

  return (
    <div className="car-booking p-4 ml-5">
      <Breadcrumb className="p-5" style={{ marginBottom: "20px" }}>
        <Breadcrumb.Item>
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Prenota Veicolo</Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={15}>
          <CarSelection cars={cars} onCarSelect={handleCarSelect} />
        </Col>
        <Col xs={24} md={9} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CartSummary selectedCar={selectedCar} />
          <Input
            className="car-input"
            placeholder="Nome e Cognome"
            value={fullName}
            onChange={handleFullNameChange}
            size="medium"
            style={{ width: "100%", marginBottom: "8px" }}
          />
          <Input
            className="car-input"
            placeholder="Indirizzo email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            size="medium"
            style={{ width: "100%", marginBottom: "8px" }}
          />
          <Input
            className="car-input"
            placeholder="Numero di telefono"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            size="medium"
            style={{ width: "100%", marginBottom: "8px" }}
          />
          <Select
            className="car-input"
            placeholder="Seleziona una città"
            value={selectedCity}
            onChange={handleCityChange}
            size="medium"
            style={{ width: "100%", marginBottom: "8px" }}
          >
            {cities.map((city) => (
              <Option key={city.name} value={city.name}>
                {city.name}
              </Option>
            ))}
          </Select>
          <Select
            className="car-input"
            placeholder="Seleziona un aeroporto"
            value={selectedAirport}
            onChange={handleAirportChange}
            size="medium"
            disabled={!selectedCity}
            style={{ width: "100%", marginBottom: "8px" }}
          >
            {selectedCity &&
              cities.find((city) => city.name === selectedCity).airports.map((airport, index) => (
                <Option key={index} value={airport}>
                  {airport}
                </Option>
              ))}
          </Select>
          <Select
            className="car-input"
            placeholder="Seleziona la durata"
            value={duration}
            onChange={handleDurationChange}
            size="medium"
            style={{ width: "100%", marginBottom: "8px" }}
          >
            <Option value="6">6 mesi</Option>
            <Option value="12">12 mesi</Option>
            <Option value="24">24 mesi</Option>
            <Option value="36">36 mesi</Option>
            <Option value="48">48 mesi</Option>
          </Select>
          <Button
            className="car-input text-center mt-4 mb-4"
            type="primary"
            onClick={handleBookingSubmit}
            size="medium"
            style={{ width: "30%" }}
          >
            Prenota
          </Button>
          {bookingStatus && <p className="booking-status">{bookingStatus}</p>}
        </Col>
      </Row>
    </div>
  );
};

export default CarBooking;
