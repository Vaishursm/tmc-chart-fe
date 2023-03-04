export const AppReducer = (state, action) => {
    switch(action.type) {
    case 'CHANGE_MOVEMENT_TYPE' :
    return(
    {
    ...state,
    movementType: action.payload
    }
    )
    case 'CHANGE_TIME_RANGE' :
    return(
    {
    ...state,
    timerange: action.payload
    }
    )
    default :
    return state
    }
    }