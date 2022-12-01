export default async function userFetchMiddleWare(dispatch){
    let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    let userData = await response.json();
    dispatch({
        type : "succes user",
        payload : userData
    })
    
}