import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, CalendarOutlined, LoginOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Header = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
      <Menu.Item key="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link to="/">TBhotels</Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link to="/">
          <HomeOutlined /> Ana Sayfa
        </Link>
      </Menu.Item>
      <Menu.Item key="room">
        <Link to="/room">
          <CalendarOutlined /> Odalar
        </Link>
      </Menu.Item>
      <SubMenu key="booking" title="Rezervasyon Yap" icon={<CalendarOutlined />}>
        <Menu.Item key="booking1">
          <Link to="/rezervation">Yeni Rezervasyon</Link>
        </Menu.Item>
        <Menu.Item key="booking2">
          <Link to="/mybookings">Rezervasyonlarım</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="login" style={{ float: 'right' }}>
        <Link to="/login">
          <LoginOutlined /> Giriş Yap
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
