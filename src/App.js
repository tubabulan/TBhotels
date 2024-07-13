import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import RegisterForm from './components/RegisterForm';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage'; 
import Header from './components/Header';
import RoomList from './components/RoomList';
import Rezervation from './components/Rezervation';
import RoomFilter from './components/RoomFilter';
import Logout from './components/Logout';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<HomePage />} /> 
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/room" element={<RoomList />} />
              <Route path="/rezervation" element={<Rezervation />} />
              <Route path="/roomfilter" element={<RoomFilter />} />
              <Route path="/logout" element={<Logout />} />
    

          
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>TBULAN ©2023 </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
