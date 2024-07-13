import React, { useState } from 'react';
import { Card, Button, Input } from 'antd';

const Room = ({ room, onPriceChange }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [newPrice, setNewPrice] = useState(room.price);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
  };

  const handlePriceInputChange = (e) => {
    setNewPrice(Number(e.target.value));
  };

  const handlePriceUpdate = () => {
    onPriceChange(room.id, newPrice);
  };

  return (
    <Card style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '50%', marginRight: 20 }}>
          <img
            alt="room"
            src={room.images[currentImageIndex]}
            style={{ width: '100%', height: 400, objectFit: 'cover' }}
            onClick={handleImageClick}
          />
        </div>
        <div style={{ flex: '50%' }}>
          <h2 style={{ fontSize: '1.6em', marginBottom: 10 }}>{room.name}</h2>
          <ul style={{ fontSize: '1.3em', listStyleType: 'none', paddingLeft: 0 }}>
            {room.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: 5 }}>{feature}</li>
            ))}
          </ul>
          <div style={{ marginTop: 10 }}>
            <p style={{ fontSize: '1.4em', marginRight: 10 }}>Fiyat: ${room.price} / gece</p>
            <Input type="number" value={newPrice} onChange={handlePriceInputChange} style={{ width: 100, marginRight: 10 }} />
            <Button onClick={handlePriceUpdate} type="primary">Güncelle</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Room;
