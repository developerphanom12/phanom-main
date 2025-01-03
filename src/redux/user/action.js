import { persistTypes, sagaTypes } from "./types";

// Persist Actions
export const stringAction = (data)=>({
    type: persistTypes.STRING,
    data,
})

export const userDataAction = (data)=>({
    type: persistTypes.USER_DATA,
    data,
})

export const useDetailsAction =(data)=>({
    type:persistTypes.USER_DETAILS,
    data,
})

export const loaderAction = (data)=>({
    type: persistTypes.LOADER,
    data,
})

export const portfolioDataACtion = (data) =>({
    type:persistTypes.PORTFOLIO_DATA,
    data,
})

//Saga Actions

//Auth=========>
export const postAPIAction = (URL, data, callback)=>({
    type: sagaTypes.USER_LOGIN,
    data,
    callback,
    URL,
})

export const getAPIAction = (URL, callback) =>({
    type: sagaTypes.FETCH_USERS,
    callback,
    URL,
})






