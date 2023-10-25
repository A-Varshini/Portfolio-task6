import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import {  Routes, Route } from "react-router-dom";

import Navigation from './Navigation';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { Contact } from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import Homename from './Homename';
import Navigation2 from './Navigation2';
import { Banner } from './Banner';
import ReactDOM from "react-dom/client";
import Footer from './Footer';
import Experience from './Experience';

// import Main from './Main'

function App() {
  return (
    <div className="App">
  <Navigation2></Navigation2>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />}>
          <Route index element={<Navigation2 />} />
          <Route path="#skills" element={<Skills />} />
          <Route path="#connect" element={<Contact />} />
          <Route path="#experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Skills></Skills>
    <Projects></Projects>
    <Experience></Experience>
    <Contact></Contact>
   
    
     {/* <Footer></Footer> */}
   {/* <Skills></Skills> */}
   {/* <NavBar></NavBar>
   <Navigation></Navigation> */}
   {/* <Contact></Contact> */}
   {/* <Homename></Homename> */}
   {/* <Navigation2 ></Navigation2>
   <Banner></Banner> */}
    </div>
  );
}

export default App;
