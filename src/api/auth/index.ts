import { generatePath } from 'react-router-dom';

import API from '../axios';
import { apiRoutes } from '../apiRoutes';


export const loginOrg = (data: any) => API.post(generatePath(apiRoutes.loginOrg), data);

export const loginCorp = (data: any) => API.post(generatePath(apiRoutes.loginCorp), data);

export const registerOrg = (data: any) => API.post(generatePath(apiRoutes.registerOrg), data);

export const registerCorp = (data: any) => API.post(generatePath(apiRoutes.registerCorp), data);
