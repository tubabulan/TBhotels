import React, { useState } from 'react';
import { Input, Button, Typography, Form, message } from 'antd';
import { UserOutlined, LockOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      message.error('Şifreler eşleşmiyor!');
      return;
    }

    // Kullanıcı bilgilerini localStorage'a kaydet
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));

    setRegistered(true);
    message.success('Başarıyla kayıt oldunuz!');

    // Kayıt işlemi başarılı olduğunda login sayfasına yönlendir
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  const handleLogin = () => {
    // Kayıtlı kullanıcı bilgilerini localStorage'dan al
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.username === username && parsedUser.password === password) {
        message.success('Başarıyla giriş yaptınız!');
       
      } else {
        message.error('Kullanıcı adı veya şifre hatalı!');
      }
    } else {
      message.error('Kayıtlı kullanıcı bulunamadı!');
    }
  };

  if (registered) {
    return (
      <div style={{ width: '400px', margin: 'auto', marginTop: '50px', textAlign: 'center' }}>
        <Title level={2}>
          <CheckCircleOutlined style={{ color: 'green', fontSize: '24px', marginRight: '10px' }} />
          Kayıt Başarılı
        </Title>
        <p>Lütfen giriş yapın.</p>
      </div>
    );
  }

  return (
    <div style={{ width: '400px', margin: 'auto', marginTop: '50px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '30px', color: '#1890ff' }}>Kayıt Ol</Title>
      <Form
        name="register-form"
        initialValues={{ remember: true }}
        onFinish={handleRegister}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Kullanıcı adı zorunludur' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Kullanıcı Adı" onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Şifre zorunludur' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: 'Şifre tekrarı zorunludur' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Şifreyi Tekrar Girin" onChange={(e) => setConfirmPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block style={{ background: '#1890ff', borderColor: '#1890ff' }}>
            Kayıt Ol
          </Button>
        </Form.Item>
      </Form>
      
    </div>
  );
};

export default RegisterForm;
