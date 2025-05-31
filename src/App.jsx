import './App.css'
import Navbar from './components/Navbar/index'
import React from 'react'
import Input from './components/Input/Input';
import NavbarButtons from './components/Navbar/NavbarButtons';
import Button from './components/Button';

function App() {

  return (
    <>
      <Navbar navColors={"bg-blue-400 text-white"} listColors={"bg-blue-300 lg:bg-transparent text-white"}>
        <Navbar.Container>
                 <Navbar.Logo>
                   <span className='font-bold'>BI </span>ByIge
                </Navbar.Logo>
                      <Navbar.MenuIcon />
                      
                   <Navbar.List>
                     <Navbar.ListItem>Hotel</Navbar.ListItem>
                     <Navbar.ListItem>Train</Navbar.ListItem>
                     <Navbar.ListItem>Flight</Navbar.ListItem>
                     <Navbar.ListItem>Train</Navbar.ListItem>
                     <Navbar.ListItem>Travel</Navbar.ListItem>
                     <Navbar.ListItem>Car Rental</Navbar.ListItem>
                     <Navbar.ListItem>
                      <Input />   
                     </Navbar.ListItem>
                   </Navbar.List>
                  <Navbar.Buttons>
                      <Button>Login</Button>
                      <Button outline className={"text-black"}>Signup </Button>
                  </Navbar.Buttons>
        </Navbar.Container>

           {/* // Mobile Section */}
        <Navbar.Mobile>
            <Navbar.List screen>
              <Navbar.ListItem screen>Hotel</Navbar.ListItem>
              <Navbar.ListItem screen>Train</Navbar.ListItem>
              <Navbar.ListItem screen>Flight</Navbar.ListItem>
              <Navbar.ListItem screen>Train</Navbar.ListItem>
              <Navbar.ListItem screen>Travel</Navbar.ListItem>
              <Navbar.ListItem screen>Car Rental</Navbar.ListItem>
              <Navbar.ListItem>
                <Input />   
              </Navbar.ListItem>
          </Navbar.List>
        </Navbar.Mobile> 
      </Navbar>
    </>
  )
}

export default App
