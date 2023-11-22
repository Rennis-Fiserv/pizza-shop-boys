import { useState } from 'react';
import './PizzaShopStatisticsPage.css';
import { BarChart } from '@mui/x-charts/BarChart'

const PizzaShopStatisticsPage = () => {

  const [orders, setOrders] = useState([]);

  return (
    <>
    <h1>Pizza Shop Statistics Page 🙈🐷</h1>
    <BarChart xAxis={[
        {
          id: 'barCategories',
          data: ['bar A', 'bar B', 'bar C'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3],
        },
      ]}
      width={500}
      height={300}/>
    </>
  )
}

export default PizzaShopStatisticsPage;