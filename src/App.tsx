import React, { useState } from 'react';
import { GlobalStyle } from './components/StyledComponents';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Header onBookAppointment={openAppointmentModal} />
      <Hero onBookAppointment={openAppointmentModal} />
      <Services onBookAppointment={openAppointmentModal} />
      <About />
      <Footer />
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={closeAppointmentModal} 
      />
    </>
  );
}

export default App;
