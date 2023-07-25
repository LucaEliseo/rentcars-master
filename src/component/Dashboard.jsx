import React, { useState, useEffect } from 'react';
import { Layout, Menu, Card, Row, Col, Input, Button, Modal, Pagination } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const Dashboard = () => {
  const accessToken =
    'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJsdWNhQGx1Y2EiLCJpYXQiOjE2OTAyMTg0MTgsImV4cCI6MTY5MTA4MjQxOH0.HvSiut0cWh2-00FEoEPfcBfsnfsZy2voT84BJHKPFSYucbjcDAvkc9dLPsMeac8Q';
  const [rentData, setRentData] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');
  const [searchText, setSearchText] = useState('');
  const [selectedCar, setSelectedCar] = useState({});
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

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
      setRentData(data);
    } catch (error) {
      console.error('Error fetching car list:', error);
    }
  };

  const handleMenuItemClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredRentData = rentData.filter((item) => item.modello.toLowerCase().includes(searchText.toLowerCase()));

  const handleEditCar = (car) => {
    setSelectedCar(car);
    setIsEditModalVisible(true);
  };

  const handleUpdateCar = async (event) => {
    event.preventDefault();

    try {
      await updateCar(selectedCar.id, selectedCar);
      fetchCarList();
      setIsEditModalVisible(false);
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
    setSelectedCar({
      ...selectedCar,
      [name]: value,
    });
  };

  const handleAddCar = () => {
    setSelectedCar({
      img: '',
      modello: '',
      anno: '',
      prezzo: '',
      info: [],
    });
    setIsEditModalVisible(true);
  };

  const handleAddNewCar = async (event) => {
    event.preventDefault();

    try {
      await addCar(selectedCar);
      fetchCarList();
      setIsEditModalVisible(false);
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
    setIsEditModalVisible(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };

  const handleShowDeleteModal = (car) => {
    setSelectedCar(car);
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  // Calculate the index of the first and last cars on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredRentData.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <Layout style={{ minHeight: '100vh', marginTop: 0 }}>
      <Sider style={{ background: selectedMenuItem === 'dashboard' ? '#001529' : '#fff', color: selectedMenuItem === 'dashboard' ? '#fff' : '#000' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px' }}>
          <UserOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
          Benvenuto Luca Eliseo
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} onClick={handleMenuItemClick}>
          <Menu.Item key="dashboard" icon={<UserOutlined />}>
            Dashboard
          </Menu.Item>
          {/* Aggiungi qui altre voci del menu */}
        </Menu>
        <Button className='mt-4 ml-2 me-2' type="primary" block onClick={handleAddCar}>
          Aggiungi Auto
        </Button>
      </Sider>
      <Layout>
        <Header style={{ background: selectedMenuItem === 'dashboard' ? '#001529' : '#fff', padding: 0, color: selectedMenuItem === 'dashboard' ? '#fff' : '#000' }}>
        </Header>
        <Content style={{ margin: '24px 16px 0', background: '#fff' }}>
          <div style={{ padding: '24px', minHeight: 360 }}>
            <h1 style={{ color: selectedMenuItem === 'dashboard' ? '#fff' : '#000', marginBottom: '24px' }}>Dashboard</h1>
            <Search
              placeholder="Ricerca auto"
              onChange={(e) => handleSearch(e.target.value)}
              style={{ marginBottom: '24px' }}
            />
            <Row gutter={[16, 16]}>
              {currentCars.map((item) => (
                <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    cover={<img src={item.img} alt={item.modello} style={{ height: '150px', objectFit: 'contain' }} />}
                    bordered={false}
                    hoverable
                    style={{ background: selectedMenuItem === 'dashboard' ? '#fff' : '#f0f2f5' }}
                  >
                    <h3>{item.modello}</h3>
                    <p>Anno: {item.anno}</p>
                    <p>Prezzo: {item.prezzo} €</p>
                    <p>Informazioni:</p>
                    <ul>
                      {item.info.map((infoItem, index) => (
                        <li key={index}>{infoItem}</li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button type="primary" icon={<EditOutlined />} onClick={() => handleEditCar(item)}>
                        Modifica
                      </Button>
                      <Button danger icon={<DeleteOutlined />} onClick={() => handleShowDeleteModal(item)}>
                        Elimina
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <Pagination
              className='mt-5'
                current={currentPage}
                onChange={setCurrentPage}
                total={filteredRentData.length}
                pageSize={carsPerPage}
                showSizeChanger={false}
              />
            </div>
          </div>
        </Content>
      </Layout>

      {/* Modale di Modifica Auto */}
      <Modal
  title="Modifica Auto"
  visible={isEditModalVisible}
  onCancel={handleCloseEditModal}
  footer={[
    <Button key="back" onClick={handleCloseEditModal}>
      Annulla
    </Button>,
    <Button key="submit" type="primary" onClick={handleUpdateCar}>
      Salva
    </Button>,
  ]}
>
  <Input
    placeholder="URL immagine"
    name="img"
    value={selectedCar.img}
    onChange={handleAddInputChange}
    className="mb-2"
  />
  <Input
    placeholder="Modello"
    name="modello"
    value={selectedCar.modello}
    onChange={handleAddInputChange}
    className="mb-2"
  />
  <Input
    type="number"
    placeholder="Anno"
    name="anno"
    value={selectedCar.anno}
    onChange={handleAddInputChange}
    className="mb-2"
  />
  <Input
    type="number"
    placeholder="Prezzo"
    name="prezzo"
    value={selectedCar.prezzo}
    onChange={handleAddInputChange}
    className="mb-2"
  />
  <Input
    type="text"
    placeholder="Informazioni (separate da virgola)"
    name="info"
    value={selectedCar.info?.join(', ') || ''}
    onChange={(e) => setSelectedCar({ ...selectedCar, info: e.target.value.split(', ') })}
  />
</Modal>


      {/* Modale di Eliminazione Auto */}
      <Modal
        title="Elimina Auto"
        visible={isDeleteModalVisible}
        onCancel={handleCloseDeleteModal}
        footer={[
          <Button key="back" onClick={handleCloseDeleteModal}>
            Annulla
          </Button>,
          <Button key="submit" type="primary" danger onClick={() => handleDeleteCar(selectedCar.id)}>
            Elimina
          </Button>,
        ]}
      >
        <p>Sei sicuro di voler eliminare questa auto?</p>
        
      </Modal>
    </Layout>
  );
};

export default Dashboard;
