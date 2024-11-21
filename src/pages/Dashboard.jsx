import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  // Sample data for the charts
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#4bc0c0',
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales by Product',
        data: [12, 19, 3, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4bc0c0'],
      },
    ],
  };

  return (
    <div className="dashboard">
      

      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Sales Over Time</h3>
          <Line data={lineChartData} />
        </div>
        <div className="chart-container">
          <h3>Sales by Product</h3>
          <Bar data={barChartData} />
        </div>
      </div>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Sales</h3>
          <p>$12,345</p>
        </div>
        <div className="card">
          <h3>New Customers</h3>
          <p>34666</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
