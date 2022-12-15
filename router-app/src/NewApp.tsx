import React, { createContext, useState } from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BeginningPage from './pages/BeginningPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import QuestionPage from './pages/QuestionPage';
import Root from './pages/Root';
import SettingsPage from './pages/SettingsPage';
import UsersPage from './pages/UsersPage';


type UserInfo = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

export const UserContext = createContext<UserInfo | null>(null);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="about">
        <Route index element={<AboutPage />} />
        <Route path='beginning' element={<BeginningPage />} />
      </Route>
      <Route path='contact' element={<ContactPage />} />
      <Route 
        path='faq/:questionId' 
        element={<QuestionPage />} 
        loader={async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.questionId}`);
        }}
      />
      <Route path='faq' element={<FaqPage />} />
      <Route path='settings' element={<SettingsPage />} />
      <Route 
        path='users'
        element={<UsersPage />} 
        loader={async () => {
          return fetch('https://jsonplaceholder.typicode.com/users');
        }}
      />
    </Route>
  )
);

export default function NewApp() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{
      isLoggedIn: isLoggedIn,
      setIsLoggedIn
    }}>
      <RouterProvider router={router}  />
    </UserContext.Provider>
  )
}
