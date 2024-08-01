import { Helmet } from 'react-helmet-async';

import { LoginView } from '../sections/login';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | WISSOL App </title>
      </Helmet>

      <LoginView />
    </>
  );
}
