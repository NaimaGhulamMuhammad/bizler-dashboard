import { Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
  const {Title} = Typography
  return (
  <>
  <Row gutter={16} justify='space-between' align='center'>
        <Col>
          <Title level={2}>Dashboard Home</Title>
        </Col>
        <Divider />
      </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Blogs" bordered={false}>
          <Link to="/blogs">Goto Blogs</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Business Partners" bordered={false}>
          <Link to="/partners">Business Partners</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="packages" bordered={false}>
          <Link to="/packages">Goto packages</Link>
        </Card>
      </Col>
      <Divider />
      <Col span={8}>
        <Card title="Portfolios" bordered={false}>
          <Link to="/portfolios">Goto Portfolios</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Services" bordered={false}>
          <Link to="/services">Goto Services</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="consultation" bordered={false}>
          <Link to="/consulation">View All Consulation Messages</Link>
        </Card>
      </Col>
      <Divider />
      <Col span={8}>
        <Card title="Reviews" bordered={false}>
          <Link to="/reviews">View All Clients</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Manage profile" bordered={false}>
          <Link to="/profile">View All Clients</Link>
        </Card>
      </Col>
    </Row>
</> 
  );
};
export default Home;
