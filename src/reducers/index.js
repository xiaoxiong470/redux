export default function handleActions(state={loading:true,payLoad:{}},action={}){
    //console.log("action",action);
    switch(action.type){
        case "LIST_USERS_lOADING":
           return {
               ...state,
               payLoad:{loading:true}};
        case "LIST_USERS_SUCCESS":
            return {
                ...state,
                payLoad:{users:action.users,loading:false}
            };
        case "LIST_USERS_ERROR":
            return {
                ...state,
                payLoad:{error:action.error,loading:false}
            };
        default:
            return state;
    }
}