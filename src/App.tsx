
import './App.css'
import ButtonNavBar from './NavBar'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './home';
import About from './About';
import LoginScreen from './LoginScreen';
import { Grid } from '@mui/material';
import VirtualizedList from './MailList';
import { useState } from 'react';


function App() {
  const [mailID, setMailID] = useState<string | null>(null);
  function changeState(mailID: string | null) {
      console.log("mailID Changing!!!");
      setMailID(mailID);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home id={mailID} changeHandler={changeState}/>,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "login",
      element: <LoginScreen/>
    },
  ]);
  return (
    <>
    <ButtonNavBar/>
    <Grid container spacing={0}>
    <Grid item xs={3}>
      <VirtualizedList changeHandler={changeState}/>
    </Grid>
    <Grid item xs={9}>
      <RouterProvider router={router} />
    </Grid>
    </Grid>
    

    
    </>
  )
}

export default App
