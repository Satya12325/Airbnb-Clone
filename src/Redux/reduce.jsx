import { appComponet } from "./actionType"

const initState = {
    cityname : "Bangalore",
}

export const reduce = (state  = initState , {payload , type}  ) => {
    switch(type){
        case appComponet.HOTEL_CITY : {
            return {
                ...state,
                cityname : payload
            }
        }
        default :  
         return state
     }
}