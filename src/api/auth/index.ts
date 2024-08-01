import { generatePath } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import { 
    ILoginCustReqDTO,
    ILoginCustResDTO,
    ILoginOrgReqDTO,
    ILoginOrgResDTO,
    IRegisterCustReqDTO,
    IRegisterCustResDTO,
    IRegisterOrgReqDTO,
    IRegisterOrgResDTO 
} from './models';
import { apiRoutes } from '../apiRoutes';
import API from '../axios';


export const loginOrg = (data: ILoginOrgReqDTO): Promise<AxiosResponse <ILoginOrgResDTO>> => API.post(generatePath(apiRoutes.loginOrg), data);

export const loginCust = (data: ILoginCustReqDTO): Promise<AxiosResponse <ILoginCustResDTO>> => API.post(generatePath(apiRoutes.loginCust), data);

export const registerOrg = (data: IRegisterOrgReqDTO): Promise<AxiosResponse<IRegisterOrgResDTO>> => API.post(generatePath(apiRoutes.registerOrg), data);

export const registerCust = (data: IRegisterCustReqDTO): Promise<AxiosResponse<IRegisterCustResDTO>> => API.post(generatePath(apiRoutes.registerCust), data);
