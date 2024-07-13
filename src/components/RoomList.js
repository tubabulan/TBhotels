import React, { useState } from 'react';
import { Row, Col, Button, Typography } from 'antd';
import Room from './Room';
import RoomFilter from './RoomFilter';

const { Title } = Typography;

const roomsData = [
  {
    id: 1,
    name: 'Standart Oda',
    features: ['1 Büyük Yatak', 'Ücretsiz WiFi', 'Deniz Manzarası', 'Şehir Manzarası', 'Mini Bar', 'El duşu', 'Kahve makinesi', 'Saç kurutma makinesi', 'Ütü', 'Ütü/ütü masası', 'Banyo malzemeleri', 'Bornoz', 'mini bar', 'Radyo çalar saat'],
    price: 100,
    type: 'single',
    images: ['/assets/tekkişilik/hat1.jpg', '/assets/tekkişilik/hat2.jpg', '/assets/tekkişilik/hat4.jpg'],
  },
  {
    id: 2,
    name: 'Standart Oda',
    features: ['1 Büyük Yatak', 'Deniz manzaralı', 'Ücretsiz WiFi', 'Şehir Manzarası', 'Mini Bar', 'El duşu', 'Kahve makinesi', 'Saç kurutma makinesi', 'Ütü', 'Ütü/ütü masası', 'Banyo malzemeleri', 'Bornoz', 'mini bar', 'Radyo çalar saat'],
    price: 100,
    type: 'single',
    images: ['/assets/tekkişilik/1.jpg', '/assets/tekkişilik/2.jpg', '/assets/tekkişilik/3.jpg', '/assets/tekkişilik/4.jpg', '/assets/tekkişilik/5.jpg'],
  },
  {
    id: 3,
    name: 'Çift Kişilik Oda',
    features: ['2 Büyük Yatak', 'Ücretsiz WiFi', 'Şehir Manzarası', 'Mini Bar', 'El duşu', 'Kahve makinesi', 'Saç kurutma makinesi', 'Ütü', 'Ütü/ütü masası', 'Banyo malzemeleri', 'Bornoz', 'mini bar', 'Radyo çalar saat'],
    price: 200,
    type: 'double',
    images: ['/assets/çiftkişilik/haç.1.jpg', '/assets/çiftkişilik/haç.2.jpg', '/assets/çiftkişilik/haç.3.jpg', '/assets/çiftkişilik/haç.4.jpg', '/assets/çiftkişilik/haç.5.jpg'],
  },
  {
    id: 4,
    name: 'Çift Kişilik Oda',
    features: ['2 Büyük Yatak', 'Deniz manzaralı', 'Ücretsiz WiFi', 'Şehir Manzarası',  'Mini Bar', 'Kahve makinesi', 'Saç kurutma makinesi', 'Ütü', 'Ütü/ütü masası', 'Banyo malzemeleri', 'Bornoz', 'mini bar', 'Radyo çalar saat'],
    price: 200,
    type: 'double',
    images: ['/assets/çiftkişilik/21.jpg', '/assets/çiftkişilik/22.jpg', '/assets/çiftkişilik/23.jpg', '/assets/çiftkişilik/24.jpg', '/assets/çiftkişilik/25.jpg', '/assets/çiftkişilik/26.jpg'],
  },
  {
    id: 5,
    name: 'Aile Odası',
    features: ['6 kişilik', '1 çift kişilik Yatak', '2 tek kişilik Yatak', 'Ücretsiz WiFi', 'Şehir Manzarası', 'Mini Bar', 'El duşu', 'Kahve makinesi', 'Saç kurutma makinesi', 'Ütü', 'Ütü/ütü masası', 'Banyo malzemeleri', 'Bornoz', 'mini bar', 'Radyo çalar saat'],
    price: 300,
    type: 'family',
    images: ['/assets/family/ha.1.avif', '/assets/çiftkişilik/haç.5.jpg', '/assets/family/ha2.avif'],
  },
  {
    id: 6,
    name: 'Aile Odası',
    features: ['6 kişilik', '1 çift kişilik Yatak', '2 tek kişilik Yatak', 'Ücretsiz WiFi', 'Şehir Manzarası', 'Mini Bar', 'El duşu', 'Kahve makinesi', 'Saç kurutma makinesi', 'Ütü', 'Ütü/ütü masası', 'Banyo malzemeleri', 'Bornoz', 'mini bar', 'Radyo çalar saat' ],
    price: 300,
    type: 'family',
    images: ['/assets/family/11.jpg', '/assets/family/12.jpg', '/assets/family/13.jpg', '/assets/family/14.jpg', '/assets/family/15.jpg', '/assets/family/16.jpg', '/assets/family/17.jpg'],
  },
];

const RoomList = () => {
  const [filteredRooms, setFilteredRooms] = useState(roomsData);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilter = (filters) => {
    const filtered = roomsData.filter((room) => {
      const capacity = parseInt(filters.capacity);
  
      if (capacity === 1 && room.type !== 'single') {
        return false;
      }
      if (capacity === 2 && room.type === 'family') {
        return false;
      }
      if (capacity === 3 && room.type !== 'family') {
        return false;
      }
      if (capacity >= 4 && capacity <= 4 && room.type === 'single') {
        return false;
      }
      if (capacity >= 5 && room.type !== 'family') {
        return false;
      }
  
      return true;
    });
  
    setFilteredRooms(filtered);
  };
  

  const handlePriceChange = (id, newPrice) => {
    const updatedRooms = filteredRooms.map((room) =>
      room.id === id ? { ...room, price: newPrice } : room
    );
    setFilteredRooms(updatedRooms);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button type="primary" onClick={() => setShowFilters(!showFilters)}>
        Filtrele
      </Button>
      {showFilters && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <RoomFilter onFilter={handleFilter} />
        </div>
      )}
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {filteredRooms.map((room) => (
          <Col key={room.id} xs={24} sm={12} md={12} lg={12} xl={12}>
            <Room room={room} onPriceChange={handlePriceChange} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RoomList;
