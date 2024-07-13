import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Burada kayıt işlemleri gerçekleştirilebilir, API çağrıları yapılabilir vb.
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ width: '400px', margin: 'auto', marginTop: '50px' }}>
      <Title level={2}>Kayıt Ol</Title>
      <Form
        name="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Kullanıcı Adı"
          name="username"
          rules={[{ required: true, message: 'Kullanıcı adı zorunludur' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-posta"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Geçerli bir e-posta adresi giriniz' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Şifre"
          name="password"
          rules={[{ required: true, message: 'Şifre zorunludur' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kayıt Ol
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
