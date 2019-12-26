
export function showUsers() {
    let url = "data.json";
    return {
        url:url,
        types: ["LIST_USERS_lOADING","LIST_USERS_SUCCESS","LIST_USERS_ERROR"]
    }
}
