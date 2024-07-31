// import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Paper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from '../../routes/hooks';

// import { organization } from '../..//_mock/user';
import { palette, primary } from '../../theme/palette';

import Iconify from '../../components/iconify';

function OrgRegistrationForm() {
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
    identityCode: Yup.string()
      .matches(/^\d+$/, 'საიდენტიფიკაციო კოდი უნდა შედგებოდეს მხოლოდ ციფრებისგან')
      .test(
        'len',
        'გთხოვთ გადაამოწმოთ და შეიყვანოთ 9-ნიშნა საიდენტიფიკაციო კოდი',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (val:any) => val && val.length === 9
      )
      .required('საიდენტიფიკაციო კოდის ველი სავალდებულოა'),

    password: Yup.string()
      .matches(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
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

  const handleClick = () => {
    router.push('/');
  };

  // const checkOrganization = (values, setFieldValue) => {
  //   // axios.post("http://xdata.rs.ge/TaxPayer/RSPublicInfo", {"IdentCode":values.identityCode})
  //   setTimeout(() => {
  //     const { FullName } = organization;
  //     console.log('values', values.identityCode, FullName);
  //     setFieldValue('organisationName', FullName);
  //   }, 300);
  // };

  // {
  //   "identityCode": "string",
  //   "organisationName": "string",
  //   "directorName": "string",
  //   "directorSurname": "string",
  //   "address": "string",
  //   "trustedPersonName": "string",
  //   "trustedPersonSurname": "string",
  //   "password": "string",
  //   "trustedPersonPosition": "string",
  //   "contactPersonDto": {
  //     "name": "string",
  //     "surname": "string",
  //     "personalNumber": "string",
  //     "phoneNumber": "string",
  //     "email": "string",
  //     "businessArea": "string",
  //     "businessGeographicLocation": "string"
  //   }
  // }

  return (
    <Box overflow="auto">
      <Formik
        initialValues={{
          identityCode: '',
          organisationName: '',
          directorName: '',
          directorSurname: '',
          address: '',
          trustedPersonName: '',
          trustedPersonSurname: '',
          trustedPersonPosition: '',
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
            <Box sx={{ display: 'flex' }}>
              <Stack spacing={3} sx={{ py: 1 }}>
                <TextField
                  name="identityCode"
                  label="საიდენტიფიკაციო კოდი"
                  onChange={handleChange}
                  error={touched?.identityCode && Boolean(errors?.identityCode)}
                  helperText={touched?.identityCode && errors?.identityCode}
                  sx={inputStyles}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            // checkOrganization(values, setFieldValue)
                            // setValues({ organisationName: 'FullName' });
                          }}
                          edge="end"
                        >
                          <Iconify icon="carbon:send-alt" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  name="organisationName"
                  label="დასახელება"
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <TextField
                  name="directorName"
                  label="დირექტორის სახელი"
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <TextField
                  name="directorSurname"
                  label="დირექტორის გვარი"
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <TextField
                  name="address"
                  label="მისამართი"
                  onChange={handleChange}
                  sx={inputStyles}
                />

                <TextField
                  name="trustedPersonName"
                  label="მინდობილი პირის სახელი"
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <TextField
                  name="trustedPersonSurname"
                  label="მინდობილი პირის გვარი"
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <TextField
                  name="trustedPersonPosition"
                  label="მინდობილი პირის თანამდებობა"
                  onChange={handleChange}
                  sx={inputStyles}
                />

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

              <Paper elevation={6} sx={{height: "fit-content", ml: 2, mt:1, p: 1}}>
                <Typography  variant='body1' sx={{textAlign: "center", my: 1}}>საკონტაქტო პირის ინფორმაცია</Typography>
                <Stack spacing={3} sx={{ py: 1, pl: 2 }}>
                  <TextField
                    name="personalNumber"
                    label="პირადი ნომერი"
                    onChange={handleChange}
                    // error={touched?.personalId && Boolean(errors?.personalId)}
                    // helperText={touched?.personalId && errors?.personalId}
                    sx={inputStyles}
                  />
                  <TextField
                    name="name"
                    label="სახელი"
                    onChange={handleChange}
                    // error={touched?.name && Boolean(errors?.name)}
                    // helperText={touched?.name && errors?.name}
                    sx={inputStyles}
                  />
                  <TextField
                    name="surname"
                    label="გვარი"
                    onChange={handleChange}
                    // error={touched?.surname && Boolean(errors?.surname)}
                    // helperText={touched?.surname && errors?.surname}
                    sx={inputStyles}
                  />
                  <TextField
                    name="email"
                    label="ელ. ფოსტა"
                    onChange={handleChange}
                    // error={touched?.email && Boolean(errors?.email)}
                    // helperText={touched?.email && errors?.email}
                    sx={inputStyles}
                  />
                  <TextField
                    name="phoneNumber"
                    label="ტელ. ნომერი"
                    onChange={handleChange}
                    // error={touched?.phoneNumber && Boolean(errors?.phoneNumber)}
                    // helperText={touched?.phoneNumber && errors?.phoneNumber}
                    sx={inputStyles}
                  />
                  <TextField
                    name="businessArea"
                    label="საქმიანობის სფერო"
                    onChange={handleChange}
                    sx={inputStyles}
                  />
                  <TextField
                    name="businessGeographicLocation"
                    label="საქმიანობის გეოგრაფიული არეალი"
                    onChange={handleChange}
                    sx={inputStyles}
                  />
                </Stack>
              </Paper>
            </Box>

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

export default OrgRegistrationForm;
