import { useState, useEffect } from 'react';
import './PizzaShopStatisticsPage.css';
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
  const uniqueOrderPlacedDates = [...new Set(orders.map(order => order.orderPlacedTime[2]))];
  const uniqueEmployeeFKs = [...new Set(orders.map(order => order.employeeFk))];

  const zipChartData = uniqueZipCodes.map(zipCode => {
    return {
      zipCode: zipCode,
      data: uniqueOrderPlacedDates.map(date => {
        const ordersForDateAndZip = orders.filter(
          order => order.zip === zipCode && order.orderPlacedTime[2] === date
        );
        return {
          date: date,
          value: ordersForDateAndZip.length,
        };
      }),
    };
  });

  const employeeChartData = uniqueEmployeeFKs.map(employeeFk => {
    return {
      employeeFK: employeeFk,
      data: uniqueOrderPlacedDates.map(date => {
        const ordersForDateAndEmployee = orders.filter(
          order => order.employeeFk === employeeFk && order.orderPlacedTime[2] === date
        );
        return {
          date: date,
          value: ordersForDateAndEmployee.length,
        };
      }),
    };
  });

  const zipPieChartData = uniqueZipCodes.map(zipCode => {
    const totalOrdersForZip = uniqueOrderPlacedDates.reduce((total, date) => {
      const ordersForDateAndZip = orders.filter(
        order => order.zip === zipCode && order.orderPlacedTime[2] === date
      );
      return total + ordersForDateAndZip.length;
    }, 0);

    return {
      label: `Zip ${zipCode}`,
      zipCode: zipCode,
      value: totalOrdersForZip,
    };
  });

  const employeePieChartData = uniqueEmployeeFKs.map(employeeFk => {
    const totalOrdersForEmployee = uniqueOrderPlacedDates.reduce((total, date) => {
      const ordersForDateAndEmployee = orders.filter(
        order => order.employeeFk === employeeFk && order.orderPlacedTime[2] === date
      );
      return total + ordersForDateAndEmployee.length;
    }, 0);

    return {
      label: `Employee ${employeeFk}`,
      employeeFK: employeeFk,
      value: totalOrdersForEmployee,
    };
  });

  const colors = {
    55501: 'lightgreen',
    55502: 'yellow',
    55503: 'lightblue',
    // Add colors for employeeFKs if needed
  };

  const customize = {
    height: 300,
    margin: { top: 5 },
  };

  return (
    <>
      <h1>Pizza Shop Statistics Page 🙈🐷</h1>

      <div className="charts-container">
        {/* PieChart for Orders by ZipCode */}
        <div className="chart-section">
          <h2>Orders by Zip Code</h2>
          <PieChart
            series={[
              {
                data: zipPieChartData,
                colors: Object.values(colors),
              },
            ]}
            {...customize}
          />
          {zipChartData.map(item => (
            <div key={item.zipCode}>
              <h3>Orders for Zip {item.zipCode}:</h3>
              <ul>
                {item.data.map(subItem => (
                  <li key={subItem.date}>
                    {subItem.date + 'th'}: {subItem.value} orders
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PieChart for Orders by Employee */}
        <div className="chart-section">
          <h2>Orders by Employee</h2>
          <PieChart
            series={[
              {
                data: employeePieChartData,
                colors: Object.values(colors),
              },
            ]}
            {...customize}
          />
          {employeeChartData.map(item => (
            <div key={item.employeeFK}>
              <h3>Orders for Employee {item.employeeFK}:</h3>
              <ul>
                {item.data.map(subItem => (
                  <li key={subItem.date}>
                    {subItem.date + 'th'}: {subItem.value} orders
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PizzaShopStatisticsPage;