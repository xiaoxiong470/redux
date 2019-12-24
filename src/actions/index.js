
let users=[
        {"name": "kris","age": 29},
        {"name": "lzh","age": 31},
        {"name": "lzs","age": 27}
    ]
export function showUsers(){
    let url="./data.json";
    let users=[];
    let  action={
        type:"LIST_USERS_lOADING"
    }


    /*fetch(url)
        .then(response=>{
            if(response.ok){
                users= response.clone().json();
                console.log(users);
                action={
                    type:"LIST_USERS_SUCCESS",
                    users:users
                }
            }
            action={
                type:"LIST_USERS_ERROR",
                error:response.error
            }
        })
        .catch(error=>(console.log(error)))*/
    action={
        type:"LIST_USERS_SUCCESS",
        users:users
    };
    return action;
}