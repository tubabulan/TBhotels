import React, { useState } from 'react';
import { Input, Button, Typography, Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Simüle edilmiş başarılı giriş kontrolü
    // Örneğin, burada gerçek bir kimlik doğrulama işlemi yapılabilir
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === values.username && storedUser.password === values.password) {
      message.success('Başarıyla giriş yaptınız!');
      setIsLoggedIn(true);
      navigate('/logout', { state: { username: values.username } });
    } else {
      message.error('Kullanıcı adı veya şifre hatalı! Lütfen kayıt olun');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  return (
    <div style={{ width: '400px', margin: 'auto', marginTop: '50px' }}>
      {isLoggedIn ? (
        <div>
          <Title level={2}>Hoş Geldiniz!</Title>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button type="primary" onClick={handleLogout}>
              Çıkış Yap
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Title level={2}>Giriş Yap</Title>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Kullanıcı adı zorunludur' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Kullanıcı Adı" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Şifre zorunludur' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Şifre" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Giriş Yap
              </Button>
            </Form.Item>

            <Form.Item>
              <Text>
                Henüz hesabınız yok mu? <Link to="/register">Kayıt olun</Link>
              </Text>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;