// import axios from 'axios';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Paper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from '../../routes/hooks';

import { palette, primary } from '../../theme/palette';

import Iconify from '../../components/iconify';
import { organizationData } from '../../_mock/organization-data';
import { ISetFieldValue } from '../../types/formik';

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
    '& .MuiFormHelperText-root': {
      maxWidth: '342px',
      margin: 0,
    }
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

  const handleClick = () => {
    router.push('/');
  };

  const checkOrganization = ( setFieldValue: ISetFieldValue) => {
    // axios.post("http://xdata.rs.ge/TaxPayer/RSPublicInfo", {"IdentCode":values.identityCode})
    setTimeout(() => {
      const { FullName } = organizationData[0];
      setFieldValue('organisationName', FullName);
    }, 300);
  };

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
          personalNumber: '',
          name: '',
          surname: '',
          email: '',
          phoneNumber: '',
          businessArea: '',
          businessGeographicLocation: '',
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
        {({ isSubmitting, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex' }}>
              <Stack spacing={3} sx={{ py: 1 }}>
                <Field
                  id="identityCode"
                  name="identityCode"
                  label="საიდენტიფიკაციო კოდი"
                  as={TextField}
                  onChange={handleChange}
                  error={touched?.identityCode && Boolean(errors?.identityCode)}
                  helperText={touched?.identityCode && errors?.identityCode}
                  sx={inputStyles}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            checkOrganization( setFieldValue)
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
                <Field
                  id="organisationName"
                  name="organisationName"
                  label="დასახელება"
                  as={TextField}
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <Field
                  id="directorName"
                  name="directorName"
                  label="დირექტორის სახელი"
                  as={TextField}
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <Field
                  id="directorSurname"
                  name="directorSurname"
                  label="დირექტორის გვარი"
                  as={TextField}
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <Field
                  id="address"
                  name="address"
                  label="მისამართი"
                  as={TextField}
                  onChange={handleChange}
                  sx={inputStyles}
                />

                <Field
                  id="trustedPersonName"
                  name="trustedPersonName"
                  label="მინდობილი პირის სახელი"
                  as={TextField}
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <Field
                  id="trustedPersonSurname"
                  name="trustedPersonSurname"
                  label="მინდობილი პირის გვარი"
                  as={TextField}
                  onChange={handleChange}
                  sx={inputStyles}
                />
                <Field
                  id="trustedPersonPosition"
                  name="trustedPersonPosition"
                  label="მინდობილი პირის თანამდებობა"
                  as={TextField}
                  onChange={handleChange}
                  sx={inputStyles}
                />

                <Field
                  id="password"
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

              <Paper elevation={6} sx={{height: "fit-content", ml: 2, mt:1, p: 1}}>
                <Typography  variant='body1' sx={{textAlign: "center", my: 1}}>საკონტაქტო პირის ინფორმაცია</Typography>
                <Stack spacing={3} sx={{ py: 1, pl: 2 }}>
                  <Field
                    id="personalNumber"
                    name="personalNumber"
                    label="პირადი ნომერი"
                    as={TextField}
                    onChange={handleChange}
                    // error={touched?.personalId && Boolean(errors?.personalId)}
                    // helperText={touched?.personalId && errors?.personalId}
                    sx={inputStyles}
                  />
                 <Field
                    id="name"
                    name="name"
                    label="სახელი"
                    as={TextField}
                    onChange={handleChange}
                    // error={touched?.name && Boolean(errors?.name)}
                    // helperText={touched?.name && errors?.name}
                    sx={inputStyles}
                  />
                  <Field
                    id="surname"
                    name="surname"
                    label="გვარი"
                    as={TextField}
                    onChange={handleChange}
                    // error={touched?.surname && Boolean(errors?.surname)}
                    // helperText={touched?.surname && errors?.surname}
                    sx={inputStyles}
                  />
                  <Field
                    id="email"
                    name="email"
                    label="ელ.ფოსტა"
                    autoComplete='off'
                    as={TextField}
                    onChange={handleChange}
                    // error={touched?.email && Boolean(errors?.email)}
                    // helperText={touched?.email && errors?.email}
                    sx={inputStyles}
                  />
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    label="ტელ. ნომერი"
                    as={TextField}
                    onChange={handleChange}
                    // error={touched?.phoneNumber && Boolean(errors?.phoneNumber)}
                    // helperText={touched?.phoneNumber && errors?.phoneNumber}
                    sx={inputStyles}
                  />
                  <Field
                    id="businessArea"
                    name="businessArea"
                    label="საქმიანობის სფერო"
                    as={TextField}
                    onChange={handleChange}
                    sx={inputStyles}
                  />
                  <Field
                    id="businessGeographicLocation"
                    name="businessGeographicLocation"
                    label="საქმიანობის გეოგრაფიული არეალი"
                    as={TextField}
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
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default OrgRegistrationForm;
