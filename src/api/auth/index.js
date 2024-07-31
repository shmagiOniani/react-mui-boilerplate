import { generatePath } from 'react-router-dom';

import API from '../axios';
import { apiRoutes } from '../apiRoutes';


export const loginOrg = (data) => API.post(generatePath(apiRoutes.loginOrg), data);

export const loginCorp = (data) => API.post(generatePath(apiRoutes.loginCorp), data);

export const registerOrg = (data) => API.post(generatePath(apiRoutes.registerOrg), data);

export const registerCorp = (data) => API.post(generatePath(apiRoutes.registerCorp), data);
