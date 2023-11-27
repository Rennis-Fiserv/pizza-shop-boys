import { Outlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

export default function ManagerPage() {
  let theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
  });

  theme = createTheme(theme, {
    // Custom colors created with augmentColor go here
    palette: {
      salmon: theme.palette.augmentColor({
        color: {
          main: "#E9A18B",
        },
        name: "salmon",
      }),
    },
  });

  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          size="large"
          color="salmon"
          onClick={() => navigate("orders")}
          sx={{
            ":hover": {
              bgcolor: "lightpink", // theme.palette.primary.main
              color: "white",
            },
          }}
        >
          Start an Order
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="salmon"
          onClick={() => navigate("employee-management")}
          sx={{
            ":hover": {
              bgcolor: "lightpink", // theme.palette.primary.main
              color: "white",
            },
          }}
        >
          Employee Managment
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="salmon"
          onClick={() => navigate("shop-metrics")}
          sx={{
            ":hover": {
              bgcolor: "lightpink", // theme.palette.primary.main
              color: "white",
            },
          }}
        >
          Pizza Shop Statistics
        </Button>
        <Outlet />
      </ThemeProvider>
    </>
  );
}
