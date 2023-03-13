import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';


import Header from "./Header";
import HomePage from "./HomePage";
import SessionsTimes from "./SessionsTimes";
import Seats from "./Seats";
import OrderData from "./OrderData";
import GlobalStyle from '../style/GlobalStyle';

function App() {

  const [orderData, setOrderData] = useState("")
  const [returnButton, setReturnButton] = useState("button-off")

  return (
    <BrowserRouter>
        <Header returnButton={returnButton} />
        <Routes>
            <Route path="/" element={<HomePage setReturnButton={setReturnButton} />}></Route>
            <Route path="/filme/:idFilme" element={<SessionsTimes />}></Route>
            <Route path="/assentos/:idSessao" element={<Seats orderData={orderData} setOrderData={setOrderData} setReturnButton={setReturnButton}/>}></Route>
            <Route path="/sucesso" element={<OrderData orderData={orderData} setOrderData={setOrderData}/>}></Route>
        </Routes>
        <GlobalStyle /> 
    </BrowserRouter>
  );
}

export default App;