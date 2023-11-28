import { Outlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";
import './MangerPage.css'

export default function ManagerPage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Button
        variant="contained"
        size="large"
        color="inherit"
        onClick={() => navigate("orders")}
      >
        Start an Order
      </Button>
      <Button
        variant="contained"
        size="large"
        color="inherit"
        onClick={() => navigate("employee-management")}
      >
        Employee Managment
      </Button>
      <Button
        variant="contained"
        size="large"
        color="inherit"
        onClick={() => navigate("shop-metrics")}
      >
        Pizza Shop Statistics
      </Button>
      <Outlet />
    </Box>
  );
}
