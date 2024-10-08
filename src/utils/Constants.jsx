export const HTTPMethod = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
};

export const PORT = {
  qa: '3009',
  uat: '3000',
  prod: '3008',
};
export const MAPS_API_KEY="AIzaSyC_pj9pk_9fMHL0JDsgstUXlc67nqB97zw"
export const BASE_URL = `http://16.171.224.246:${PORT.qa}/api/`;

export const apiHost = {
  // baseURL: 'http://10.0.2.2:3005/api/',
  // baseURL: "http://www.api.astafa.in/api/",
  // baseURL: "https://api.astafa.in/api/",
  baseURL: 'http://16.171.224.246:3000/api/',
  apiKey: '',
};

export const API = {
  loginAuthenticateUrl: BASE_URL + 'authuser/login',
  logoutAuthenticateUrl: BASE_URL + 'authuser/logout',
  signUpUrl: BASE_URL + 'authuser/signup',
  signupVerifyUrl: BASE_URL + 'authuser/signupverify',
  forgotPasswordUrl: BASE_URL + 'authuser/forgotpassword',
  resetPasswordUrl: BASE_URL + 'authuser/resetpassword',
  serviceTypeUrl: BASE_URL + 'servicetypes',
  locationIdUrl: BASE_URL + 'locations',
  orderPickupUrl: BASE_URL + 'order',
  viewOrderListUrl: BASE_URL + 'order',
  countryList: BASE_URL + 'country',
  stateList: BASE_URL + 'state',
  cityList: BASE_URL + 'city',
  vehicles: BASE_URL + 'vehicles',
  viewDeliveryBoyOrderUrl: BASE_URL + 'order/deliveryboy/',
  viewConsumerOrderUrl: BASE_URL + 'order/consumer/',
  payment: BASE_URL + 'payment',
  documentsUpload: BASE_URL + 'documents/upload',
  vehicletypesUrl: BASE_URL + 'vehicletypes',
  planningSetupUrl: BASE_URL + 'planning',
  updateUserProfile: BASE_URL,
  viewImageUrl: BASE_URL + 'documents/view/',
  lookupDataUrl: BASE_URL + 'lookup',
  getAllocatedDeliveryBoy: BASE_URL + 'order/allocated/details?o=',
  viewOrderDetail: BASE_URL + 'order/view/',
  enterprisebranch: BASE_URL + 'enterprisebranch/get/',
  enterpriseOrder: BASE_URL + 'enterprise/order/',
  getNotificationUrl: BASE_URL + 'notification/list/',
  createDeliveryBoyAddressUrl: BASE_URL + 'daddressbook/create',
  getDeliveryBoyAddressListUrl: BASE_URL + 'daddressbook/list/',
  addressBookUpdateDeliveryBoyUrl: BASE_URL + 'daddressbook/update',
  addressBookUpDeleteDeliveryBoyUrl: BASE_URL + 'daddressbook/delete/',
  createConsumerAddressUrl: BASE_URL + 'caddressbook/create',
  getConsumerAddressListUrl: BASE_URL + 'caddressbook/list/',
  addressBookUpdateConsumerUrl: BASE_URL + 'caddressbook/update',
  addressBookUpDeleteConsumerUrl: BASE_URL + 'caddressbook/delete/',
  getCompanyListUrl: BASE_URL + 'deliveryboy/connections/',
  getDistancePriceListUrl: BASE_URL + 'vehicletypes/price/list?d=',
  getFaqListUrl: BASE_URL + 'faq',
};