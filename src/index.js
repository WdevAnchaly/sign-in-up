import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/App';
import Home from './components/pages/index';
import Login from './components/pages/login';
import Regitration from './components/pages/regitration';

import PrivateRoute from './PrivateRoute';


const Root =()=> {
    return (
<>
         <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path={`${process.env.PUBLIC_URL}/`} element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route exact path={`${process.env.PUBLIC_URL}/sign-in`} element={<Login />} />
                <Route exact path={`${process.env.PUBLIC_URL}/sign-up`} element={<Regitration />} />
              </Routes>
            </Layout>
          </BrowserRouter>
          </>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);