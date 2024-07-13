import React, { useState } from 'react';
import { Form, InputNumber,  Button } from 'antd';

const RoomFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    capacity: '',
    seaView: false,
    balcony: false,
  });

  const handleChange = (changedValues) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...changedValues,
    }));
  };

  const handleSubmit = () => {
    onFilter(filters);
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      style={{ marginBottom: '20px' }}
      initialValues={{ capacity: filters.capacity, seaView: filters.seaView, balcony: filters.balcony }}
      onValuesChange={(_, values) => handleChange(values)}
    >
      <Form.Item label="Kapasite">
        <InputNumber
          name="capacity"
          value={filters.capacity}
          onChange={(value) => handleChange({ capacity: value })}
          style={{ width: '5%' }}
        />
      </Form.Item>
    
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Görüntüle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoomFilter;
