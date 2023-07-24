/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Card, Container, Row, Col, Pagination } from 'react-bootstrap';

const Dashboard = () => {
  const accessToken =
    'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJsdWNhQGx1Y2EiLCJpYXQiOjE2OTAyMTg0MTgsImV4cCI6MTY5MTA4MjQxOH0.HvSiut0cWh2-00FEoEPfcBfsnfsZy2voT84BJHKPFSYucbjcDAvkc9dLPsMeac8Q';
  const [carList, setCarList] = useState([]);
  const [editFormData, setEditFormData] = useState({
    id: '',
    img: '',
    modello: '',
    anno: '',
    prezzo: '',
    info: [],
  });
  const [addFormData, setAddFormData] = useState({
    img: '',
    modello: '',
    anno: '',
    prezzo: '',
    info: [],
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 5;
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchCarList();
  }, []);

  const fetchCarList = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/rent', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setCarList(data);
    } catch (error) {
      console.error('Error fetching car list:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEditCar = (car) => {
    setEditFormData({
      id: car.id,
      img: car.img,
      modello: car.modello,
      anno: car.anno,
      prezzo: car.prezzo,
      info: [...car.info],
    });
    handleShowEditModal();
  };

  const handleUpdateCar = async (event) => {
    event.preventDefault();

    try {
      await updateCar(editFormData.id, editFormData);
      fetchCarList();
      handleCloseEditModal();
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  const handleDeleteCar = async (carId) => {
    try {
      await deleteCar(carId);
      fetchCarList();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleAddInputChange = (event) => {
    const { name, value } = event.target;
    setAddFormData({
      ...addFormData,
      [name]: value,
    });
  };

  const handleAddCar = () => {
    setAddFormData({
      img: '',
      modello: '',
      anno: '',
      prezzo: '',
      info: [],
    });
    handleShowAddModal();
  };

  const handleAddNewCar = async (event) => {
    event.preventDefault();

    try {
      await addCar(addFormData);
      fetchCarList();
      handleCloseAddModal();
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  const updateCar = async (carId, updatedCarData) => {
    await fetch(`http://localhost:8080/api/rent/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updatedCarData),
    });
  };

  const deleteCar = async (carId) => {
    await fetch(`http://localhost:8080/api/rent/${carId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const addCar = async (carData) => {
    await fetch('http://localhost:8080/api/rent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(carData),
    });
  };

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = carList.filter((car) =>
    car.modello.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <Container fluid>
      <Row className="py-3">
        {/* Sidebar */}
        <Col md={3} lg={2} className="d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>
              {/* Add other navigation items here */}
            </ul>
          </div>
        </Col>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="pt-3 pb-2 mb-3">
            <h1>Car Dashboard</h1>
          </div>
          <Form.Group controlId="formSearch">
            <Form.Control
              type="text"
              placeholder="Cerca auto per nome"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </Form.Group>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {currentCars.map((car) => (
              <Col key={car.id} className="mb-4">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={car.img}
                    alt={car.modello}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{car.modello}</Card.Title>
                    <Card.Text>Anno: {car.anno}</Card.Text>
                    <Card.Text>Prezzo: {car.prezzo}</Card.Text>
                    <Card.Text>
                      Informazioni:
                      <ul>
                        {car.info.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleEditCar(car)}>
                      Modifica
                    </Button>
                    <Button variant="danger" onClick={() => handleDeleteCar(car.id)}>
                      Elimina
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center mt-3">
            <Pagination>
              <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
              {[...Array(Math.ceil(filteredCars.length / carsPerPage)).keys()].map((number) => (
                <Pagination.Item
                  key={number + 1}
                  active={number + 1 === currentPage}
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(filteredCars.length / carsPerPage)}
              />
            </Pagination>
          </div>
          <Button variant="success" onClick={handleAddCar} className="mt-3">
            Aggiungi Auto
          </Button>
        </main>
      </Row>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Auto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateCar}>
            <Form.Group controlId="formImg">
              <Form.Label>URL immagine</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="URL immagine"
                value={editFormData.img}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formModello">
              <Form.Label>Modello</Form.Label>
              <Form.Control
                type="text"
                name="modello"
                placeholder="Modello"
                value={editFormData.modello}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAnno">
              <Form.Label>Anno</Form.Label>
              <Form.Control
                type="number"
                name="anno"
                placeholder="Anno"
                value={editFormData.anno}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrezzo">
              <Form.Label>Prezzo</Form.Label>
              <Form.Control
                type="number"
                name="prezzo"
                placeholder="Prezzo"
                value={editFormData.prezzo}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formInfo">
              <Form.Label>Informazioni (separate da virgola)</Form.Label>
              <Form.Control
                type="text"
                name="info"
                placeholder="Informazioni (separate da virgola)"
                value={editFormData.info.join(', ')}
                onChange={(e) => setEditFormData({ ...editFormData, info: e.target.value.split(', ') })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Add Modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Auto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddNewCar}>
            <Form.Group controlId="formImg">
              <Form.Label>URL immagine</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="URL immagine"
                value={addFormData.img}
                onChange={handleAddInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formModello">
              <Form.Label>Modello</Form.Label>
              <Form.Control
                type="text"
                name="modello"
                placeholder="Modello"
                value={addFormData.modello}
                onChange={handleAddInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAnno">
              <Form.Label>Anno</Form.Label>
              <Form.Control
                type="number"
                name="anno"
                placeholder="Anno"
                value={addFormData.anno}
                onChange={handleAddInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrezzo">
              <Form.Label>Prezzo</Form.Label>
              <Form.Control
                type="number"
                name="prezzo"
                placeholder="Prezzo"
                value={addFormData.prezzo}
                onChange={handleAddInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formInfo">
              <Form.Label>Informazioni (separate da virgola)</Form.Label>
              <Form.Control
                type="text"
                name="info"
                placeholder="Informazioni (separate da virgola)"
                value={addFormData.info.join(', ')}
                onChange={(e) => setAddFormData({ ...addFormData, info: e.target.value.split(', ') })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Aggiungi
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Dashboard;
