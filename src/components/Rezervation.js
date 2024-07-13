import React, { useState } from "react";
import { DatePicker, Select, Button, Typography } from "antd";

const { Text } = Typography;
const { Option } = Select;

const odalar = [
  { id: 1, kapasite: 1 },
  { id: 2, kapasite: 1 },
  { id: 3, kapasite: 1 },
  { id: 4, kapasite: 2 },
  { id: 5, kapasite: 2 },
  { id: 6, kapasite: 2 },
  { id: 7, kapasite: 3 },
  { id: 8, kapasite: 4 },
  { id: 9, kapasite: 5 },
  { id: 10, kapasite: 6 },
];

const rezervasyonlar = [
  { odaId: 1, baslangicTarihi: new Date("2023-06-01"), bitisTarihi: new Date("2023-06-10") },
  { odaId: 2, baslangicTarihi: new Date("2023-06-05"), bitisTarihi: new Date("2023-06-15") },
  { odaId: 3, baslangicTarihi: new Date("2023-07-10"), bitisTarihi: new Date("2023-07-20") },
  { odaId: 4, baslangicTarihi: new Date("2023-07-15"), bitisTarihi: new Date("2023-07-25") },
  { odaId: 5, baslangicTarihi: new Date("2023-09-20"), bitisTarihi: new Date("2023-09-30") },
  { odaId: 6, baslangicTarihi: new Date("2023-06-25"), bitisTarihi: new Date("2023-06-05") },
  { odaId: 7, baslangicTarihi: new Date("2023-06-30"), bitisTarihi: new Date("2023-06-10") },
  { odaId: 8, baslangicTarihi: new Date("2023-06-05"), bitisTarihi: new Date("2023-06-20") },
  { odaId: 9, baslangicTarihi: new Date("2023-08-05"), bitisTarihi: new Date("2023-08-25") },
  { odaId: 10, baslangicTarihi: new Date("2023-09-10"), bitisTarihi: new Date("2023-09-30") },
];


const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateRandomDates = (count, start, end) => {
  const dates = [];
  for (let i = 0; i < count; i++) {
    const startDate = randomDate(start, end);
    const endDate = new Date(startDate.getTime() + Math.random() * 7 * 24 * 60 * 60 * 1000); 
    dates.push({ odaId: i + 1, baslangicTarihi: startDate, bitisTarihi: endDate });
  }
  return dates;
};

const Reservation = () => {
  const [misafirSayisi, setMisafirSayisi] = useState(1);
  const [baslangicTarihi, setBaslangicTarihi] = useState(null);
  const [bitisTarihi, setBitisTarihi] = useState(null);
  const [uygunOdalar, setUygunOdalar] = useState([]);
  const [hata, setHata] = useState("");

  // Generate random reservation dates
  const generatedRezervasyonlar = generateRandomDates(10, new Date("2023-06-01"), new Date("2023-12-31"));

  const [rezervasyonlar, setRezervasyonlar] = useState(generatedRezervasyonlar);

  const baslangicTarihiDegistir = (tarih) => {
    setBaslangicTarihi(tarih);
    setHata("");
  };

  const bitisTarihiDegistir = (tarih) => {
    setBitisTarihi(tarih);
    setHata("");
  };

  const misafirSayisiDegistir = (value) => {
    setMisafirSayisi(value);
  };

  const formuGonder = (event) => {
    event.preventDefault();
    if (baslangicTarihi && bitisTarihi) {
      const filteredOdalar = odalar.filter((oda) => {
        if (oda.kapasite < misafirSayisi) return false;

        const uygunMu = rezervasyonlar.filter((rezervasyon) => {
          return (
            oda.id === rezervasyon.odaId &&
            !(bitisTarihi <= rezervasyon.baslangicTarihi || baslangicTarihi >= rezervasyon.bitisTarihi)
          );
        });

        return uygunMu.length === 0;
      });

      const limitedOdalar = filteredOdalar.slice(0, Math.min(filteredOdalar.length, 4)); 

      setUygunOdalar(limitedOdalar);
      if (limitedOdalar.length < 2) {
        setHata("Belirtilen tarihlerde yeterli sayıda uygun oda bulunmamaktadır.");
      } else {
        setHata("");
      }
    } else {
      setHata("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        Oda Rezervasyonu
      </Typography.Title>
      <br />
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Text style={{ marginRight: "10px" }}>Kaç Kişilik Oda:</Text>
        <Select
          value={misafirSayisi}
          onChange={misafirSayisiDegistir}
          style={{ width: 120 }}
        >
          {odalar.map((oda) => (
            <Option key={oda.id} value={oda.kapasite}>
              {oda.kapasite} Kişilik
            </Option>
          ))}
        </Select>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ textAlign: "center", marginRight: "10px" }}>
          <Text>Giriş Tarihiniz:</Text>
          <br />
          <DatePicker
            value={baslangicTarihi}
            onChange={baslangicTarihiDegistir}
            placeholder="Giriş Tarihi"
            format="DD/MM/YYYY"
            style={{ width: "180px", marginRight: "10px" }}
          />
        </div>
        <div style={{ textAlign: "center", marginLeft: "10px" }}>
          <Text>Çıkış Tarihiniz:</Text>
          <br />
          <DatePicker
            value={bitisTarihi}
            onChange={bitisTarihiDegistir}
            placeholder="Çıkış Tarihi"
            format="DD/MM/YYYY"
            style={{ width: "180px", marginLeft: "10px" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={formuGonder}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ padding: "10px 20px", fontSize: "1.2em", cursor: "pointer" }}
          >
            Uygun Odaları Göster
          </Button>
        </form>
      </div>
      {hata && <Text type="danger" style={{ textAlign: "center", marginTop: "10px" }}>{hata}</Text>}
      {uygunOdalar.length > 0 && (
        <div>
          <Typography.Title level={3}>Uygun Odalar:</Typography.Title>
          <ul>
            {uygunOdalar.map((oda) => (
              <li key={oda.id}>
                Oda Numarası: {oda.id}, Kapasite: {oda.kapasite} Kişi
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reservation;
