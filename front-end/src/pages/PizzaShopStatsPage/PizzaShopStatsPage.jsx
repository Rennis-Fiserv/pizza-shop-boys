import { useState, useEffect } from "react";
import "./PizzaShopStatsPage.css";
import { PieChart } from "@mui/x-charts/PieChart";

const PizzaShopStatsPage = () => {
  const [order, setOrder] = useState([]);
  const [orders, setOrders] = useState([]);
  const [ordersZip, setOrdersZip] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/api/customer-orders")
      .then((response) => response.json())
      .then((data) => {
        setOrder(data);
        setLoading(false);
      });

    fetch("http://localhost:8080/api/customer-orders/byEmployeeByDate")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
        setLoading(false);
      });

    fetch("http://localhost:8080/api/customer-orders/byZipByDate")
      .then((response) => response.json())
      .then((data) => {
        setOrdersZip(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Extract unique zip codes, order placed dates, and employeeFKs from orders
  const uniqueZipCodes = [...new Set(order.map((order) => order.zip))];
  const uniqueOrderPlacedDates = [
    ...new Set(order.map((order) => order.orderPlacedTime[2])),
  ];
  const uniqueEmployeeFKs = [
    ...new Set(order.map((order) => order.employeeFk)),
  ];

  // Prepare data for PieChart labels and values by Zip Code
  const zipPieChartData = uniqueZipCodes.map((zipCode) => {
    const totalOrdersForZip = uniqueOrderPlacedDates.reduce((total, date) => {
      const ordersForDateAndZip = order.filter(
        (order) => order.zip === zipCode &&
        order.orderPlacedTime &&
        order.orderPlacedTime[2] === date
      );
      return total + ordersForDateAndZip.length;
    }, 0);

    return {
      label: `Zip ${zipCode}`,
      zipCode: zipCode,
      value: totalOrdersForZip,
    };
  });

  // Prepare data for PieChart labels and values by EmployeeFK
  const employeePieChartData = uniqueEmployeeFKs.map((employeeFk) => {
    const totalOrdersForEmployee = uniqueOrderPlacedDates.reduce(
      (total, date) => {
        const ordersForDateAndEmployee = order.filter(
          (order) =>
          order.employeeFk === employeeFk &&
          order.orderPlacedTime &&
          order.orderPlacedTime[2] === date
        );
        return total + ordersForDateAndEmployee.length;
      },
      0
    );

    return {
      label: `Employee ${employeeFk}`,
      employeeFK: employeeFk,
      value: totalOrdersForEmployee,
    };
  });

  // Define colors for PieChart segments based on Zip Codes
  const colors = {
    55501: "lightgreen",
    55502: "yellow",
    55503: "lightblue",
    // Add colors for employeeFKs if needed
  };

  // Customize PieChart appearance
  const customize = {
    height: 300,
    margin: { top: 5 },
  };

  return (
    <>
      <h1 className="textA">Pizza Shop Statistics Page 🙈🐷</h1>

      <div className="charts-container">
        {/* PieChart for Orders by ZipCode */}
        <div className="chart-section">
          <h2 className="textA">Orders by Zip Code</h2>
          <PieChart
            series={[
              {
                data: zipPieChartData,
                colors: Object.values(colors),
              },
            ]}
            {...customize}
          />

          <div>
            <h3 className="textA">Zips</h3>
            <table>
              <thead>
                <tr>
                  <td width="20%">OrderId</td>
                  <td width="20%">Zip</td>
                  <td width="20%">Date</td>
                  <td width="20%">Week</td>
                </tr>
              </thead>
              <tbody>
                {ordersZip.map((zipInfo, index) => (
                  <tr key={index}>
                    <td>{zipInfo[0]}</td>
                    <td>{zipInfo[1]}</td>
                    <td>{zipInfo[2].join("-").substring(0, 9)}</td>
                    <td>{zipInfo[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div></div>
          </div>
        </div>

        {/* PieChart for Orders by Employee */}
        <div className="chart-section">
          <h2 className="textA">Orders by Employee</h2>
          <PieChart
            series={[
              {
                data: employeePieChartData,
                colors: Object.values(colors),
              },
            ]}
            {...customize}
          />
          <>
            <div>
              <h3 className="textA">Employees</h3>
              <table>
                <thead>
                  <tr>
                    <td width="20%">OrderId</td>
                    <td width="20%">Employee ID</td>
                    <td width="20%">Date</td>
                    <td width="20%">Week</td>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((orderInfo, index) => (
                    <tr key={index}>
                      <td>{orderInfo[0]}</td>
                      <td>{orderInfo[1]}</td>
                      <td>{orderInfo[2].join("-").substring(0, 9)}</td>
                      <td>{orderInfo[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div></div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default PizzaShopStatsPage;
