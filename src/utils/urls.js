export const EXCHANGE_URLS =
  "https://api-phanom.phanomprofessionals.com/api/seller";

export const EXCHANGE_URLS_BUYER =
  "https://api-phanom.phanomprofessionals.com/api/buyer";
 
  export const EXCHANGE_URLS_CATEGORY =
    "https://api-phanom.phanomprofessionals.com/api/category";

export const EXCHANGE_URLS_IMAGES =
  "https://api-phanom.phanomprofessionals.com/uploads";  

  const URLS = {

    // Seller URLS
    loginSeller : `${EXCHANGE_URLS}/loginseller`,
    registerSeller :`${EXCHANGE_URLS}/sellerRegister`,


    // Buyer URLS
    loginBuyer : `${EXCHANGE_URLS_BUYER}/buyerlogin`,
    registerBuyer : `${EXCHANGE_URLS_BUYER}/buyerRegister`,
    bookingBuyer : `${EXCHANGE_URLS_BUYER}/booking`,
    contactPortfolio :`${EXCHANGE_URLS_BUYER}/portfolio-contact`,
    // Something Else
    getListOfCategories :`${EXCHANGE_URLS_CATEGORY}/liscategory`
  }

  export default URLS;