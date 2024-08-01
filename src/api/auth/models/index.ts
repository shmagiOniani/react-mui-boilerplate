export interface ILoginCustReqDTO {
  username: string;
  password: string;
  otp: string;
}

export interface ILoginCustResDTO {
  customer: {
    id: number;
    name: string;
    surname: string;
    personalNumber: string;
    email: string;
    emailVerified: boolean;
    phoneNumber: string;
    identityVerified: boolean;
    status: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface IRegisterCustReqDTO {
  email: string;
  personalNumber: string;
  name: string;
  surname: string;
  phoneNumber: string;
  password: string;
}

export interface IRegisterCustResDTO {
  createTime: string;
  lastUpdateTime: string;
  createdBy: string;
  lastUpdatedBy: string;
  id: number;
  name: string;
  surname: string;
  personalNumber: string;
  email: string;
  emailVerified: true;
  phoneNumber: string;
  password: string;
  identityVerified: true;
  status: string;
}

export interface ILoginOrgReqDTO {
  email: string;
  password: string;
  otp: string;
}

export interface ILoginOrgResDTO {
  customer: {
    id: number;
    identityCode: string;
    organisationName: string;
    directorName: string;
    directorSurname: string;
    address: string;
    trustedPersonName: string;
    trustedPersonSurname: string;
    trustedPersonPosition: string;
    status: string;
    contactPerson: {
      id: number;
      name: string;
      surname: string;
      position: string;
      phone: string;
      email: string;
    };
  };
  accessToken: string;
  refreshToken: string;
}

export interface IRegisterOrgReqDTO {
  identityCode: string;
  organisationName: string;
  directorName: string;
  directorSurname: string;
  address: string;
  trustedPersonName: string;
  trustedPersonSurname: string;
  password: string;
  trustedPersonPosition: string;
  contactPersonDto: {
    name: string;
    surname: string;
    personalNumber: string;
    phoneNumber: string;
    email: string;
    businessArea: string;
    businessGeographicLocation: string;
  };
}

export interface IRegisterOrgResDTO {
  createTime: string;
  lastUpdateTime: string;
  createdBy: string;
  lastUpdatedBy: string;
  id: number;
  identityCode: string;
  organisationName: string;
  directorName: string;
  directorSurname: string;
  address: string;
  trustedPersonName: string;
  trustedPersonSurname: string;
  trustedPersonPosition: string;
  emailVerified: true;
  status: string;
  contactPerson: {
    createTime: string;
    lastUpdateTime: string;
    createdBy: string;
    lastUpdatedBy: string;
    id: number;
    name: string;
    surname: string;
    personalNumber: string;
    phoneNumber: string;
    email: string;
    emailVerified: true;
    businessArea: string;
    businessGeographicLocation: string;
  };
  contract: {
    createTime: string;
    lastUpdateTime: string;
    createdBy: string;
    lastUpdatedBy: string;
    id: number;
    name: string;
    paymentType: string;
    calculationType: string;
    sanction: string;
    corporateCustomer: {
      createTime: string;
      lastUpdateTime: string;
      createdBy: string;
      lastUpdatedBy: string;
      id: number;
      name: string;
      surname: string;
      personalNumber: string;
      email: string;
      emailVerified: true;
      phoneNumber: string;
      password: string;
      identityVerified: true;
      status: string;
    };
    calculationConditions: [
      {
        createTime: string;
        lastUpdateTime: string;
        createdBy: string;
        lastUpdatedBy: string;
        id: number;
        purchaseType: string;
        agreementType: string;
        value: number;
      }
    ];
    active: true;
  };
  password: string;
}
