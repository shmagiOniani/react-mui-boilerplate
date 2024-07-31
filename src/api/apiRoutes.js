export const apiRoutes = {
  getPatientServices: '/services/patients/:id',

  // cc auth api
  loginCorp: '/corp/portal-authentication/login',
  loginOrg: '/corp/portal-authentication/login/org',
  
  // registration-controller
  registerOrg: '/corp/customer-registration/register/corporate-org',
  registerCorp: '/corp/customer-registration/register/corporate-customer',
  activateUser:"​/corp​/customer-registration​/activate"
};
