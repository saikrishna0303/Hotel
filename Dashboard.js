import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const [data, setData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Check In",
        data: [23451, 20441, 25, 29, 31, 1, 2],
        borderColor: "#333",
        backgroundColor: "rgba(51, 51, 51, 0.2)",
      },
      {
        label: "Check Out",
        data: [20441, 25, 29, 31, 1, 2, 100],
        borderColor: "#ccc",
        backgroundColor: "rgba(204, 204, 204, 0.2)",
      },
    ],
  });

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Hotel Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Reservation Stats</h2>
          <Line data={data} options={{}} />
        </Col>
        <Col md={6}>
          <h2>Available Rooms Today</h2>
          <p>683</p>
          <h2>Sold Out Rooms Today</h2>
          <p>156</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
  
