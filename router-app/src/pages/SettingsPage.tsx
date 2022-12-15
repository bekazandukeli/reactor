import React, { useContext, useLayoutEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../NewApp';

export default function SettingsPage() {
  const context = useContext(UserContext);

  console.log(context);

  if (!context?.isLoggedIn) {
   return <Navigate to="/" />
  }

  return (
    <div>SettingsPage</div>
  )
}
