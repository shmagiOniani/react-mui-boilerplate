import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { outlinedInputClasses } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

import { useRouter } from "../../routes/hooks";

import { palette, primary } from "../../theme/palette";

import Iconify from "../../components/iconify";

function OrgLoginForm() {
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const inputStyles = {
    "& .MuiInputLabel-root": {
      color: theme.palette.grey[600],
      [`&.${outlinedInputClasses.focused} `]: {
        color: alpha(theme.palette.grey[600], 0.9),
      },
      top: "15px",
      left: "38px",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "14px",
      borderRadius: "100px",
      minWidth: '342px',
      ".css-bipf1u-MuiInputBase-input-MuiOutlinedInput-input": {
        padding: "30px 0 9px 10px",
      },
      ".css-1yaqbwe-MuiInputBase-input-MuiOutlinedInput-input": {
        padding: "30px 0 9px 10px",
      },
      ".css-14lo706": {
        display: "none",
      },
    },
  };

  const validationSchema = Yup.object({
    otp: Yup.string().required("ორგანიზაცია სავალდებულოა"),
    email: Yup.string().required("ელ.ფოსტის ველი სავალდებულოა"),
    password: Yup.string().required("პაროლი სავალდებულოა"),
  });

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Box>
      <Formik
        initialValues={{
          otp: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            handleClick();
            setSubmitting(false);
          }, 900);
        }}
      >
        {({
          isSubmitting,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Field
                id="otp"
                name="otp"
                label="ორგანიზაცია"
                as={TextField}
                onChange={handleChange}
                error={touched?.otp && Boolean(errors?.otp)}
                helperText={touched?.otp && errors?.otp}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="mdi:company" />
                    </InputAdornment>
                  ),
                }}
                sx={inputStyles}
              />
              <Field
                id="email"
                name="email"
                type="email"
                label="მომხმარებელი"
                as={TextField}
                onChange={handleChange}
                error={touched?.email && Boolean(errors?.email)}
                helperText={touched?.email && errors?.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="fa:user" />
                    </InputAdornment>
                  ),
                }}
                sx={inputStyles}
              />

              <Field
                id="password"
                name="password"
                label="პაროლი"
                as={TextField}
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                error={touched?.password && Boolean(errors?.password)}
                helperText={touched?.password && errors?.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        <Iconify
                          icon={
                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="arcticons:password" />
                    </InputAdornment>
                  ),
                }}
                sx={inputStyles}
              />
            </Stack>

            {/* <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
            <Link variant="subtitle2" underline="hover">
              Forgot password?
            </Link>
          </Stack> */}

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              loading={isSubmitting}
              sx={{
                mt: 3,
                color: palette().text.primary,
                borderRadius: "100px",

                "&:hover": {
                  backgroundColor: primary.main,
                },
              }}
            >
              ავტორიზაცია
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default OrgLoginForm;
