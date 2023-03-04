import { useReducer, createContext, useState, useEffect } from "react";
import React from "react";
import {AppReducer} from "./AppReducer"
import axios from "axios";

const URL = "http://localhost:8000/tmc-backend/api/tmcdata"

const initialState = {
movementType : "EBL",
timerange : 15
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
const [state,dispatch] = useReducer(AppReducer, initialState)
const [data, setData] = useState([])
useEffect(() => {
axios
.post(URL, {timerange: state.timerange})
.then((res) => {
setData(res.data)
})
.catch((error) => {
console.log(error)
})
}, [state.timerange])

function changeMovementType(type){
dispatch({
type: 'CHANGE_MOVEMENT_TYPE',
payload: type
})
}
function changeTimeRange(timerange){
dispatch({
type: 'CHANGE_TIME_RANGE',
payload: timerange
})
}

return (<GlobalContext.Provider value={{movementType:state.movementType,
timerange:state.timerange, data, changeMovementType, changeTimeRange}}>
{children}
</GlobalContext.Provider>
)
}