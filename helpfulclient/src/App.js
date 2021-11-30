import React,{useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import About from './components/About';
import Physical from './components/Physical';
import Mental from './components/Mental';
import Financial from './components/Financial';
import HelpSignin from './components/HelpSignin';
import ClientSignin from './components/ClientSignin';
import AdminSignin from './components/AdminSignin';
import Contact from './components/Contact';
import ClientSignUp from './components/ClientSignUp';
import Questionnaire from "./components/Questionnaire";
import {UserContext} from "./userComponent";


function App() {
  const [signedIn,setSignedIn] = useState({firstName:"",loggedIn:"False"})

  return (
    <div className="App">
      <UserContext.Provider value={{signedIn,setSignedIn}}>
      <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>HelpFul</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Get Help" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/physical"}>Physical Help</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/mental"}>
                    Mental Help
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/financial"}>
                    Financial Help
                  </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="Sign In" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/clientsignin"}>Client</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/helpsignin"}>
                    Help
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/adminsignin"}>
                    Admin
                  </NavDropdown.Item>
                  
                </NavDropdown>
                <Nav.Link as={Link} to={"/clientsignup"}>New Here?</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/about"}>About US</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/physical" element={<Physical/>}/>
        <Route exact path="/mental" element={<Mental/>}/>
        <Route exact path="/financial" element={<Financial/>}/>
        <Route exact path="/clientsignin" element={<ClientSignin/>}/>
        <Route exact path="/helpsignin" element={<HelpSignin/>}/>
        <Route exact path="/adminsignin" element={<AdminSignin/>}/>
        <Route exact path="/clientsignup" element={<ClientSignUp/>}/>
        <Route exact path="/mental/questionnaire" element={<Questionnaire/>}/>
        </Routes>
      </div>

      </Router>

      </UserContext.Provider>

    </div>
  );
}

export default App;
