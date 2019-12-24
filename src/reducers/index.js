export default function handleActions(state={loading:true,payLoad:{}},action={}){
    console.log("action",action);
    switch(action.type){
        case "LIST_USERS_lOADING":
            console.log(1);
           return {
               ...state,
               loading:true,
               payLoad:{}};
        case "LIST_USERS_SUCCESS":
           console.log(2);
            return {
                ...state,
                loading:false,
                payLoad:{users:action.users}
            };
        case "LIST_USERS_ERROR":
            console.log(3);
            return {
                ...state,
                loading:false,
                payLoad:{error:action.error}
            };
        default:
            return ;
    }
}