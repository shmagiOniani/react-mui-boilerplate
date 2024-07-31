import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { outlinedInputClasses } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { palette, primary } from 'src/theme/palette';

import Iconify from 'src/components/iconify';

function LoginForm() {
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const inputStyles = {
    '& .MuiInputLabel-root': {
      color: theme.palette.grey[600],
      [`&.${outlinedInputClasses.focused} `]: {
        color: alpha(theme.palette.grey[600], 0.9),
      },
      top: '15px',
      left: '57px',
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root': {
      fontSize: '14px',
      borderRadius: '100px',

      '.css-bipf1u-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '30px 0 9px 10px',
      },
      '.css-1yaqbwe-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '30px 0 9px 10px',
      },
      '.css-14lo706': {
        display: 'none',
      },
    },
  };

  const validationSchema = Yup.object({
    organization: Yup.string().required('ორგანიზაცია სავალდებულოა'),
    userName: Yup.string().required('მომხმარებლის ველი სავალდებულოა'),
    password: Yup.string().required('პაროლი სავალდებულოა'),
  });

  const handleClick = () => {
    router.push('/');
  };

  return (
    <Box
      sx={{
        p: 5,
        pt: 1,
      }}
    >
      <Formik
        initialValues={{
          organization: '',
          userName: '',
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
                name="organization"
                label="ორგანიზაცია"
                onChange={handleChange}
                error={touched?.organization && Boolean(errors?.organization)}
                helperText={touched?.organization && errors?.organization}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="mdi:company" />
                    </InputAdornment>
                  ),
                }}
                sx={inputStyles}
              />
              <TextField
                name="userName"
                label="მომხმარებელი"
                onChange={handleChange}
                error={touched?.userName && Boolean(errors?.userName)}
                helperText={touched?.userName && errors?.userName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="fa:user" />
                    </InputAdornment>
                  ),
                }}
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
                borderRadius: '100px',

                '&:hover': {
                  backgroundColor: primary.main,
                },
              }}
            >
              ავტორიზაცია
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default LoginForm;
