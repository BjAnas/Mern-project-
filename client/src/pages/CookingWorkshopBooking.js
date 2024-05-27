import React, { useState } from 'react';
import './CookingWorkshopBooking.css';

const CookingWorkshopBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour soumettre la réservation
    console.log('Date sélectionnée :', selectedDate);
    console.log('Heure sélectionnée :', selectedTime);
  };

  return (
    <div className="cooking-booking-container">
      <h2>Réservation d'Atelier de Cuisine Traditionnelle</h2>
      <p>Apprenez à cuisiner des plats traditionnels avec un chef local lors de notre atelier de cuisine !</p>
      <form onSubmit={handleSubmit} className="cooking-booking-form">
        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Heure :</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <button type="submit" className="btn-book">Réserver</button>
      </form>
    </div>
  );
};

export default CookingWorkshopBooking;
