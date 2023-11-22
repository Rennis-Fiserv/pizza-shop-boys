import { useState, useEffect } from 'react';
import './PizzaShopStatisticsPage.css';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

const PizzaShopStatisticsPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the specified API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/customer-orders');
        const data = await response.json();
        setOrders(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const uniqueZipCodes = [...new Set(orders.map(order => order.zip))];
  const uniqueOrderPlacedDates = [...new Set(orders.map(order => order.orderPlacedTime[0]))];

  const chartData = uniqueZipCodes.map(zipCode => {
    return {
      zipCode: zipCode,
      data: uniqueOrderPlacedDates.map(date => {
        const ordersForDateAndZip = orders.filter(
          order => order.zip === zipCode && order.orderPlacedTime[0] === date
        );
        return {
          date: date,
          value: ordersForDateAndZip.length,
        };
      }),
    };
  });

  // Create data for the PieChart
  const pieChartData = uniqueZipCodes.map(zipCode => {
    const totalOrdersForZip = uniqueOrderPlacedDates.reduce((total, date) => {
      const ordersForDateAndZip = orders.filter(
        order => order.zip === zipCode && order.orderPlacedTime[0] === date
      );
      return total + ordersForDateAndZip.length;
    }, 0);

    return {
      zipCode: zipCode,
      value: totalOrdersForZip,
    };
  });

  const keyToLabel = uniqueZipCodes.reduce((acc, zipCode) => {
    acc[zipCode] = `Orders from ${zipCode}`;
    return acc;
  }, {});

  const colors = {
    55501: 'lightgreen',
    55502: 'yellow',
    55503: 'lightblue',
  };

  const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none', // To stack 0 on top of others
  };

  const customize = {
    height: 300,
    legend: { hidden: true },
    margin: { top: 5 },
    stackingOrder: 'descending',
  };

  return (
    <>
      <h1>Pizza Shop Statistics Page 🙈🐷</h1>
      <LineChart
        xAxis={[
          {
            dataKey: 'date',
            label:'year',
            valueFormatter: (v) => v.toString(),
          },
        ]}
        series={uniqueZipCodes.map(zipCode => ({
          dataKey: zipCode.toString(), // Convert the zip code to a string
          label: keyToLabel[zipCode],
          color: colors[zipCode],
          showMark: false,
          ...stackStrategy,
        }))}
        dataset={chartData.reduce((acc, item) => {
          item.data.forEach(subItem => {
            const existingItem = acc.find(entry => entry.date === subItem.date);
            if (existingItem) {
              existingItem[item.zipCode] = subItem.value;
            } else {
              acc.push({
                date: subItem.date,
                [item.zipCode]: subItem.value,
              });
            }
          });
          return acc;
        }, [])}
        {...customize}
      />

      {/* PieChart */}
      <PieChart
        series={[
          {
            data: pieChartData,
            label: 'zipCode',
            color: Object.values(colors),
          },
        ]}
        {...customize}
      />

      <div>{chartData.map(item => (
          <div key={item.zipCode}>
            <h2>Orders for {item.zipCode}:</h2>
            <ul>
                {item.data.map(subItem => (
                  <li key={subItem.date}>
                    {subItem.date}: {subItem.value} orders ({Array.isArray(subItem.orderNumbers) ? subItem.orderNumbers.join(', ') : ''})
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default PizzaShopStatisticsPage;