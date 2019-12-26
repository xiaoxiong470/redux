export default function handleActions(state={},action={}){
   // console.log("action",action);
    switch(action.type){
        case "LIST_USERS_lOADING":
           return {
               ...state,
               ...action
           }
        case "LIST_USERS_SUCCESS":
            return {
                ...state,
                ...action
            };
        case "LIST_USERS_ERROR":
            return {
                ...state,
                ...action
            };
        case "ROLLING_lOADING":
            return {
                ...state,
                ...action
            }
        case "ROLLING_SUCCESS":
            return {
                ...state,
                ...action
            };
        case "ROLLING_ERROR":
            return {
                ...state,
                ...action
            };
        default:
            return state;
    }
}