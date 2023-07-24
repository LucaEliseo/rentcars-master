import Container from 'react-bootstrap/Container';
import { NavbarBrand } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'antd/dist/antd.css'
import { Link} from 'react-router-dom';

function Header() {
  return (
    <>
  
      <Navbar className='mb-5' bg="bg-white shadow-sm p-3 nav d-flex" data-bs-theme="light">
        <Container>
        
          <Link to="/">
          <NavbarBrand>RentCars</NavbarBrand>
          </Link>
         
          <Nav className="justify-content-center  ">
          <Link to="Dashboard" className='nav-link'>Dashboard</Link>
            <Link to="Marketplace" className='nav-link'> Marketplace</Link>
            <Link to="Login" className='nav-link'>Accedi</Link>
          
          
           

          </Nav>
     
  
        </Container>
      </Navbar>
    </>
  );
}

export default Header;