
import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from "./pages/welcome";
import Homes from "./pages/home";
import './sass/main.scss'

import Learn from "./components/learn";
import TheBox from "./components/box";
import Testmonial from "./components/testimonial";
import DashboardPage from "./pages/dashboards";
import Order from "./components/dashboard/order";
import Prodcuct from "./components/scams/product";
import Message from "./components/scams/message";
import Customer from "./components/scams/customer";
import Report from "./components/scams/report";
import SignUp from "./components/signup";
import EmailDash from "./components/dashboard/messageEmail";
import ContactPage from "./components/contactPage";
import About from "./components/about";

import OurTeam from "./components/scams/teams/teams";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/wekraft" element={<Welcome/>}></Route>
      <Route path="/Home" element={<Homes/>} ></Route>

      <Route path="/toturial" element={<Learn/>} ></Route>
      <Route path="/tools" element={<TheBox/>} ></Route>
      <Route path="/testimonial" element={<Testmonial/>} ></Route>

      <Route path="/dashboard" element={<DashboardPage/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/products" element={<Prodcuct/>}></Route>
      <Route path="/messages" element={<Message/>}></Route>
      <Route path="/customers" element={<Customer/>}></Route>
      <Route path="/upload" element={<Report/>}></Route>
      <Route path="/tearm" element={<OurTeam/>}></Route>
      <Route path="/message" element={<EmailDash/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
      <Route path="/abouts" element ={<About/>}></Route>

    </Routes>
   </Router>
  );
}

export default App;
