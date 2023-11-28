import { useForm } from "react-hook-form";
import fetchEmployee from "../../util/requests/fetchEmployee";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import "./LoginForm.css";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export default function LoginForm() {
  const { user, loginUser, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const outerTheme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function loginFormHandler(data) {
    const response = await fetchEmployee(data["id"]);
    loginUser(response);
    if (response["employeeRole"] == "E") navigate("/employee");
    if (response["employeeRole"] == "M") navigate("/manager");
  }
  return (
    <form className="logform" onSubmit={handleSubmit(loginFormHandler)}>
      <div className="btext">{"Enter Employee ID:"}</div>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField
          label="Employee ID"
          type="number"
          {...register("id", { required: true })}
        />
      </ThemeProvider>
      <div className="space"></div>
      <Button className="hey" type="submit">Enter</Button>
    </form>
  );
}
