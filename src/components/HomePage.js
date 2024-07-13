import React from "react";
import { Layout, Typography, Row, Col, Card, Button } from "antd";
import { WifiOutlined, SafetyOutlined, HomeOutlined } from "@ant-design/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const privileges = [
  {
    icon: <WifiOutlined />,
    title: "Wi-Fi",
    description: "Yüksek hızlı internet",
  },
  {
    icon: <SafetyOutlined />,
    title: "Yüksek Koruma",
    description: "Güvenliğiniz için",
  },
  {
    icon: <HomeOutlined />,
    title: "Oda Servisi",
    description: "24/7 oda servisi",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout>
      
      <Content style={{ padding: "0 50px", marginTop: "20px" }}>
      <div
  style={{
    position: "relative",
    textAlign: "center",
    marginBottom: "20px",
  }}
>
  <img
    src="assets/1.jpg"
    alt="Otel"
    style={{
      width: "100%",
      height: "auto",
      filter: "brightness(50%)",
      borderRadius: "8px", 
    }}
  />
 <div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    fontFamily: "'Copperplate', sans-serif", 
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  }}
>
  Özgürlüğünüzü
  <br/> Keşfedin
</div>

</div>

        <br/>
        <br/>
        <br/>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Title level={2} style={{ fontSize: "2.5rem" }}>
            Hakkımızda
          </Title>
          <br/>
          
          <Paragraph
            style={{
              textAlign: "left",
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.2rem",
            }}
          >
            Kızılbük Wellness Resort, termal havuzları, spa ve masaj alanları;
            Wellnesspark’taki beslenme, egzersiz ve detoks hizmetleri; orman
            içinde çocuklar için macera ve su parkları, her ihtiyacınızı
            kolaylıkla karşılayabileceğiniz çarşısı ile; size yılın her günü
            ayrıcalıklarla dolu, yenileyici ve sağlıklı bir tatil konsepti
            sunuyor. Marmaris'in en özel bölgelerinden biri olan İçmeler'de;
            havalimanına ve bölgenin popüler destinasyonlarına yakın konumuyla
            yakın çevresinde de keşiflerle dolu bir tatil imkanı veren Kızılbük
            Wellness Resort; sizi devre mülk sistemiyle evinizin samimiyetinde,
            yeni nesil bir tatil anlayışı ile buluşturuyor.
          </Paragraph>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          <Title level={2} style={{ textAlign: "center", fontSize: "2.5rem" }}>
            Ayrıcalıklarımız
          </Title>
          <Row gutter={[16, 16]}>
            {privileges.map((privilege) => (
              <Col span={8} key={privilege.title}>
                <Card bordered={false} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
                    {privilege.icon}
                  </div>
                  <Title level={4}>{privilege.title}</Title>
                  <Paragraph style={{ fontSize: "1.2rem" }}>
                    {privilege.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
          <br/>
          <br/>
          <br/>
          <br/>
          <Title
            level={2}
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginTop: "20px",
            }}
          >
            Konumumuz
          </Title>
          <br/>
          <br/>
          <iframe
            title="Harita"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093653!2d28.26568227159731!3d36.85043969383875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ecdf0316e8e287%3A0x7e1a3aa59c7cbe11!2sMarmaris%2C%20Mu%C4%9Fla%2C%20Turkey!5e0!3m2!1sen!2sus!4v1625909026696!5m2!1sen!2sus"            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <Row>
          <Col span={8}>
            <Title level={4}>İletişim</Title>
            <Paragraph style={{ fontSize: "1.2rem" }}>
              Adres: Marmaris/Muğla
            </Paragraph>
            <Paragraph style={{ fontSize: "1.2rem" }}>
              Telefon: +90 456 7890
            </Paragraph>
            <Paragraph style={{ fontSize: "1.2rem" }}>
              Email: tubabulan@hotel.com
            </Paragraph>
          </Col>
          <Col span={8}>
            <Title level={4}>Ayrıcalıklar</Title>
            {privileges.map((privilege) => (
              <Paragraph key={privilege.title} style={{ fontSize: "1.2rem" }}>
                {privilege.title}
              </Paragraph>
            ))}
          </Col>
          <Col span={8}>
            <Title level={4}>Harita</Title>
            <iframe
              title="Harita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093653!2d28.26568227159731!3d36.85043969383875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ecdf0316e8e287%3A0x7e1a3aa59c7cbe11!2sMarmaris%2C%20Mu%C4%9Fla%2C%20Turkey!5e0!3m2!1sen!2sus!4v1625909026696!5m2!1sen!2sus"              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default HomePage;
