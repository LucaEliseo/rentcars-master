import React from "react";
import { Typography, Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Title } = Typography;

const Headers = () => {
  return (
    <Header
      className="mb-5"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
        position: "sticky",
        top: 0,
        transition: "top 0.3s", 
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link to="/">
            <Title level={3} style={{ color: "#000", margin: 0 }}>
              RentCars
            </Title>
          </Link>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Menu.Item key="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="marketplace">
            <Link to="/Marketplace">Marketplace</Link>
          </Menu.Item>
          <Menu.Item key="Dashboard">
            <Link to="/Dashboard">Benvenuto Luca Eliseo</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default Headers;
