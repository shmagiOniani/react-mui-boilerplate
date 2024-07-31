import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Tab, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TabList, TabPanel, TabContext } from '@mui/lab';

import { bgGradient } from '../../theme/css';

import Logo from '../../components/logo';

import LoginForm from './login-form';
import OrgRegistrationForm from './org-registration-form';
import CustomerRegistrationForm from './customer-registration-form';

export default function LoginView() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();
  const [mainTab, setMainTab] = useState('1');
  const [regTab, setRegTab] = useState('1');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event:any, newValue: any) => {
    setRegTab(newValue);
  };

  return (
    <Box
    
      sx={{
        backgroundColor: theme.palette.background.defaultDark,
        // backgroundColor: theme.palette.background.defaultDark,
        ...bgGradient({
          imgUrl: '/assets/background/login-bg.png',
        }),
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            width: 1,
            maxWidth: "fit-content",
            overflow:"auto"
          }}
        >
          <Box
            sx={{
              width: { xs: '100%' },
              display: 'flex',
            }}
          >
            <Logo sx={{ mt: 4, mb: 2, mx: 'auto' }} color="black" disabledLink />
          </Box>

          <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 800 }}>
            Wissol Card information System
          </Typography>

          {mainTab === '1' ? (
            <Typography variant="body2" sx={{ mt: 2, mb: 5, textAlign: 'center' }}>
              არ ხართ რეგისტრირებული?
              <Link
                onClick={() => setMainTab('2')}
                variant="subtitle2"
                sx={{ ml: 0.5, '&:hover': { cursor: 'pointer' } }}
              >
                რეგისტრაცია
              </Link>
            </Typography>
          ) : (
            <Typography variant="body2" sx={{ mt: 2, mb: 5, textAlign: 'center' }}>
              უკვე ხართ რეგისტრირებული?
              <Link
                onClick={() => setMainTab('1')}
                variant="subtitle2"
                sx={{ ml: 0.5, '&:hover': { cursor: 'pointer' } }}
              >
                ავტორიზაცია
              </Link>
            </Typography>
          )}


          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={mainTab} >
              <TabPanel sx={{pt: 0}} value="1" 
              children={<LoginForm />} 
              />
              <TabPanel sx={{pt: 0}} value="2">
                <TabContext value={regTab}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                      <Tab
                        label="ფიზიკური პირი"
                        value="1"
                        sx={{ color: theme.palette.grey[600] }}
                      />
                      <Tab
                        label="იურიდიული პირი"
                        value="2"
                        sx={{ color: theme.palette.grey[600] }}
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1" 
                  children={<CustomerRegistrationForm/>} 
                  />
                  <TabPanel value="2" 
                  children={<OrgRegistrationForm/>} 
                  />
                </TabContext>
              </TabPanel>
            </TabContext>
          </Box>
        </Card>
      </Stack>
    </Box>
  );
}
