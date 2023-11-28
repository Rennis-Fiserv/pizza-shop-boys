import { Outlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./MangerPage.css";

export default function ManagerPage() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Button
        variant="contained"
        size="large"
        color="inherit"
        className="top"
        onClick={() => navigate("orders")}
      >
        Start an Order
      </Button>
      <Button
        variant="contained"
        size="large"
        color="inherit"
        className="top"
        onClick={() => navigate("employee-management")}
      >
        Employee Management
      </Button>
      <Button
        variant="contained"
        size="large"
        color="inherit"
        className="top"
        onClick={() => navigate("shop-metrics")}
      >
        Pizza Shop Statistics
      </Button>
      <Outlet />
    </div>
  );
}
