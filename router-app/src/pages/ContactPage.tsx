import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/', {
      state: {
        email: "email@email.ge",
        name: "Badu"
      }
    });
  };

  return (
    <div>
      ContactPage
      <button onClick={handleNavigation}>Go to Home</button>
    </div>

  )
}
