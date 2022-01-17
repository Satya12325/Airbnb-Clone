import { appComponet } from "./actionType"

export const nightstay = (payload) => {
    return{
        type : appComponet.NIGHT_STAY,
        payload
    }
}
export const  guests = (payload) => {
    return {
        type : appComponet.GUEST,
        payload
    }
}
export const id = (payload) => {
    return{
        type : appComponet.ID,
        payload
    }
}
export const loginauth = (payload) => {
    return {
        type : appComponet.AUTH_LOGIN,
        payload
    }
}

export const hotelcity = (payload) => {
    return {
        type : appComponet.HOTEL_CITY,
    payload
    }
}
export const filterprice = (payload) => {
   return{
    type : appComponet.FILTER_PRICE,
    payload
   }
}
export const filterfreecancelation = (payload) => {
   return{
    type : appComponet.FILTER_FREE_CANCELLATION,
    payload
   }
}
export const filterwifi = (payload) => {
    return{
     type : appComponet.FILTER_WIFI,
    payload
    }
}
export const filterkitchen = (payload) => {
    return{
     type : appComponet.FILTER_KITCHEN,
    payload
    }
}
export const filterAircondition = (payload) => {
    return{
     type : appComponet.FILTER_AIR_CONDITIONING,
    payload
    }
}
export const filterWashingmachine = (payload) => {
    return{
     type : appComponet.FILTER_WASHING_MACHINE,
    payload
    }
}
export const filterPool = (payload) => {
    return{
     type : appComponet.FILTER_POOL,
    payload
    }
}
export const filterFreeparking = (payload) => {
    return{
     type : appComponet.FILTER_FREE_PARKING,
    payload
    }
}
