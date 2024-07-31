import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { palette, primary } from 'src/theme/palette';

import Iconify from 'src/components/iconify';

function CustomerRegistrationForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      fontSize: '14px',
      borderRadius: '100px',
      minWidth: '342px',

      '.css-bipf1u-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '30px 0 9px 10px',
      },
      '.css-1yaqbwe-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '30px 0 9px 10px',
      },
    },
  };

  const validationSchema = Yup.object({
    personalId: Yup.string()
      .matches(/^\d+$/, 'პირადი ნომერი უნდა შედგებოდეს მხოლოდ ციფრებისგან')
      .test(
        'len',
        'გთხოვთ გადაამოწმოთ და შეიყვანოთ 11-ნიშნა პირადი ნომერი',
        (val) => val && val.length === 11
      )
      .required('პირადი ნომრის ველი სავალდებულოა'),
    firstName: Yup.string()
      .matches(/^[A-Za-z\u10A0-\u10FF]*$/, 'ველი უნდა შეიცავდეს მხოლოდ ტექსტურ სიმბოლოებს')
      .required('სახელის ველი სავალდებულოა'),
    lastName: Yup.string()
      .matches(/^[A-Za-z\u10A0-\u10FF]*$/, 'ველი უნდა შეიცავდეს მხოლოდ ტექსტურ სიმბოლოებს')
      .required('გვარის ველი სავალდებულოა'),
    email: Yup.string()
      .email('ელ.ფოსტა უნდა იყოს სწორი ფორმატის')
      .required('ელ.ფოსტის ველი სავალდებულოა'),
    mobile: Yup.string()
      .matches(/^\d+$/, 'ტელეფონის ნომერი უნდა შედგებოდეს მხოლოდ ციფრებისგან')
      .test(
        'len',
        'გთხოვთ გადაამოწმოთ ტელეფონის ნომრის სისწორე, ფორმატი არასწორია',
        (val) => val && val.length === 10
      )
      .required('ტელეფონის ნომრის ველი სავალდებულოა'),
    password: Yup.string()
      .matches(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
        'პაროლი უნდა შეიცავდეს მინიმუმ ერთ დიდ სიმბოლოს, ერთ პატარა სიმბოლოს, ერთ ციფრს და სპეციალურ სიმბოლოს (მაგ. #,%)'
      )
      .test(
        'len',
        'პაროლი უნდა შედგებოდეს სულ მცირე 8 სიმბოლოსგან',
        (val) => val && val.length >= 8
      )
      .required('პაროლი სავალდებულოა'),
  });

  const handleClick = () => {
    router.push('/');
  };

  return (
    <Box>
      <Formik
        initialValues={{
          personalId: '',
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          password: '',
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
        {({ isSubmitting, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="personalId"
                label="პირადი ნომერი"
                onChange={handleChange}
                error={touched?.personalId && Boolean(errors?.personalId)}
                helperText={touched?.personalId && errors?.personalId}
                sx={inputStyles}
              />
              <TextField
                name="firstName"
                label="სახელი"
                onChange={handleChange}
                error={touched?.firstName && Boolean(errors?.firstName)}
                helperText={touched?.firstName && errors?.firstName}
                sx={inputStyles}
              />
              <TextField
                name="lastName"
                label="გვარი"
                onChange={handleChange}
                error={touched?.lastName && Boolean(errors?.lastName)}
                helperText={touched?.lastName && errors?.lastName}
                sx={inputStyles}
              />
              <TextField
                name="email"
                label="ელ. ფოსტა"
                onChange={handleChange}
                error={touched?.email && Boolean(errors?.email)}
                helperText={touched?.email && errors?.email}
                sx={inputStyles}
              />
              <TextField
                name="mobile"
                label="ტელ. ნომერი"
                onChange={handleChange}
                error={touched?.mobile && Boolean(errors?.mobile)}
                helperText={touched?.mobile && errors?.mobile}
                sx={inputStyles}
              />{' '}
              <TextField
                name="password"
                label="პაროლი"
                type={showPassword ? 'text' : 'password'}
                onChange={handleChange}
                error={touched?.password && Boolean(errors?.password)}
                helperText={touched?.password && errors?.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={inputStyles}
              />
            </Stack>

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
                borderRadius: '100px',

                '&:hover': {
                  backgroundColor: primary.main,
                },
              }}
            >
              რეგისტრაცია
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default CustomerRegistrationForm;
