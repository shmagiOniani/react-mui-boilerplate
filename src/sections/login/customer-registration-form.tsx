import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

// import { useRouter } from '../../routes/hooks';

import { palette, primary } from '../../theme/palette';

import Iconify from '../../components/iconify';
import { registerCust } from '../../api/auth';
import { IRegisterCustReqDTO } from '../../api/auth/models';

function CustomerRegistrationForm() {
  // const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      fontSize: '14px',
      borderRadius: '100px',
      minWidth: '342px',
      maxWidth: '342px',

      '.css-bipf1u-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '30px 0 9px 10px',
      },
      '.css-1yaqbwe-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '30px 0 9px 10px',
      },
    },
    '& .MuiFormHelperText-root': {
      maxWidth: '342px',
      margin: 0,
    }
  };

  const validationSchema = Yup.object({
    personalNumber: Yup.string()
      .matches(/^\d+$/, 'პირადი ნომერი უნდა შედგებოდეს მხოლოდ ციფრებისგან')
      .test(
        'len',
        'გთხოვთ გადაამოწმოთ და შეიყვანოთ 11-ნიშნა პირადი ნომერი',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (val:any) => val && val.length === 11
      )
      .required('პირადი ნომრის ველი სავალდებულოა'),
    name: Yup.string()
      .matches(/^[A-Za-z\u10A0-\u10FF]*$/, 'ველი უნდა შეიცავდეს მხოლოდ ტექსტურ სიმბოლოებს')
      .required('სახელის ველი სავალდებულოა'),
    surname: Yup.string()
      .matches(/^[A-Za-z\u10A0-\u10FF]*$/, 'ველი უნდა შეიცავდეს მხოლოდ ტექსტურ სიმბოლოებს')
      .required('გვარის ველი სავალდებულოა'),
    email: Yup.string()
      .email('ელ.ფოსტა უნდა იყოს სწორი ფორმატის')
      .required('ელ.ფოსტის ველი სავალდებულოა'),
    phoneNumber: Yup.string()
      .matches(/^\d+$/, 'ტელეფონის ნომერი უნდა შედგებოდეს მხოლოდ ციფრებისგან')
      .test(
        'len',
        'გთხოვთ გადაამოწმოთ ტელეფონის ნომრის სისწორე, ფორმატი არასწორია',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (val:any) => val && val.length === 9
      )
      .required('ტელეფონის ნომრის ველი სავალდებულოა'),
    password: Yup.string()
      .matches(
        /^(?=.*[@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
        'პაროლი უნდა შეიცავდეს მინიმუმ ერთ დიდ სიმბოლოს, ერთ პატარა სიმბოლოს, ერთ ციფრს და სპეციალურ სიმბოლოს (მაგ. #,%)'
      )
      .test(
        'len',
        'პაროლი უნდა შედგებოდეს სულ მცირე 8 სიმბოლოსგან',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (val:any) => val && val.length >= 8
      )
      .required('პაროლი სავალდებულოა'),
  });

  const handleSubmit = (values:IRegisterCustReqDTO, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}) => {

    registerCust(values)
    .then((res)=> {
      console.log(res)
    })

    console.log('values',values);
    setSubmitting(false)
    // router.push('/');
  };

  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          personalNumber: "",
          name: "",
          surname: "",
          phoneNumber: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Field
                name="personalNumber"
                label="პირადი ნომერი"
                as={TextField}
                onChange={handleChange}
                error={touched?.personalNumber && Boolean(errors?.personalNumber)}
                helperText={touched?.personalNumber && errors?.personalNumber}
                sx={inputStyles}
              />
              <Field
                name="name"
                label="სახელი"
                as={TextField}
                onChange={handleChange}
                error={touched?.name && Boolean(errors?.name)}
                helperText={touched?.name && errors?.name}
                sx={inputStyles}
              />
              <Field
                name="surname"
                label="გვარი"
                as={TextField}
                onChange={handleChange}
                error={touched?.surname && Boolean(errors?.surname)}
                helperText={touched?.surname && errors?.surname}
                sx={inputStyles}
              />
              <Field
                name="email"
                label="ელ. ფოსტა"
                as={TextField}
                onChange={handleChange}
                error={touched?.email && Boolean(errors?.email)}
                helperText={touched?.email && errors?.email}
                sx={inputStyles}
              />
              <Field
                name="phoneNumber"
                label="ტელ. ნომერი"
                as={TextField}
                onChange={handleChange}
                error={touched?.phoneNumber && Boolean(errors?.phoneNumber)}
                helperText={touched?.phoneNumber && errors?.phoneNumber}
                sx={inputStyles}
              />{' '}
              <Field
                name="password"
                label="პაროლი"
                as={TextField}
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
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default CustomerRegistrationForm;
