import { appComponet } from "./actionType"

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
