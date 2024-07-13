import React from 'react';
import { Button } from 'antd';

const LogoutPage = () => {
  const handleLogout = () => {
    
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    
    window.location.href = '/';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Çıkış Yap</h2>
      <p>Emin misiniz?</p>
      <Button type="primary" onClick={handleLogout}>
        Çıkış Yap
      </Button>
    </div>
  );
};

export default LogoutPage;
