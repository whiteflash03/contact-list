import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { styled } from "@mui/system";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";

const StyledText = styled(TextField)(() => ({
  margin: "10px 0",
}));

const ColorButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: blueGrey[800],
  "&:hover": {
    backgroundColor: blueGrey[500],
  },
}));

const validationSchema = yup.object({
  userName: yup.string("Enter your userName").required("Username is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const SignIn = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.userName === "foo" && values.password === "bar") {
        alert("Success");
        setLoggedIn(true);
        window.localStorage.setItem("Token", isLoggedIn);
        navigate("/");
      } else {
        alert("username is foo & password is bar 😉😜");
      }
    },
  });

  return (
    <Box
      sx={{
        margin: "100px auto",
        padding: "0 100px",
        height: "auto",
        width: "40%",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        Sign In
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <StyledText
          fullWidth
          id="userName"
          name="userName"
          label="Username"
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <StyledText
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <ColorButton variant="contained" fullWidth type="submit">
          Submit
        </ColorButton>
      </form>
    </Box>
  );
};

export default SignIn;
