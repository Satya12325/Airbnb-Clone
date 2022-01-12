import { appComponet } from "./actionType"

const initState = {
    cityname : "Bangalore",
    freecancelation: false,
    Wifi : false,
    kitchen : false
}

export const reduce = (state  = initState , {payload , type}  ) => {
    switch(type){
        case appComponet.HOTEL_CITY : {
            return {
                ...state,
                cityname : payload
            }
        }
        case appComponet.FILTER_WIFI : {
            return {
                ...state,
                Wifi : true,
            }
        }
        case appComponet.FILTER_FREE_CANCELLATION : {
            return{
                ...state,
                freecancelation : payload ? false : true
            }
        }
        case appComponet.FILTER_KITCHEN : {
            return{
                ...state,
                kitchen : true
            }
        }
        default :  
         return state
     }
}