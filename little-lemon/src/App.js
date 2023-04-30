import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Booking from "./components/Booking";
import BookingConfirmation from "./components/BookingConfirmation";
import { useFormContext } from "./store/FormContext";
import "./App.css";

function App() {
  const { form } = useFormContext();

  const formProps = {
    name: form.name,
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
    occasion: form.occasion,
    table: form.tablePreference,
    request: form.message,
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmation {...formProps} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
