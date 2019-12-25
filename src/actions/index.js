

/*let users=[
        {"name": "kris","age": 29},
        {"name": "lzh","age": 31},
        {"name": "lzs","age": 27}
    ]*/
export function showUsers(){
    let url="data.json";
    return (dispatch,getState)=>{
        let  action={
            type:"LIST_USERS_lOADING"
        }
        dispatch(action);
        setTimeout(()=>{
            fetch(url)
                .then(response=>{
                    if(response.ok){
                        return  response.clone().json();
                        /* console.log("users",users);取不到数据
                         action={
                             type:"LIST_USERS_SUCCESS",
                             users:users
                         }*/
                    }

                }).then(value=>{
                action={
                    type:"LIST_USERS_SUCCESS",
                    users:value
                }
                dispatch(action);
            }).catch(error=>{
                action={
                    type:"LIST_USERS_ERROR",
                    error:error
                }
                dispatch(action);
            })
        },5000);

    }


}